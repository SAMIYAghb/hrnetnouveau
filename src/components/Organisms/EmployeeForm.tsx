import React, { useCallback, useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { selectDepartments } from "../../redux/slices/DepatementSlice";
import { addEmployee } from "../../redux/slices/EmployeeSlice";
import { selectStates } from "../../redux/slices/StateSlice";
import ButtonUI from "../Atoms/Button/Button";
import DatePickerField from "../Molecules/DatePickerField/DatePickerField";
import InputField from "../Molecules/InputField/InputField";
import SelectField from "../Molecules/SelectField/SelectField";
import Modal from "modal-labrary";
import "modal-labrary/lib/Modal.css";

/**
 * EmployeeForm component is a form for adding new employees to the application.
 * It handles form input, validation, and submission.
 *
 * @component
 * @returns {React.FC} A form for adding new employees.
 *
 * @example
 * return <EmployeeForm />
 */

const EmployeeForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const dispatch = useDispatch();

  /** Formik form configuration */
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      zipCode: "",
      department: "",
      state: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name is required")
        .max(100, "First Name cannot exceed 100 characters"),
      lastName: Yup.string()
        .required("Last Name is required")
        .max(100, "Last Name cannot exceed 100 characters"),
      dateOfBirth: Yup.date()
        .nullable()
        .required("Date of birth is required")
        .test("age", "You must be at least 18 years old", (value) => {
          if (!value) return false; // Si la date de naissance n'est pas fournie, cela renvoie faux
          const today = new Date();
          const birthDate = new Date(value);
          const age = today.getFullYear() - birthDate.getFullYear();
          const monthDifference = today.getMonth() - birthDate.getMonth();
          if (
            monthDifference < 0 ||
            (monthDifference === 0 && today.getDate() < birthDate.getDate())
          ) {
            return age >= 18; // Si la date d'anniversaire n'est pas encore passée cette année, l'âge doit être supérieur ou égal à 18
          }
          return age >= 18; // Sinon, vérifie simplement l'âge
        }),
      startDate: Yup.date().nullable().required("Start date is required"),
      street: Yup.string().required("Street is required"),
      city: Yup.string().required("City is required"),
      zipCode: Yup.number().required("Zip Code is required"),
      department: Yup.string().required("Department is required"),
      state: Yup.string().required("State is required"),
    }),
    validateOnBlur: true, // La validation se fait lorsque l'utilisateur quitte un champ
  validateOnChange: false, // Désactive la validation lors du changementF
    onSubmit: (values) => {
      // console.log("Form data", values);
      dispatch(addEmployee(values)); // Dispatch the addEmployee action

      // Load existing employees from localStorage, or start with an empty array
      const existingEmployees = JSON.parse(
        localStorage.getItem("employees") || "[]"
      );

      // Add the new employee to the existing array
      const updatedEmployees = [...existingEmployees, values];
      // Save the updated employee array back to localStorage
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));

      //afficher la modale
      openModal();
      formik.resetForm(); // Réinitialise le formulaire après soumission
    },
  });

  const departments = useSelector(selectDepartments);
  const departmentOptions = useMemo(
    () =>
      departments.map((dep) => ({
        label: dep,
        value: dep,
      })),
    [departments]
  );

  const states = useSelector(selectStates);
  // Extraire les noms des États
  const stateOptions = useMemo(
    () =>
      states.map((state) => ({
        label: state.name,
        value: state.name,
      })),
    [states]
  );

  if (!departments || !states) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="employee-form">
        <InputField
          label="First Name"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.firstName && formik.errors.firstName
              ? formik.errors.firstName
              : ""
          }
        />

        <InputField
          label="Last Name"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.lastName && formik.errors.lastName
              ? formik.errors.lastName
              : ""
          }
        />

        <DatePickerField
          label="Date of Birth"
          name="dateOfBirth"
          value={
            formik.values.dateOfBirth ? dayjs(formik.values.dateOfBirth) : null
          } // Conversion en Dayjs
          onChange={(date: Dayjs | null) => {
            formik.setFieldValue(
              "dateOfBirth",
              date ? date.toISOString() : null
            ); // Convertir la date en ISO pour stocker dans Formik
          }}
          error={
            formik.errors.dateOfBirth && formik.touched.dateOfBirth
              ? formik.errors.dateOfBirth
              : ""
          }
        />

        <DatePickerField
          label="Start Date"
          name="startDate"
          value={
            formik.values.startDate ? dayjs(formik.values.startDate) : null
          } // Conversion en Dayjs
          onChange={(date: Dayjs | null) => {
            const isoDate = date ? date.toISOString() : null;
            formik.setFieldValue("startDate", isoDate); // Convertir la date en ISO pour stocker dans Formik
          }}
          error={
            formik.errors.startDate && formik.touched.startDate
              ? formik.errors.startDate
              : ""
          }
        />

        <div className="adress_item">
          <p className="adress_title">Address</p>
          <InputField
            label="Street"
            name="street"
            value={formik.values.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.street && formik.errors.street
                ? formik.errors.street
                : ""
            }
          />

          <InputField
            label="City"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.city && formik.errors.city
                ? formik.errors.city
                : ""
            }
          />

          <SelectField
            label="State"
            value={formik.values.state}
            options={stateOptions}
            onChange={(value) => formik.setFieldValue("state", value)}
          />

          <InputField
            label="Zip Code"
            name="zipCode"
            type="number"
            value={formik.values.zipCode}
            // onChange={formik.handleChange}
            onChange={(e) =>
              formik.setFieldValue("zipCode", Number(e.target.value))
            } // Convert to number
            onBlur={formik.handleBlur}
            error={
              formik.touched.zipCode && formik.errors.zipCode
                ? formik.errors.zipCode
                : ""
            }
          />
        </div>

        <SelectField
          label="Department"
          value={formik.values.department}
          options={departmentOptions}
          onChange={(value) => formik.setFieldValue("department", value)}
        />

        <ButtonUI text="Save" />
      </form>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Employee Added</h2>
          <p className="custom-modal-content">
            Employee has been successfully added!
          </p>
          <button className="close" onClick={closeModal}>
            Close
          </button>
        </Modal>
      )}
    </>
  );
};

export default EmployeeForm;

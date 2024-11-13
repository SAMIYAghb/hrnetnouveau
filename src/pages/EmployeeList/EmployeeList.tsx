import dayjs from "dayjs";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TableUI from "../../components/Atoms/Table/TableUI";
import EmployeeTableHeader from "../../components/Organisms/EmployeeTableHeader";
import PaginationControls from "../../components/Organisms/PaginationControls";
import { setEmployees } from "../../redux/slices/EmployeeSlice";
import { selectStates } from "../../redux/slices/StateSlice";
import { RootState } from "../../redux/store";
import { Option } from "../../../types";
import { useMemo } from "react";

const EmployeeList = () => {
  const [searchString, setSearchString] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch(); // Initialize dispatch
  const employees = useSelector(
    (state: RootState) => state.employees.employees
  );
  const states = useSelector(selectStates);

  const MemoizedTableUI = React.memo(TableUI);
  const MemoizedPaginationControls = React.memo(PaginationControls);
  useEffect(() => {
    /**
     * Load employees from localStorage when the component mounts.
     * If employees are not already in Redux state, populate them from localStorage.
     */
    const storedEmployees = JSON.parse(
      localStorage.getItem("employees") || "[]"
    );

    // If the Redux state is empty, populate it from localStorage
    if (!employees.length && storedEmployees.length) {
      dispatch(setEmployees(storedEmployees)); // Dispatch action to set employees in Redux state
    }
  }, [dispatch, employees.length]);

  // Utiliser useMemo pour calculer les employés filtrés une seule fois
  const stateAbbreviationMap = useMemo(
    () =>
      states.reduce((map, state) => {
        map[state.name] = state.abbreviation;
        return map;
      }, {} as Record<string, string>), // Explicitly define the type as Record<string, string>
    [states]
  );
 
  const filteredEmployees = useMemo(() => {
    return employees
      .map((employee) => ({
        ...employee,
        zipCode: Number(employee.zipCode),
        state: stateAbbreviationMap[employee.state] || employee.state, // Replace state name with abbreviation
      }))
      .filter((employee) =>
        Object.entries(employee).some(([key, value]) => {
          const stringValue =
            typeof value === "number"
              ? value.toString()
              : value.toLowerCase().trim();
          if (key === "startDate" || key === "dateOfBirth") {
            const formattedDate = dayjs(value).format("DD/MM/YYYY");
            return formattedDate.includes(searchString.toLowerCase().trim());
          }
          return stringValue.includes(searchString.toLowerCase().trim());
        })
      );
  }, [employees, searchString, stateAbbreviationMap]);
  /**
   * Update the search term and reset pagination to the first page.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event
   */
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchString(e.target.value);
      setCurrentPage(1); // Reset to first page when search changes
    },
    []
  );

  /**
   * Update the number of entries per page and reset pagination to the first page.
   * @param {string | number} value - The new entries per page value
   */
  const handleEntriesChange = useCallback((value: string | number) => {
    setEntriesPerPage(Number(value));
    setCurrentPage(1); // Reset to first page when changing entries per page
  }, []);

  /** Total number of entries after filtering */
  const totalEntries = filteredEmployees.length;
  /** Start index for pagination */
  const startIndex = (currentPage - 1) * entriesPerPage;
  /** Paginated list of employees for the current page */
  const endIndex = startIndex + entriesPerPage;
  const paginatedEmployees = filteredEmployees.slice(startIndex, endIndex);

  /**
   * Options for the number of entries per page.
   * @type {Option[]}
   */
  const options: Option[] = [
    { label: "10", value: "10" },
    { label: "25", value: "25" },
    { label: "50", value: "50" },
    { label: "100", value: "100" },
  ];

  return (
    <>
      <div className="title_container">
        <h1>Current Employees</h1>
      </div>
      <div className="container">
        <EmployeeTableHeader
          searchString={searchString}
          onSearchChange={handleSearchChange}
          onEntriesChange={handleEntriesChange}
          options={options}
        />
        {/* <TableUI data={paginatedEmployees} /> */}
        <MemoizedTableUI data={paginatedEmployees} />

        <MemoizedPaginationControls
          currentPage={currentPage}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          onPrevious={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          onNext={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(totalEntries / entriesPerPage))
            )
          }
        />
        <Link to="/" className="back">
          Home
        </Link>
      </div>
    </>
  );
};

export default EmployeeList;

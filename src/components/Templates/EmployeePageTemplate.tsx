import React from "react";
import EmployeeForm from "../Organisms/EmployeeForm";
import { Link } from "react-router-dom";
import '../../App.css'

const EmployeePageTemplate: React.FC = React.memo(() => (
  <div className="create_employee">
    <div className="title_container">
      <h1>HRnet</h1>
      <Link to="/employee-list" className="back">View Current Employees</Link>
      <h2>Create Employee</h2>
      <EmployeeForm />
    </div>
  </div>
));

export default EmployeePageTemplate;

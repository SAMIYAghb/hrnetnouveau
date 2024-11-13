import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import CreateEmployeesPage from "./pages/CreateEmployeesPage/CreateEmployeesPage";
import EmployeeList from "./pages/EmployeeList/EmployeeList";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<CreateEmployeesPage />}/>
            <Route path='/employee-list' element={<EmployeeList />}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

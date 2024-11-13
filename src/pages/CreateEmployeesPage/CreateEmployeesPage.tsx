import React from "react";
import EmployeePageTemplate from "../../components/Templates/EmployeePageTemplate";

const CreateEmployeesPage: React.FC = () => <EmployeePageTemplate />;

export default CreateEmployeesPage;

// Dans Ant Design, les événements comme onSubmit ne sont pas automatiquement acceptés sur le composant Form natif. Pour résoudre cela, vous pouvez utiliser onFinish à la place, qui est la méthode Ant Design pour gérer la soumission de formulaire

import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="login" component={Login} title="Please login" initial />
      <Scene key="employeeList" component={EmployeeList} title="Employees" />
    </Router>
  );
};

export default RouterComponent;

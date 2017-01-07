import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth(); // get currently signed in user
  // Path to our JSON datastore
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift }) // Post data to firebase
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE }); // Reset the fields in the form
        Actions.employeeList({ type: 'reset' }); // Navigate back to employeeList
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

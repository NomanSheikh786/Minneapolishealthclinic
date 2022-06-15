import firebase from './index';
import React, {useState} from 'react';

const SubmitData = (finalForm, setLoad, navigation, formName) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  let id = firebase.auth().currentUser.uid;
  setLoad(true);
  firebase
    .database()
    .ref(`users/${id}/forms/${formName}/${today}`)
    .push({
      finalForm,
      formStatus: false,
      // confirmpassword,
    })
    .then(res => {
      console.log('data successfully added');
      setLoad(false);
      navigation.navigate('FormSubmit', {
        title: 'Thank You!',
        text: 'Your submission has been received',
      });
    })
    .catch(err => {
      alert(err.message);

      console.log(err, 'Erorrr');
    });
};

export {SubmitData};

import {launchImageLibrary} from 'react-native-image-picker';
import firebase from './index';

const addImage = async (setImage, path, child, formCheck, imgResult) => {
  console.log(setImage, path, child, formCheck, imgResult);
  if (!formCheck) {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      // includeBase64: true,
    });

    if (result?.assets) {
      const response = await fetch(result.assets[0].uri);
      console.log(response);
      const blob = await response.blob();
      console.log('blob', blob);
      try {
        let id = firebase.auth().currentUser.uid;
        if (!id) {
          console.log('No user found');
        } else {
          firebase
            .storage()
            .ref(`users/${path}/${id}`)
            .child(child)
            .put(blob)
            .then(snapshot => console.log('image has been successfully added'))
            .then(() => {
              getImage(setImage, path, child);

              alert(`user ${child} successfully added`);
            })
            .catch(e => console.log(e));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('No match');
    }
  } else {
    if (imgResult) {
      const response = await fetch(imgResult);
      console.log(response);
      const blob = await response.blob();
      console.log('blob', blob);
      try {
        let id = firebase.auth().currentUser.uid;
        if (!id) {
          console.log('No user found');
        } else {
          firebase
            .storage()
            .ref(`users/${path}/${id}`)
            .child(child)
            .put(blob)
            .then(snapshot => console.log('image has been successfully added'))
            .then(() => {
              getImage(setImage, path, child);

              alert(`user ${child} successfully added`);
            })
            .catch(e => console.log(e));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('No match');
    }
  }
};
const getImage = (setImage, path, child) => {
  try {
    let id = firebase.auth().currentUser.uid;
    if (!id) {
      console.log('No user found');
    } else {
      firebase
        .storage()
        .ref(`users/${path}/${id}`)
        .child(child)
        .getDownloadURL()
        .then(url => {
          setImage(url);

          console.log('successfully get user profile');
        })
        .catch(e => console.log(e, 'error'));
    }
  } catch (error) {
    console.log(error);
  }
};

export {addImage, getImage};

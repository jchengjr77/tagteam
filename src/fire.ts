import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBm7tz5Z3IptTZ3VWlj3ZfyqPk0NXfiUwo',
  authDomain: 'tagteam-landing.firebaseapp.com',
  databaseURL: 'https://tagteam-landing.firebaseio.com',
  projectId: 'tagteam-landing',
  storageBucket: 'tagteam-landing.appspot.com',
  messagingSenderId: '338019959877',
  appId: '1:338019959877:web:323cb6d465b20a95948f2c',
  measurementId: 'G-PMZ4KX1XHH',
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire.auth();

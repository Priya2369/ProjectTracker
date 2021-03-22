import firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyDjHiYKliTkZNeY4SQWeexBjoJC4n2RJuE",
    authDomain: "todoreactproject.firebaseapp.com",
    projectId: "todoreactproject",
    storageBucket: "todoreactproject.appspot.com",
    messagingSenderId: "27858379354",
    appId: "1:27858379354:web:1ebe0f166e4d201196ae63"
  };
 
  const Fire = firebase.initializeApp(firebaseConfig);
  export default Fire;
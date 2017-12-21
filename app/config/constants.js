import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyBrEau2Jp2z6HoxmIj6CvqJi5gs4CT5Hwo",
  authDomain: "reactmodoro-5833a.firebaseapp.com",
  databaseURL: "https://reactmodoro-5833a.firebaseio.com",
  projectId: "reactmodoro-5833a",
  storageBucket: "reactmodoro-5833a.appspot.com",
  messagingSenderId: "386485376336"
})

const ref              = firebase.database().ref()
const firebaseAuth     = firebase.auth()
const facebookProvider = firebase.auth.FacebookAuthProvider

export {
  ref,
  firebaseAuth,
  facebookProvider
}

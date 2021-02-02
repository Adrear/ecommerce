import * as firebase from 'firebase/app'

require('firebase/auth')
require('firebase/firestore')
require('firebase/storage')

const config = {
  apiKey: 'AIzaSyAeNgPOWzbmrQ8AR-CaHQ0cgzuujOkwVx0',
  authDomain: 'advitamdb.firebaseapp.com',
  databaseURL: 'https://advitamdb.firebaseio.com',
  projectId: 'advitamdb',
  storageBucket: 'advitamdb.appspot.com',
  messagingSenderId: '858326446418',
  appId: '1:858326446418:web:80c5cedded2d610a'
}

if (!firebase.apps.length) { firebase.initializeApp(config) }

firebase.auth().signInWithEmailAndPassword('advitam@admin.com', 'advitam007').catch((error) => {
  alert(error)
})

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage

export default firebase

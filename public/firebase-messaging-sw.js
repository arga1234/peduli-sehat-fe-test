// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.22.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.22.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyBCy2-Ba0eN2S15NsMHel93DRpmF5UFgGE",
    authDomain: "peduli-sehat-58b4b.firebaseapp.com",
    databaseURL: "https://peduli-sehat-58b4b.firebaseio.com",
    projectId: "peduli-sehat-58b4b",
    storageBucket: "peduli-sehat-58b4b.appspot.com",
    messagingSenderId: "525728581991",
    appId: "1:525728581991:web:1628c7de51e63fbe2707c2",
    measurementId: "G-HHL3TEENY9"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
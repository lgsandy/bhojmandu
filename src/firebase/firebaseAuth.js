import * as Firebase from "firebase";
import "firebase/firestore";
let config = {
    apiKey: "AIzaSyAiWdusN6CO07msGZLRUzq_TrAi3-mShuo",
    authDomain: "bhojmandu-83884.firebaseapp.com",
    databaseURL: "https://bhojmandu-83884.firebaseio.com",
    projectId: "bhojmandu-83884",
    storageBucket: "bhojmandu-83884.appspot.com",
    messagingSenderId: "753898008058",
    appId: "1:753898008058:web:7280ea26a5f1dda0b1c843",
    measurementId: "G-LR5MV66GSZ"
};
let app;
if (!Firebase.apps.length) {
  app = Firebase.initializeApp(config);
}
export const db = Firebase.firestore(app);
// export const firestore= app.firestore();

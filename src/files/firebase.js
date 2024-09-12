import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPuJ-1qEv82xcM79dCf4lqO5J7dCFqiQE",
  authDomain: "moviebookingproject-78441.firebaseapp.com",
  projectId: "moviebookingproject-78441",
  storageBucket: "moviebookingproject-78441.appspot.com",
  messagingSenderId: "711925103734",
  appId: "1:711925103734:web:7867a7ad39e7ce7fe4f357",
  measurementId: "G-MZMRE67NVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

   export default app;
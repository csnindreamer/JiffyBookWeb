import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getVertexAI, getGenerativeModel } from "firebase/vertexai-preview";




var IN = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    databaseURL:"",
    timeoutSeconds: 30






  };
var EE = {


  };




 // export const app = initializeApp(EE);
// export const db = getFirestore(app);
const firebaseApp =firebase.initializeApp(EE);
const vertexAI = getVertexAI(firebaseApp);
//const model = firebase.initializeApp(EE);


const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash" });
 const db = firebase.firestore();
 const auth = firebase.auth();
 //const storage = firebase.storage();
 export {model, db, auth,firebaseApp};


// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

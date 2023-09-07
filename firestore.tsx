import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//  apiKey: "AIzaSyDlV_2JYV5t8UQ0nHBJySXFFuhMxG8M52A",
//     authDomain: "jiffybook-preprod.appspot.com",
//     projectId: "jiffybook-preprod",
//     storageBucket: "jiffybook-preprod.appspot.com",
//     messagingSenderId: "538384824023",
//     appId: "1:538384824023:android:dce06469b79b5bfbce2292",
//     databaseURL:"https://jiffybook-preprod.firebaseio.com",
//     timeoutSeconds: 30
// };


var IN = {
    apiKey: "AIzaSyCvbv6BheSB_T-9u8ZrmURizb0u_OmuDAs",
    authDomain: "jiffybook-india-preprod.appspot.com",
    projectId: "jiffybook-india-preprod",
    storageBucket: "jiffybook-india-preprod.appspot.com",
    messagingSenderId: "276311602967",
    appId: "1:276311602967:ios:236dc443530db0dfdfe952",
    databaseURL:"https://jiffybook-india-preprod.firebaseio.com",
    timeoutSeconds: 30
//     apiKey: "AIzaSyB37CXOtlyxv2NTzawCR7LakNBvHbmW6UY",
//     authDomain: "jiffybook-india.appspot.com",
//     databaseURL: "https://jiffybook-india.firebaseio.com",
//     projectId: "jiffybook-india",
//     storageBucket: "jiffybook-india.appspot.com",
//     messagingSenderId: "703105185846",
//   appId: "1:703105185846:ios:07c8377f727de590410097",
//      databaseURL:"https://jiffybook-india.firebaseio.com",





  };
var EE = {

  apiKey: "AIzaSyBlAuR15-nklQR0LEKxFHT4iLOnbT4hWyI",
  authDomain: "jiffybook-preprod.firebaseapp.com",
  databaseURL: "https://jiffybook-preprod.firebaseio.com",
  projectId: "jiffybook-preprod",
  storageBucket: "jiffybook-preprod.appspot.com",
  messagingSenderId: "538384824023",
  appId: "1:538384824023:web:5f2409822cab5be2ce2292",
  measurementId: "G-JXC4M514VY"



    //  apiKey: "AIzaSyDlV_2JYV5t8UQ0nHBJySXFFuhMxG8M52A",
    // authDomain: "jiffybook-preprod.appspot.com",
    // projectId: "jiffybook-preprod",
    // storageBucket: "jiffybook-preprod.appspot.com",
    // messagingSenderId: "538384824023",
    // appId: "1:538384824023:android:dce06469b79b5bfbce2292",
    // databaseURL:"https://jiffybook-preprod.firebaseio.com",
    // timeoutSeconds: 30
    // apiKey: "AIzaSyDsNT4xIPerWnkD32oyn1m09ViUr2jqTyE",
    // authDomain: "jiffybook-app.appspot.com",
    // projectId: "jiffybook-app",
    // storageBucket: "jiffybook-app.appspot.com",
    // messagingSenderId: "538384824023",
    // appId: "1:938434370562:ios:0b36aef9b9c34857e79b1b",
    // databaseURL:"https://jiffybook-app.firebaseio.com",
  };




 // export const app = initializeApp(EE);
// export const db = getFirestore(app);
const firebaseApp =firebase.initializeApp(EE);

 const db = firebase.firestore();
 const auth = firebase.auth();
 //const storage = firebase.storage();
 export { db, auth,firebaseApp};


// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
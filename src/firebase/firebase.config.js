// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,
};


// console.log(import.meta.env.VITE_APIKEY);

// const firebaseConfig = {
//   apiKey: "AIzaSyAquOl6FCh6eoPZhnWhmIIV2T25LJzm7x0",
//   authDomain: "property-c5359.firebaseapp.com",
//   projectId: "property-c5359",
//   storageBucket: "property-c5359.appspot.com",
//   messagingSenderId: "750644536618",
//   appId: "1:750644536618:web:d1a44bc36cdfdb834d2a53"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

const auth = getAuth(app)

export default  auth;
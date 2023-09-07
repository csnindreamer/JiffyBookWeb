
'use client'
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/navigation'
import { useEffect, useState,useContext } from 'react';
import {auth } from '../../firestore';
import React from "react";
import axios from 'axios';
import { Input ,useInput,Image} from '@nextui-org/react';
import Button from '@mui/material/Button';
import {FaFacebookF,FaGoogle} from 'react-icons/fa'
import './styles.css';
import {LanguageContext} from './api/LanguageContext';

import LoginSignup from './jiffybook/login_signup/page'





export default function Home() {

  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     window.addEventListener('load', () => {
  //       navigator.serviceWorker
  //         .register('/service-worker.js')
  //         .then((registration) => {
  //           console.log('Service worker registered:', registration);
  //         })
  //         .catch((error) => {
  //           console.error('Error registering service worker:', error);
  //         });
  //     });
  //   }
  // }, []);



 
 
  const { currentLocale, handleLanguageChange,translations } = useContext(LanguageContext);
  const { value, reset, bindings } = useInput("");
  const [emailvalue, emailsetValue] = useState('');

  const [passwordvalue, passwordsetValue] = useState('');
 

  useEffect(() => {
  // console.log("translations12344",translations)
  },[]);




  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!emailvalue)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(emailvalue);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [emailvalue]);

  const allowedColorValues: "success" | "error" = "success";


// useEffect(() => {
//   const fetchData = async () => {
//     db.collection('dbUser').get()
//     .then(success=>{
    

//       success.forEach(element => {
//         console.log('element',element.id,element.data())
//       });
//     })
//   };

//   fetchData();
// }, []);




// db.collection('dbUser').doc("4WlhZQJNL5QBPvUkyweZL5nUWvE3").collection('Location').get()
// .then(success=>{


//   success.forEach(element => {
//     console.log('element',element.id,element.data())
//   });
// })



function signupscreen(){
  router.push('/jiffybook/signup')
}

function emailtextchnage(emailvalues){
 // console.log("emailtextchnage",emailvalue)
  emailsetValue(emailvalues)
 //helper()

  //console.log("emailtextchnage isValid", isValid)
}



function passwordtextchnage(passwordvalues)
{
  passwordsetValue(passwordvalues)
}


function loginbuttonfunction (){
  console.log("emailtextchnage isValid", emailvalue,passwordvalue)




  if(emailvalue=="" || passwordvalue =="" )

  {
  alert("Enter Email and Password")
  }
 else{
  auth.signInWithEmailAndPassword(emailvalue, passwordvalue).then(Homescreen).catch(function(error) {

    console.log("errorMessage",error)



 
  });
 }
  


}
 
function Homescreen(){
  router.push('/jiffybook/location')
}

// const handleLanguageChange = (event) => {
//   const selectedLocale = event.target.value;
//   setCurrentLocale(selectedLocale);
  
// };

  const router = useRouter()





  return (
    <>

    <Head>



<Link rel="manifest" href="/manifest.json"/>



      </Head>
    
<main>


<LoginSignup/>



  {/* <section className="absolute w-full h-full">


  <div
            className="absolute top-0 w-full h-screen bg-white"
            style={{
              backgroundImage: `url('/image/Picture1.png')`,
               
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              minHeight: "100vh"
            }}
          >

<div className="items-end justify-end flex">
      <select value={currentLocale} onChange={handleLanguageChange}>
        <option value="en.json">English</option>
        <option value="et.json">Estonia</option>
     
      </select>
    
    </div>            
          </div>



<div className="container mx-auto px-4 h-full">

<div className="flex content-center items-center justify-center h-full">
     <div className="w-full lg:w-4/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-orange-500 border-0">
           <div className="rounded-t mb-0 px-6 py-6">
                 <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">
                        Sign in with
                      </h6>
                 </div>
             <div className="btn-wrapper text-center">
             <a  className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center">
              
               <FaFacebookF className="text-sm "/></a> 

               <a  className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center">
              
              <FaGoogle className="text-sm "/></a> 
             </div>
             <hr className="mt-6 border-b-1 border-gray-400" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div>

                    <form >



                      <div className="relative w-full mb-3  ">
                       

{!translations  ?
null :


 <Input
          {...bindings}
          clearable
          shadow={false}
          onClearClick={reset}
          status={helper.color as typeof allowedColorValues}
             color={helper.color as typeof allowedColorValues}
             helperColor={helper.color as typeof allowedColorValues}
             helperText={helper.text}
             type="email"
             //label="Email"
             placeholder={translations.Email}
             required={true}
             value={emailvalue} 
             onChange={(e) => emailtextchnage(e.target.value)}
             fullWidth={true}
           rounded={true}

        />



}


                      </div>
<br/>
                      <div className="relative w-full mb-3">
                       

<Input.Password
             clearable
             color="warning"
             required={true}
             type="password"
            // label="Password"
             placeholder="Password"
             value={passwordvalue} 
             fullWidth={true}
             rounded={true}
             onChange={(e) => passwordtextchnage(e.target.value)}
           />




                      </div>
                     

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={loginbuttonfunction}
                        >
                          Sign In
                        </button>
                      </div>


                   
                    </form>

                    </div>

                    <div className="flex flex-wrap mt-6">
                  <div className="w-1/2">
                    <a
                      //href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="text-black cursor-pointer"
                    >
                      <small className ="ml-2">Forgot password?</small>
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <a
                    
                      onClick={signupscreen}
                      className="text-black cursor-pointer"
                      
                    >
                      <small className="mr-2">Create new account</small>
                    </a>
                  </div>
                </div>
       </div>
     

    

  </div>
  </div>
  </div>

    </section> */}
  </main>

  
  



    </>
  );
}
'use client'


import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useEffect, useState,useContext } from 'react';
import {auth } from '../../../../firestore';
import React from "react";
import { Input ,useInput,Button,Image} from '@nextui-org/react';
import {FaFacebookF,FaGoogle} from 'react-icons/fa'
import { LanguageContext } from "../../api/LanguageContext";


import '../../styles.css';

export default function Signup() {
  const { currentLocale, handleLanguageChange,translations } = useContext(LanguageContext);
  const { value, reset, bindings } = useInput("");
  const [emailvalue, emailsetValue] = useState('');

  const [passwordvalue, passwordsetValue] = useState('');
  const [repeatpasswordvalue, repeatpasswordsetValue] = useState('');
  
  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };



  const validatepassword = (password,repeatpassword) => {
    console.log("isValid called 123456")
   if(password===repeatpassword)
   {
    return true
   }
   else{
    false
   }
  };




  const helperpassword = React.useMemo(() => {
    if (!repeatpasswordvalue)
      return {
        text: "",
        color: "",
      };
    const isValid = validatepassword(passwordvalue,repeatpasswordvalue);
    return {
      text: isValid ? "Password Matched" : "Password  Not Matched",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  const allowedColorpasswordValues: "success" | "error" = "success";
  const helper = React.useMemo(() => {
    if (!emailvalue)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(emailvalue);
  // console.log("isValid",isValid)
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);




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

 

 function repeatpasswordtextchnage(repeatpasswordvalues)
 {
  repeatpasswordsetValue(repeatpasswordvalues)
 }

function loginscreen(){
  router.push('/')
}

 function signupbuttonfunction() {
  
  if(emailvalue=="" || passwordvalue =="" ||  repeatpasswordvalue=="" )

  {
  alert("Enter Email ,Password and Repeat password")
  }


  else{
    console.log("emailtextchnage isValid", emailvalue,passwordvalue,repeatpasswordvalue)

   

    auth.createUserWithEmailAndPassword(
      emailvalue,
      passwordvalue
    )
    .then(function(result) {
      //  Alert.alert(result.user.uid);
      //that.Show_Custom_Alert('Register Successfully Go back to Login')
      //Alert.alert('Register Successfully Go back to Login');
//console.log("result",result)
      //var db = auth.currentUserr;
      //console.log("db", db);
      if (result.user) {

      result.user.sendEmailVerification()

        .then(function() {
            
  alert("Please Verify your Email")
        })
        .catch(function(e) {
          //console.log(e);
          alert("Please Try Again")
        });

      }

      
    })
    .catch(function(error) {
      alert("Please Try Again")
    })












  }
 }
 
  const router = useRouter()
  return (
       
<main>

<section className="absolute w-full h-full">


<div
          className="absolute top-0 w-full bg-white h-screen"
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
        <option value="et.json">French</option>
        {/* Add more language options as needed */}
      </select>
    
    </div>  


        </div>

<div className="container mx-auto px-4 h-full">

<div className="flex content-center items-center justify-center h-full">
     <div className="w-full lg:w-4/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-orange-500 border-0">
           
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-6">
                

                    <form >



                      <div className="relative w-full mb-3  ">
                        {/* <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        /> */}



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
                     
                      <br/>
                      <div className="relative w-full mb-3">
                       

<Input.Password
             clearable
            
             required={true}
             type="password"
            // label="Password"

            status={helperpassword.color as typeof allowedColorpasswordValues}
            color={helperpassword.color as typeof allowedColorpasswordValues}
            helperColor={helperpassword.color as typeof allowedColorpasswordValues}
            helperText={helperpassword.text}

             placeholder="Repeat Password"
             value={repeatpasswordvalue} 
             fullWidth={true}
             rounded={true}
             onChange={(e) => repeatpasswordtextchnage(e.target.value)}
           />




                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={signupbuttonfunction}
                        >
                          Sign Up
                        </button>
                      </div>


                   
                    </form>

                    </div>

                    <div className="flex flex-wrap mt-4 items-center justify-center">
                 
                  <div className="w-1/2 text-center">
                    <a
                    
                      onClick={loginscreen}
                      className="text-black cursor-pointer"
                      
                    >
                      <small className="mr-2">Already have account? Login</small>
                    </a>
                  </div>
                </div>
       </div>
     



  </div>
  </div>
  </div>
</section>
</main>


  )
}

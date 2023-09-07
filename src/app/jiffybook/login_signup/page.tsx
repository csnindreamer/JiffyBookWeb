'use client'
import React from "react";

import { useEffect, useState,useContext } from 'react';
import styles from './Card.module.css';
import '../../styles.css'

import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/navigation'
import { GoogleAuthProvider,OAuthProvider } from 'firebase/auth';
import {auth } from '../../../../firestore';

import axios from 'axios';
import { Input ,useInput,Image} from '@nextui-org/react';
import Button from '@mui/material/Button';
import {FaApple,FaGoogle,FaMicrosoft} from 'react-icons/fa'

import {LanguageContext} from '../../api/LanguageContext';
import { isAppleDevice } from '../../component/deviceUtils'


export default function LoginSignup() {

  
  const isApple = isAppleDevice();



        const [flipped, setFlipped] = useState(false);
        const [isLoading, setIsLoading] = useState(true);

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
  const [validemaillogin , validemailloginsetValue]=useState('')
  const [signupemailvalue, signupemailsetValue] = useState('');
  const [repeatpasswordvalue, repeatpasswordsetValue] = useState('');
  
  const [signuppasswordvalue, signuppasswordsetValue] = useState('');
  const [passwordvalue, passwordsetValue] = useState('');
  const [validemailsignup , validemailsignupsetValue]=useState('')

  useEffect(() => {


   
   console.log("translations12344 isApple",isApple)

  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  },[]);

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










  const validateEmail = (value) => {
   // return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
//console.log("validateEmailvalidateEmail",value,value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))

    return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  };

  const helper = React.useMemo(() => {
    if (!emailvalue)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(emailvalue);
    return {
      text: isValid ?   validemailloginsetValue('') : validemailloginsetValue(translations.invalid) ,
      color: isValid ? "" : "error",
    };
  }, [emailvalue]);

  const allowedColorValues: "success" | "error" = "success";


  
   
  
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
function emailtextchnagesignup(emailvalues){
  // console.log("emailtextchnage",emailvalue)
 
 
 
  signupemailsetValue(emailvalues)
  //helper()
 
   //console.log("emailtextchnage isValid", isValid)
 }

 const helpersignup = React.useMemo(() => {
  if (!signupemailvalue)
    return {
      text: "",
      color: "",
    };
  const isValid = validateEmail(signupemailvalue);
  return {
    text: isValid ?   validemailsignupsetValue('') : validemailsignupsetValue(translations.invalid) ,
    color: isValid ? "" : "error",
  };
}, [signupemailvalue]);

const allowedColorValuessignup: "success" | "error" = "success";








function passwordtextchnage(passwordvalues)
{
  passwordsetValue(passwordvalues)
}


function loginbuttonfunction (){
  console.log("emailtextchnage isValid", emailvalue,passwordvalue)




  if(emailvalue=="" || passwordvalue =="" )

  {
  //alert("Enter Email and Password")

  validemailloginsetValue(translations.blank)



  }
 else{
  setIsLoading(true);
  auth.signInWithEmailAndPassword(emailvalue, passwordvalue).then(Homescreen).catch(function(error) {

    console.log("errorMessage",error)
    validemailloginsetValue(translations.incorrect)
    setIsLoading(false);

 
  });
 }
  


}
 
function Homescreen(){
 console.log("called hererererer")
  router.push('/jiffybook/home')
  setTimeout(() => {
    setIsLoading(false);
  }, 500);

 
}




const googlesignin = async () => {
  console.log("Google Sign here ")
  const provider = new GoogleAuthProvider();
  console.log("Google Sign here ",provider)
  try {
    await auth.signInWithPopup(provider).then((result) => {
     
     // const credential = GoogleAuthProvider.credentialFromResult(result);
   
     
     // const user = result.user;
   // console.log("Google Sign success",user,credential)
    Homescreen()
    })
  } catch (error) {
    console.error('Google sign-in error:', error);
  }
};



const microsoftsignin = async () => {
  console.log("microsoft Sign here ")
  const provider = new OAuthProvider('microsoft.com');
  console.log("microsoft Sign here ",provider)
  try {
    await auth.signInWithPopup(provider).then((result) => {
      // User is signed in.
      // IdP data available in result.additionalUserInfo.profile.
  
      // Get the OAuth access token and ID Token
       //const credential = OAuthProvider.credentialFromResult(result);
      // const accessToken = credential.accessToken;
      // const idToken = credential.idToken;
      console.log("microsoft Sign success",result)
      //Homescreen()
    })
  } catch (error) {
    console.error('microsoft sign-in error:', error);
  }
};
const applesignin = async () => {
  const appleProvider = new OAuthProvider('apple.com');
  console.log("appleProvider ",appleProvider)

  try {
   await auth.signInWithPopup(appleProvider).then((result) => {
      // User is signed in.
      // IdP data available in result.additionalUserInfo.profile.
  
      // Get the OAuth access token and ID Token
       //const credential = OAuthProvider.credentialFromResult(result);
      // const accessToken = credential.accessToken;
      // const idToken = credential.idToken;
      console.log('Successfully signed in with Apple:', result);

      //Homescreen()
    })
    
  } catch (error) {
    console.error('Apple sign-in error:', error);
  }



  
}



// const handleLanguageChange = (event) => {
//   const selectedLocale = event.target.value;
//   setCurrentLocale(selectedLocale);
  
// };

  const router = useRouter()



        const handleFlip = () => {
            console.log("called hhererer")
          setFlipped(!flipped);
        };
      

    return (
  //     <div className="flipcard3Dwrapper">
  //   <div className={`flipcard ${flipped ? 'doflip' : ''}`}>
       
  //     <div className="flipcardfront">
  //         <p>Front</p>
  //         <button
  //           className="flipcardbtnturntoback"
  //           onClick={handleFlip}
  //         >
  //           flip
  //         </button>
  //       </div> 
  // <div className="flipcardback">
  //         <p>Back</p>
  //         <button
  //           className="flipcardbtnturntofront"
  //           onClick={handleFlip}
  //         >
  //           flip
  //         </button>
  //       </div> 
  //     </div>
  //   </div>







<main className="flex items-center justify-center min-h-screen">


     
<section className="absolute w-full h-full items-center justify-center">
<div
          className="absolute top-0 w-full bg-white h-screen justify-center items-center"
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
        {/* Add more language options as needed */}
      </select>
    
    </div> 




{isLoading ? (
       





<div className="center-container" >
<div className="loader">
   </div>
</div>



      ) : (



           
   
   <div className="flex justify-center items-center h-full">
   <div className={styles.flipCardWrapper} >

     <div className={`${styles.flipCard} ${flipped ? styles.doFlip : ''}`}>
      
        {/* login page  */}
      <div className={styles.flipCardFront}> 
   
         {/* <p>Front</p>
           <button className={styles.flipCardBtn} onClick={handleFlip}>
             Flip
           </button> */}
   
   
   
   <div className="container mx-auto px-4 h-full">
   <div className="flex content-center items-center justify-center h-full">
        <div className="w-full  px-4">
           <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-transparent border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                       <h6  style={{ color: '#E75600' }} className="text-sm font-bold">
                           Sign in with
                         </h6>
                    </div>
                <div className=" flex justify-center items-center content-center"> 
   
   
   {/*               
                <a  className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center">
                 
                  <FaFacebookF className="text-sm "/></a> 
   
                  <a  className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center">
                 
                 <FaGoogle className="text-sm "/></a>   */}
   
   
   <div className="icons">
       <a  className="icon icon--google i"    onClick={googlesignin}>
      
      
         <FaGoogle className="text-sm "/>
       </a>
      

      {isApple ?
      
    
    
    (
      <a  className="icon  icon--apple " onClick={applesignin}>
     
      
      <FaApple className="text-sm "/>
    </a>
    )
    :  null

    }
      
   
      
       <a  className="icon icon--microsoft "  onClick={microsoftsignin}>
     
      
         <FaMicrosoft className="text-sm "/>
       </a>
     
     </div> 
   
               </div> 
                <hr className="mt-6 border-b-1 border-gray-400" />
               </div>
   
   
   
   
               <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                       <div  style={{ color: '#E75600' }} className=" text-center mb-3 font-bold">
                         <small>Or sign in with credentials</small>
                       </div>
   
                       {!translations  ?
   null :
                       <form >
   
   
                         <div className=" w-full mb-3 relative">
                          
   
  
 
 
    <Input
             {...bindings}
            className="absolute"
             clearable
             shadow={false}
             onClearClick={reset}
             status={helper.color as typeof allowedColorValues}
                color={helper.color as typeof allowedColorValues}
                helperColor={helper.color as typeof allowedColorValues}
              //  helperText={helper.text}
                type="email"
              
                //label="Email"
                placeholder={translations.Email}
                required={true}
                value={emailvalue} 
                onChange={(e) => emailtextchnage(e.target.value)}
                fullWidth={true}
              rounded={true}
            
           />
  







   
   
   

   { validemaillogin && (
    <div className={`text-sm  transform translate-y-full  text-center ${helper.color}`}>
      {validemaillogin}
    </div>
  )}


   
                         </div>
   <br/>
                         <div className="relative w-full mb-3">
                         
   




   <Input.Password
                clearable
                color="warning"
                required={true}
                type="password"
               // label="Password"
                placeholder={translations.Password}
                value={passwordvalue} 
                fullWidth={true}
                rounded={true}
                onChange={(e) => passwordtextchnage(e.target.value)}
              />
   
   
   
   
                         </div>
                       
   

                         { validemaillogin 
                         
                         
                         ? 

                         <div className="text-center mt-6 w-full">



                         <button
                           className="bg-lightgrey text-white text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                         // className="turkishIceCreamButton" 
                          type="button"
                           style={{ transition: "all .15s ease" }}
                        
                         >
                          {translations.Log_In}
                         </button>
                       </div>



                         :
                         
                         
                         
                         
                         


                         <div className="text-center mt-6 w-full">



                           <button
                             className="bg-orange text-white text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                           // className="turkishIceCreamButton" 
                            type="button"
                             style={{ transition: "all .15s ease" }}
                             onClick={loginbuttonfunction}
                           >
                            {translations.Log_In}
                           </button>
                         </div>
    }
   




                       </form>
     }
                       </div>
   


 
                       {!translations  ?
   null :

                       <div className="flex flex-wrap mt-6">
                     <div className="w-1/2 text-center">
                       <a style={{ color: '#E75600' }}
                         //href="#pablo"
                         onClick={e => e.preventDefault()}
                         className=" cursor-pointer"
                       >
                         <small className ="ml-2">{translations.Forgot_Password}</small>
                       </a>
                     </div>
                     <div className="w-1/2  text-center">
                       <a
                       style={{ color: '#E75600' }}
                       onClick={handleFlip}
                         className=" cursor-pointer"
                         
                       >
                         <small className="mr-2">Create new account</small>
                       </a>
                     </div>
                   </div>

                       }


          </div>
        
   
       
   
     </div>
     </div>
   
     </div> 
   
   
   
   
   
   
   
   
   
   
   
          </div> 
   
     {/* singup page  */}
   
         <div className={styles.flipCardBack}>
         {/* <p>Back</p>
           <button className={styles.flipCardBtn} onClick={handleFlip}>
             Flip Back
           </button> */}
   
   <div className="container mx-auto px-4 h-full">
   
   <div className="flex content-center items-center justify-center h-full">
        <div className="w-full  px-4">
           <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-transparent border-0">
              
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
             status={helpersignup.color as typeof allowedColorValuessignup}
                color={helpersignup.color as typeof allowedColorValuessignup}
                helperColor={helpersignup.color as typeof allowedColorValuessignup}
               // helperText={helpersignup.text}
                type="email"
                //label="Email"
                placeholder={translations.Email}
                required={true}
                value={signupemailvalue} 
                onChange={(e) => emailtextchnagesignup(e.target.value)}
                fullWidth={true}
              rounded={true}
   
           />
   
   
   }
   
   { validemailsignup && (
    <div className={`text-sm  transform translate-y-full  text-center ${helper.color}`}>
      {validemailsignup}
    </div>
  )}
   
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
                       
                       onClick={handleFlip}
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
   
   
   
   
   
   
         </div>
       </div>
       </div>
   
       </div>




      )} 






    </div>
</section>
 

</main>




    )


}
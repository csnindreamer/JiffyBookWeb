

'use client'


'use client'

import React from "react";
import { useRouter } from 'next/navigation'
import { Header } from "../../components/Header";
import { Keyword }  from "../../components/Keyword"
import { Apple } from "../../icons/Apple";
import { Email } from "../../icons/Email";
import { Google } from "../../icons/Google";
import { Windows } from "../../icons/Windows";
import "./style.css";
import {auth } from '../../../../firestore';
import { GoogleAuthProvider,OAuthProvider } from 'firebase/auth';
import { isAppleDevice } from '../../component/deviceUtils'
 export default function Loginpage ()  {
   
    const options = ["India", "Estonia", "Finland"];
    const isApple = isAppleDevice();
    // Render the component with options

    function loginscreen(){
        router.push('/jiffybook/EmailLoginpage')
      }

     const Googlelogin = async () =>{


       // console.log("Google Sign here ")
        const provider = new GoogleAuthProvider();
        //console.log("Google Sign here ",provider)
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
      }




      const Microsoftlogin = async () =>{

      //  console.log("microsoft Sign here ")
        const provider = new OAuthProvider('microsoft.com');
        //console.log("microsoft Sign here ",provider)
        try {
          await auth.signInWithPopup(provider).then((result) => {
            // User is signed in.
            // IdP data available in result.additionalUserInfo.profile.
        
            // Get the OAuth access token and ID Token
             //const credential = OAuthProvider.credentialFromResult(result);
            // const accessToken = credential.accessToken;
            // const idToken = credential.idToken;
            //console.log("microsoft Sign success",result)
            Homescreen()
            //Homescreen()
          })
        } catch (error) {
          console.error('microsoft sign-in error:', error);
        }


      }


      const Applelogin = async () =>{

        const appleProvider = new OAuthProvider('apple.com');
       // console.log("appleProvider ",appleProvider)
      
        try {
         await auth.signInWithPopup(appleProvider).then((result) => {
            // User is signed in.
            // IdP data available in result.additionalUserInfo.profile.
        
            // Get the OAuth access token and ID Token
             //const credential = OAuthProvider.credentialFromResult(result);
            // const accessToken = credential.accessToken;
            // const idToken = credential.idToken;
           // console.log('Successfully signed in with Apple:', result);
            Homescreen()
      
            //Homescreen()
          })
          
        } catch (error) {
          console.error('Apple sign-in error:', error);
      }

    }
      function Homescreen(){
       // console.log("called hererererer")
         router.push('/jiffybook/home')
        //  setTimeout(() => {
        //    setIsLoading(false);
        //  }, 500);
       
        
       }



      const router = useRouter()
  return (


   

  
    <div className="index">
    <Header className="header-instance" text="LOGIN TO JIFFYBOOK" text1="Visit our site" />
    <div className="div">
      <Keyword
        className="keyword-14bw"
        text={"Digital Space for Galleries \n of Products and Services"}
       
      />
      <Google
        className="design-component-instance-node"
        onClick={Googlelogin}
      />
      <Windows
        className="design-component-instance-node"
        onClick={Microsoftlogin}
      />
      <Email
        className="design-component-instance-node"
       
        onClick={loginscreen}
      />


{isApple ?
      <Apple
       
        className="design-component-instance-node"
        onClick={Applelogin}
      />
: null }


    </div>
  </div>








   









  )



  }










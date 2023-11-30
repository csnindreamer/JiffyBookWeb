

'use client'

import React from "react";
import { useRouter } from 'next/navigation'
import { Header } from "../../components/Header";
import { InputBlackBg } from "../../components/InputBlackBg";
import { CustomText } from "../../components/Text";
import { TextBo } from "../../components/TextBo";
import { Back } from "../../icons/Back";
import { SubmitBlackBg1 } from "../../icons/SubmitBlackBg1";

import withAuth from '../../component/withAuth';
import "./style.css";
 import SessionPage from '../../component/sessionpage'
const Login = ({ user }) => {
   
    const options = ["India", "Estonia", "Finland"];

    // Render the component with options
    function loginscreen(){
        router.push('/jiffybook/Signuppage')
      }

      const router = useRouter()
  return (


   

  
    <div className="index">
   <Header className="header-instance" text="LOGIN TO JIFFYBOOK" text1="Visit our site" />
    <div className="frame-2">
      <CustomText className="design-component-instance-node" text="Login with your email" />
      <InputBlackBg className="design-component-instance-node" property1="default" text="Email" />
      <InputBlackBg className="design-component-instance-node" property1="default" text="Password" />
      <SubmitBlackBg1 className="submit-black-BG" />
      <TextBo className="design-component-instance-node" text="Reset password" />
      <TextBo className="design-component-instance-node" text="Create new account"  onClick={loginscreen}/>
      <Back className="back-1"   />
    </div>
  </div>






  )



  }
export default withAuth(Login);








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
 export default function Loginpage ()  {
   
    const options = ["India", "Estonia", "Finland"];

    // Render the component with options

    function loginscreen(){
        router.push('/jiffybook/Index')
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
        onClick={loginscreen}
      />
      <Windows
        className="design-component-instance-node"
 
      />
      <Email
        className="design-component-instance-node"
       
        onClick={loginscreen}
      />
      <Apple
       
        className="design-component-instance-node"
      />
    </div>
  </div>








   









  )



  }










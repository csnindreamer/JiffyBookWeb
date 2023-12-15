'use client'
import { FunctionComponent, useCallback,useContext,useState } from "react";
import CustomTextIputWithError from "../../components/CustomTextIputWithError";
import { useRouter } from 'next/navigation'
import Property1Default from "../../components/Property1Default";
import "./style.css";
import { LanguageContext } from "../../api/LanguageContext";
import {auth,db } from '../../../../firestore';
const EmailLogin: FunctionComponent = () => {

    const router = useRouter()
    const { currentLocale, handleLanguageChange,translations } = useContext(LanguageContext);
    const [IndicatorLoading, setIndicatorLoading] = useState(false);
    const [EmailValue, setEmailValue] = useState("");
    const [PasswordValue, setPasswordValue] = useState("");
    const [ButtonStatus, setButtonStatus] = useState(true);
    const [EmailErrorValue, setEmailErrorValue] = useState("");
    const [PasswordErrorValue, setPasswordErrorValue] = useState("");
  const onSubmitBlackBGClick = (() => {
   
  });


  const handleEmailChange = (value) => {
    setEmailValue(value);

    // Perform email validation
    const isValidEmail = validateEmail(value);
 
    // Update error message based on validation result
    if (isValidEmail) {
      setEmailErrorValue("");
      setButtonStatus(true)
    
    } else {
      setEmailErrorValue(translations.invalid);
     
      setButtonStatus(false)
    }
    // additional logic if needed...
  };
 
  const handlePasswordChange= (value) => {
    setPasswordValue(value);
 
    // Perform email validation
    
    if(value != "")
  {
   setPasswordErrorValue("");
   setButtonStatus(true)
  } 
 else if (EmailValue=="")  
  {
    setEmailErrorValue(translations.blank);
     
    setButtonStatus(false)
  }
 
  
  else {
    //  setPasswordErrorValue(translations.minmaxpassword);
      setButtonStatus(true)
      
    }
    // additional logic if needed...
  };




  const onfinalcheck =()=>{
    //EmailValue PasswordValue,RepeatPasswordValue
  
  if(EmailValue=="")
  {
    setEmailErrorValue(translations.blank);
       
    setButtonStatus(false)
  }
  else if(!validateEmail(EmailValue))
  {
    setEmailErrorValue(translations.invalid);
       
    setButtonStatus(false)
  }
  else if(PasswordValue=="")
  {
    setPasswordErrorValue(translations.blank);
    setButtonStatus(false)
  }
  
  else{
  // firebase signup process have to be done here
  
 // alert("Everything is fine")
 setIndicatorLoading(true)
 auth.signInWithEmailAndPassword(EmailValue, PasswordValue).then(Homescreen).catch(function(error) {
    setIndicatorLoading(false)
    console.log("errorMessage",error)
    setEmailErrorValue(translations.incorrect)
    setButtonStatus(false);

 
  });
  
  
  }
  
  }
  





  const Homescreen = async () => {
    try {
      const user = auth.currentUser;
  
      if (user) {
        const emailVerified = user.emailVerified;
  
        console.log("emailVerified", emailVerified);
  

        if(emailVerified == true ){

        const snapshotLocation = await db.collection('dbUser').doc(user.uid).collection('Location').doc('Default').get();
  
        if (snapshotLocation.exists) {
          console.log('adminin', snapshotLocation);
  
          const snapshotUserData = await db.collection('dbUser').doc(user.uid).get();
  
          if (!snapshotUserData.exists) {
            setIndicatorLoading(false);
            alert("Coming Soon Profile screen");
          } else {
            // Home Screen
           // router.push('/jiffybook/home');
         
          window.history.replaceState({}, '', '/jiffybook/home');
         router.push('/jiffybook/home');
            setIndicatorLoading(false);
          }
        } else {
          // Location or Starting screen
          router.push('/jiffybook/Locationpage');
          setIndicatorLoading(false);
        }


    }
    else {
        
        alert("Email is not  Verified");
        setIndicatorLoading(false);
      }

      } else {
        console.error("User is null");
       
      }
    } catch (error) {
      console.log('Error:', error);
      setIndicatorLoading(false);
    }



  };









  const validateEmail = (value) => {
    // return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
 //console.log("validateEmailvalidateEmail",value,value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
 
     return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
   };



   const onSignuppage = (() => {
    // navigate("/s03");
    router.push('/jiffybook/Signuppage')
   });
 
   const onBackIconClick = (() => {
    // navigate("/");
    //router.push('/')
    router.back()
   });
  return (
    <div className="s02">
      <div className="header4">
        <div className="rectangle-div" />
        <img className="header-child1" alt="" src="/image/ellipse-1@2x.png" />
        <div className="header-frame">
          <b className="header5">LOGIN TO JIFFYBOOK</b>
        </div>
        <div className="menu-frame">
          <b className="header5">Visit our site</b>
        </div>
      </div>


      {IndicatorLoading ? (
       




<div className="centered-element">
       <div className="loading-screen">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
       
        </div>
       
             ) : (



    <div className="keyword14bw-parent1">
      <div className="keyword14bw4">
        <b className="keyword-14bw4">Login with your email</b>
      </div>
      {!translations  ?
null :
      <CustomTextIputWithError
        inputText={translations.Email}
        type="email"
        propTop="unset"
        propPosition="unset"
        propLeft="unset"
        propWidth="100%"
        propWidth1="100%"
        propJustifyContent="space-between"
        propColor="#e75600"
        propFontWeight="bold"
        propFlex="unset"
        propColor1="#fff4d4"
        errortext={EmailErrorValue}
        inputValue={EmailValue} onInputChange={handleEmailChange}
      />
}

{!translations  ?
null :
      <CustomTextIputWithError
        inputText={translations.Password}
        type="password"
        propTop="unset"
        propPosition="unset"
        propLeft="unset"
        propWidth="100%"
        propWidth1="100%"
        propJustifyContent="space-between"
        propColor="#e75600"
        propFontWeight="bold"
        propFlex="unset"
        propColor1="#fff4d4"
        errortext={PasswordErrorValue}
        inputValue={PasswordValue} onInputChange={handlePasswordChange}
      />

}

{ ButtonStatus ?
      <Property1Default
        dimensionCode="/image/vector.svg"
        propTop="unset"
        propLeft="unset"
        propPosition="relative"
        propAlignSelf="stretch"
        propCursor="pointer"
        propWidth="unset"
        propBackgroundColor="#e75600"
        propWidth1="unset"
        propAlignSelf1="stretch"
        propCursor1="unset"
        propWidth2="8.04%"
        propRight="45.96%"
        propLeft1="46%"
        onSubmitBlackBGClick={onfinalcheck}
      />

      :
      <Property1Default
      dimensionCode="/image/vector.svg"
      propTop="unset"
      propLeft="unset"
      propPosition="relative"
      propAlignSelf="stretch"
      propCursor="pointer"
      propWidth="unset"
      propBackgroundColor="#808080"
      propWidth1="unset"
      propAlignSelf1="stretch"
      propCursor1="unset"
      propWidth2="8.04%"
      propRight="45.96%"
      propLeft1="46%"
      onSubmitBlackBGClick={onSubmitBlackBGClick}
    />

}
      <div className="keyword12bo1">
      {!translations  ?
null :
        <b className="keyword-14bw4">{translations.Forgot_Password}</b>
      }
      </div>
      <div className="keyword12bo2" onClick={onSignuppage}>
        <b className="keyword-14bw4">Create new account</b>
      </div>
      <img
        className="back-icon2"
        alt=""
        src="/image/back.svg"
        onClick={onBackIconClick}
      />



      </div>


)}



    </div>
  );
};

export default EmailLogin;

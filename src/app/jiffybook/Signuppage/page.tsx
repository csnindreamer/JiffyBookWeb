
'use client'
import { FunctionComponent, useCallback,useState,useContext,useEffect } from "react";
import { useRouter } from 'next/navigation'
import CustomTextIputWithError from "../../components/CustomTextIputWithError";
import Property1Default from "../../components/Property1Default";
import "./style.css";
import {auth } from '../../../../firestore';
import { LanguageContext } from "../../api/LanguageContext";
const Signuppage: FunctionComponent = () => {
 
  const { currentLocale, handleLanguageChange,translations } = useContext(LanguageContext);

  const [EmailValue, setEmailValue] = useState("");
  const [PasswordValue, setPasswordValue] = useState("");
  const [RepeatPasswordValue, setRepeatPasswordValue] = useState("");
  const [EmailErrorValue, setEmailErrorValue] = useState("");
  const [PasswordErrorValue, setPasswordErrorValue] = useState("");
  const [RepeatPasswordErrorValue, setRepeatPasswordErrorValue] = useState("");
  const [ButtonStatus, setButtonStatus] = useState(true);






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
    const isValidEmail = validatepassword(value);
  
  if (EmailValue=="")  
  {
    setEmailErrorValue(translations.blank);
     
    setButtonStatus(false)
  }
    else if (isValidEmail) {
      setPasswordErrorValue("");
      setButtonStatus(true)
    } else {
      setPasswordErrorValue(translations.minmaxpassword);
      setButtonStatus(false)
      
    }
    // additional logic if needed...
  };



  const handleRepeatPasswordChange =(value)=>{

    setRepeatPasswordValue(value)

    if (EmailValue=="")  
    {
      setEmailErrorValue(translations.blank);
       
      setButtonStatus(false)
    }
 else if(PasswordValue == "")
 {
  setPasswordErrorValue(translations.blank);
  setButtonStatus(false)
 }

   else  if(PasswordValue == value)
    {
      setRepeatPasswordErrorValue("");
      setButtonStatus(true)
    }

    else{
      setRepeatPasswordErrorValue(translations.mismatch);
      setButtonStatus(false)
    }

  }

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

else if(!validatepassword(PasswordValue))
{
  setPasswordErrorValue(translations.minmaxpassword);
  setButtonStatus(false)
}
else if(RepeatPasswordValue==""){
  setRepeatPasswordErrorValue(translations.blank);
  setButtonStatus(false)
}

else if(PasswordValue != RepeatPasswordValue){
  setRepeatPasswordErrorValue(translations.mismatch);
      setButtonStatus(false)
}
else{
// firebase signup process have to be done here

//alert("Everything is fine")



//console.log("emailtextchnage isValid", EmailValue,PasswordValue,RepeatPasswordValue)

   

auth.createUserWithEmailAndPassword(
  EmailValue,
  PasswordValue
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
 // alert("Please Try Again")

  setEmailErrorValue(error.message);
     
  setButtonStatus(false)
})












}

}




  const validateEmail = (value) => {
    // return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
 //console.log("validateEmailvalidateEmail",value,value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
 
     return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
   };




    const validatepassword = (password)  => {
    //var re = /^[a-zA-Z0-9]{8,20}$/;
    //var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    var re = /^(?=.*[0-9])(?=.*[!"#$%&'()*+\,-./:;<=>?@[\]^_`{|}~])(?=.*[A-Z])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{10,36}$/;
    return re.test(password);
  };





  const router = useRouter()



  function onRectangleClick(){
   // router.push('/jiffybook/Index')

   //console.log("translations",translations.Email)
  // alert(EmailValue)






  }


  function onBackIconClick(){
    // router.push('/jiffybook/Index')
    router.back()
  }

  // const onRectangleClick = useCallback(() => {
  //   router("/s04");
  // }, [router]);

  // const onBackIconClick = useCallback(() => {
  //   router("/s02");
  // }, [router]);

  return (
    <div className="s03">
      <div className="header8">
        <div className="header-child4" />
        <img className="header-child5" alt="" src="/image/ellipse-1@2x.png" />
        <div className="header-wrapper1">
          <b className="header9">LOGIN TO JIFFYBOOK</b>
        </div>
        <div className="menu-wrapper2">
          <b className="header9">Visit our site</b>
        </div>
      </div>
      <div className="keyword14bw-group">
        <div className="keyword14bw2">
          <b className="keyword-14bw2">Create an account with your email</b>
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
          propJustifyContent="flex-start"
          propColor="#e75600"
          propFontWeight="bold"
          errortext={EmailErrorValue}
          propFlex="1"
          propColor1="#fff4d4"
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
          propJustifyContent="flex-start"
          propColor="#e75600"
          propFontWeight="bold"
          errortext={PasswordErrorValue}
          propFlex="1"
          propColor1="#fff4d4"
          inputValue={PasswordValue} onInputChange={handlePasswordChange}
        />

     }
     {!translations  ?
null :

        <CustomTextIputWithError
          inputText={translations.Confirm_Password}
          type="password"
          propTop="unset"
          propPosition="unset"
          propLeft="unset"
          propWidth="100%"
          propWidth1="100%"
          propJustifyContent="flex-start"
          propColor="#e75600"
          propFontWeight="bold"
          errortext={RepeatPasswordErrorValue}
          propFlex="1"
          propColor1="#fff4d4"
          inputValue={RepeatPasswordValue} onInputChange={handleRepeatPasswordChange}
        />


}


{ ButtonStatus ?

<Property1Default
dimensionCode="/image/vector.svg"
propTop="unset"
propLeft="unset"
propPosition="relative"
propAlignSelf="stretch"
propCursor="unset"
propWidth="unset"
propBackgroundColor="#e75600"
propWidth1="unset"
propAlignSelf1="stretch"
propCursor1="pointer"
propWidth2="8.04%"
propRight="45.96%"
propLeft1="46%"
onRectangle1Click={onfinalcheck}
/>

:

<Property1Default
dimensionCode="/image/vector.svg"
propTop="unset"
propLeft="unset"
propPosition="relative"
propAlignSelf="stretch"
propCursor="unset"
propWidth="unset"
propBackgroundColor="#808080"
propWidth1="unset"
propAlignSelf1="stretch"
propCursor1="pointer"
propWidth2="8.04%"
propRight="45.96%"
propLeft1="46%"
onRectangle1Click={onRectangleClick}
/>


}


      
        <img
          className="back-icon"
          alt=""
          src="/image/back.svg"
          onClick={onBackIconClick}
        />
      </div>
    </div>
  );
};

export default Signuppage;


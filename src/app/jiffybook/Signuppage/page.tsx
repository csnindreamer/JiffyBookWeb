
'use client'
import { FunctionComponent, useCallback,useState,useContext } from "react";
import { useRouter } from 'next/navigation'
import Property1Error from "../../components/Property1Error";
import Property1Default from "../../components/Property1Default";
import "./style.css";
import { LanguageContext } from "../../api/LanguageContext";
const S03: FunctionComponent = () => {
 
  const { currentLocale, handleLanguageChange,translations } = useContext(LanguageContext);

  const [EmailValue, setEmailValue] = useState("");
  const [PasswordValue, setPasswordValue] = useState("");
  const [EmailErrorValue, setEmailErrorValue] = useState("");
  const [PasswordErrorValue, setPasswordErrorValue] = useState("");
  const handleEmailChange = (value) => {
    setEmailValue(value);

    // Perform email validation
    const isValidEmail = validateEmail(value);
  
    // Update error message based on validation result
    if (isValidEmail) {
      setEmailErrorValue("");
    } else {
      setEmailErrorValue(translations.invalid);
    }
    // additional logic if needed...
  };


   const handlePasswordChange= (value) => {
    setPasswordValue(value);

    // Perform email validation
    const isValidEmail = validatepassword(value);
  
    // Update error message based on validation result
    if (isValidEmail) {
      setPasswordErrorValue("");
    } else {
      setPasswordErrorValue(translations.minmaxpassword);
    }
    // additional logic if needed...
  };


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
   alert(EmailValue)
  }


  function onBackIconClick(){
   // router.push('/jiffybook/Index')
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
        <Property1Error
          inputText={translations.Email}
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
        <Property1Error
          inputText={translations.Password}
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

        <Property1Error
          inputText={translations.Confirm_Password}
          propTop="unset"
          propPosition="unset"
          propLeft="unset"
          propWidth="100%"
          propWidth1="100%"
          propJustifyContent="flex-start"
          propColor="#e75600"
          propFontWeight="bold"
          errortext=" error enter here"
          propFlex="1"
          propColor1="#fff4d4"
        />


}
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
          onRectangle1Click={onRectangleClick}
        />
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

export default S03;


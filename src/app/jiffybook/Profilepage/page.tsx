'use client'
import React, { useState,useEffect,useContext,useMemo,CSSProperties } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import firebase from 'firebase/compat/app';
import CustomTextIputWithError from "../../components/CustomTextIputWithError";
import Property1Default from "../../components/Property1Default";
import Property1Default1 from "../../components/Property1Default1";
import withAuth from '../../component/withAuth';
 import SessionPage from '../../component/sessionpage'
 import { LanguageContext } from "../../api/LanguageContext";
 import {auth,db } from '../../../../firestore';
import { useRouter } from 'next/navigation'


 import "./style.css";
const Profilepage = ({ user }) => {
    const router = useRouter()
    type ItemType = {
        dataValue: string;
        propPosition: string;
        propTop: string;
        propLeft: string;
        datakey: string;
      };

    
        const [flagUrl, setFlagUrl] = useState<string | null>(null);


  const { currentLocale, handleLanguageChange,translations } = useContext(LanguageContext);
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);
  const [showList, setShowList] = useState(false);
  const [NameValue, setNameValue] = useState("");
  const [CountryflagValue, setCountryflagValue] = useState<string | 'EE'>(''); // Replace '' with the default country code you want // Replace "" with the default country code you want
const [PhonenumberValue, setPhonenumbervalue]=useState("")
  const [NameErrorValue, setNameErrorValue] = useState("");
  const [PhonenumberErrorValue, setPhonenumberErrorValue] = useState("");
  const [TitleErrorValue, setTitleErrorValue] = useState("");
  const [PhoneCallingCode, setPhoneCallingCode] = useState("");
  const [PhoneCountryCode, setPhoneCountryCode] = useState("");
  const [ButtonStatus, setButtonStatus] = useState(true);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowList(false);
    //finalcheck();
  };


  const dataArray = [
    { dataValue:translations?.Ms, propPosition: 'absolute', propTop: '10px', propLeft: '20px',datakey:'Ms' },
    { dataValue: translations?.Mr, propPosition: 'relative', propTop: '30px', propLeft: '40px',datakey:'Mr' },
    { dataValue: translations?.Mrs, propPosition: 'relative', propTop: '30px', propLeft: '40px',datakey:'Mrs' },

    // Add more items as needed
  ];

 






 
  
  


  useEffect(() => {
    // Fetch flag and calling code based on the country code
    if (CountryflagValue) {
      fetch(`https://restcountries.com/v2/alpha/${CountryflagValue}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
        //  console.log('Fetched country data:', data);
  
          if (data) {
          
  
           // console.log('Country Info:', data.flag);
  
            if (data.flag) {
              const fetchedFlagUrl = data.flag;
              const myCountryphonecode = `+${data.callingCodes[0]}`;
  
              //console.log('Fetched Flag URL:', fetchedFlagUrl);
             // console.log('Country Calling Code:', myCountryphonecode);
              setPhoneCountryCode(data.callingCodes[0])
              setFlagUrl(fetchedFlagUrl);
              setPhoneCallingCode(myCountryphonecode);
            } else {
             // console.error('Flag or calling code not found for country code:', CountryflagValue);
            }
          } else {
            console.error('Invalid response structure:');
          }
        })
        .catch(error => {
          console.error('Error fetching country data:', error);
        });
    }
  }, [CountryflagValue]);
  









  const handleNameChange = (value) => { 
    setNameValue(value);

    const isValidName = validateName(value);
 
    // Update error message based on validation result



if (value == "") {
   

    setNameErrorValue(translations.blank);
    setButtonStatus(false)
  }
    if (!isValidName) {
        setNameErrorValue(translations.invalid);
     
        setButtonStatus(false)
   
    
    } else {
        setNameErrorValue("");
        finalcheck()

       // handlePhonenumberChange(PhonenumberValue)  
    }

  }

  const handlePhonenumberChange = (value) => { 
    setPhonenumbervalue(value);

    const isValidPhonenumber = validatePhonenumber(value);


    if (value == "") {
                  

        setPhonenumberErrorValue(translations.blank);
        setButtonStatus(false)
                        }
else if (!isValidPhonenumber) {
    setPhonenumberErrorValue(translations.minmaxphone);
    setButtonStatus(false)

}
else {
    setPhonenumberErrorValue("");
    finalcheck()
}



  }
  



 const finalcheck=()=>{

    //console.log("called herererer")
    const isValidName = validateName(NameValue);
    const isValidPhonenumber = validatePhonenumber(PhonenumberValue);
    if(NameValue==""){
        setNameErrorValue(translations.blank);
        setButtonStatus(false)
    }

    else if (!isValidName) {
        setNameErrorValue(translations.invalid);
     
        setButtonStatus(false)
    
    }

    else if (PhonenumberValue =="")
    {
        setPhonenumberErrorValue(translations.blank);
        setButtonStatus(false)
    }
    else if (!isValidPhonenumber) {
        setPhonenumberErrorValue(translations.minmaxphone);
        setButtonStatus(false)
    
    }
    if(selectedItem == null)
    {
       setTitleErrorValue("Select a Title")
       setButtonStatus(false)
    }
    else {
      
       setButtonStatus(true)
       setNameErrorValue("")
       setPhonenumberErrorValue("")
       setTitleErrorValue("")
    }
 }











  const validateName = (value) => {
    // return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
 //console.log("validateEmailvalidateEmail",value,value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
 
     return value.match(/^[a-zA-Zء-ي\s-, ]{3,256}$/)
   };


   const validatePhonenumber = (number) => {

    return number.match(/^[0-9]{6,16}$/)
  }
  useEffect(() => {
   // const user = auth.currentUser;
   

   if (user  && user.uid !== '' )

    {
      //  console.log("user:", user);
        db.collection('dbUser').doc(user.uid).collection('Location').doc('Default').get()
        .then(snapshotdata=>{
if(snapshotdata.exists)
{
    //console.log("snapshotdata:", snapshotdata.data()?.strCcountryCode);
    
    setCountryflagValue(snapshotdata.data()?.strCcountryCode)
}
        else{

        }   
              
            
           
        }).catch(error=>{
            console.log("error:", error);
        })
    }
   







    if (selectedItem !== null) {
       
       //const user = auth.currentUser;

     
        // Your logic here
    
        // Call finalcheck() after updating the state
        finalcheck();
      }
    // console.log("translations",translations)
    // setSelectedItem({
    //   dataValue: 'Male',
    //   propPosition: 'relative',
    //   // other properties
    // });
  }, [user,NameValue,PhonenumberValue,selectedItem]); 


      function onBackIconClick(){
        // router.push('/jiffybook/Index')
        router.back()
      }
      const onfinalcheck =()=>{
       // console.log("final data check",NameValue,selectedItem,PhoneCallingCode,PhonenumberValue)
        const isValidName = validateName(NameValue);
        const isValidPhonenumber = validatePhonenumber(PhonenumberValue);

         if(selectedItem == null)
         {
            setTitleErrorValue("Select a Title")
            setButtonStatus(false)
         }

        
        else if(NameValue==""){
             setNameErrorValue(translations.blank);
             setButtonStatus(false)
         }
     
         else if (!isValidName) {
             setNameErrorValue(translations.invalid);
          
             setButtonStatus(false)
         
         }
     
         else if (PhonenumberValue =="")
         {
             setPhonenumberErrorValue(translations.blank);
             setButtonStatus(false)
         }
         else if (!isValidPhonenumber) {
             setPhonenumberErrorValue(translations.minmaxphone);
             setButtonStatus(false)
         
         }
     
         else {
            const combinedPhoneNumber = PhoneCallingCode + PhonenumberValue;
            //console.log("final data check",combinedPhoneNumber,NameValue,selectedItem.datakey,PhoneCallingCode,PhonenumberValue)

           // console.log(firebase.firestore.FieldValue.serverTimestamp())
           // alert("update to firebase")
            


         //  const user = auth.currentUser;
   

         if (user  && user.uid !== '' )
       
           {

            var docRef = db.collection('dbUser').doc(user.uid);
            
      var setAda = docRef.set({ 
         dtCreated:firebase.firestore.FieldValue.serverTimestamp(),
        strCID: user.uid,
        strCname: NameValue,
        strCphone: combinedPhoneNumber,
        strCmail:user.email,
        strCCmail:user.email,
         strCrole:"Consumer",
         strCphonecode:PhoneCountryCode,
         strCphoneflag:CountryflagValue,
         title:selectedItem.datakey,
        //strCurrency:this.state.currency,
        strActiveLoc:'Default',
        strUserImage:'',
        dtLegalAgreed:firebase.firestore.FieldValue.serverTimestamp(),
        strStatus:'Active',
        strCphonelocal:PhonenumberValue
      
      }).then(success=>{
        window.history.replaceState({}, '', '/jiffybook/home');
        router.push('/jiffybook/home'); 
      })


    }

         }



         
      }

  return (

    <div>
  {user && user.uid !== '' ? (
        <div className="s05">
      <div className="header12">
        <div className="header-child8" />
        <img className="header-child9" alt="" src="/image/ellipse-1@2x.png" />
        <div className="header-wrapper3">
          <b className="header13">LOGIN TO JIFFYBOOK</b>
        </div>
        <div className="menu-wrapper4">
          <b className="header13">Visit our site</b>
        </div>
      </div>
      {/* <FormContainer /> */}




      <div className="keyword14bw-parent2">
      <div className="keyword14bw5">
        <b className="keyword-14bw5">Let galleries know who you are!</b>
      </div>

      {!translations  ?
null :

      <CustomTextIputWithError
        inputText={translations.NickName}
        propTop="unset"
         type="text"
        propPosition="unset"
        propLeft="unset"
        propWidth="100%"
        propWidth1="100%"
        propJustifyContent="flex-start"
        propColor="#e75600"
        propFontWeight="bold"
        errortext={NameErrorValue}
        propFlex="1"
        propColor1="#fff4d4"
        inputValue={NameValue} onInputChange={handleNameChange}
       
      />

}

{/* 
      <Property1Default1
        dataValue="Country code:"
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
        imageurl={flagUrl}
       
        >
     
     </Property1Default1> */}

   





{!translations  ?
null :

      <CustomTextIputWithError
      inputText={translations.Phone}
        propTop="unset"
        type="number"
        propPosition="unset"
        propLeft="unset"
        propWidth="100%"
        propWidth1="100%"
        propJustifyContent="flex-start"
        propColor="#e75600"
        propFontWeight="bold"
        errortext={PhonenumberErrorValue}
        propFlex="1"
        propColor1="#fff4d4"
        inputValue={PhonenumberValue} onInputChange={handlePhonenumberChange}
        prefixImageUrl={flagUrl?? undefined}
        prefixtext={PhoneCallingCode}
      />

}
      {/* <Property1Default1
        dataValue="I am ..."
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
      /> */}
     

<div>


{!translations  ?
null :

        <Property1Default1 
        dataValue={showList ? translations.Title : selectedItem?.dataValue || translations.Title}
         onClick={() => setShowList(!showList)}
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
        propCursor1="unset"
        propWidth2="8.04%"
        propRight="45.96%"
        propLeft1="46%"
        imageurl= "/image/caretdown.svg"
        />


}
{showList && (
        <ul className="picker-list">
          {dataArray.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item.dataValue}
            </li>
          ))}
        </ul>
      )}
 <div className="note" style={{color:"#fff4d4"}}  >
          {TitleErrorValue}
        </div>
</div>


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

/>


}





      <img
        className="back-icon3"
        alt=""
        src="/image/back.svg"
        onClick={onBackIconClick}
      />
    </div>






    </div>
  


 

   ) :( <div>
    <SessionPage/>
    </div>) 
     
    // <div   style={{
       
    //     fontSize: '18px',
    //    alignitem:'center',
    //    justifyContent:'center',
    //     color: 'black',
      
    //   }}>

    //   <h1>
    // Profile screen is coming soon 
    //   </h1>
    //   </div>




      }


    </div>









  )



  }
export default withAuth(Profilepage);
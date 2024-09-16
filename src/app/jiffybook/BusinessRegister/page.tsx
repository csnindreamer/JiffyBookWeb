'use client'
import { FunctionComponent, useEffect,useContext,useState,useRef ,useLayoutEffect} from "react";

import ReactCountryFlag from 'react-country-flag';
import countries from 'world-countries';

import "./style.css";
import { useRouter } from 'next/navigation'
import withAuth from '../../component/withAuth';
import dynamic from 'next/dynamic';
import {auth,db } from '../../../../firestore';
 import SessionPage from '../../component/sessionpage'
 import { LanguageContext } from "../../api/LanguageContext";

 import DatePicker from 'react-datepicker';
 import 'react-datepicker/dist/react-datepicker.css';
 import { format } from 'date-fns';

import {

    TextField,
    InputAdornment,
    Icon,
    IconButton,
    Button,
  } from "@mui/material";
  import { createTheme, ThemeProvider } from '@mui/material/styles';



  const MapComponent = dynamic(() => import('../../component/MapComponent'), {
    ssr: false
  });


const BusinessRegister:  React.FC<{ user: any }> = ({ user }) =>  {





  const countryOptions = countries.map((country) => ({

    value: country.cca2,  // ISO 3166-1 alpha-2 code
    label: country.name.common, // Common country name\
    dialCode: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''), // Dialing code

  }));


  countryOptions.sort((a, b) => a.label.localeCompare(b.label));

  const defaultCountry = countryOptions.find((country) => country.value === 'EE');


  const router = useRouter();

    useEffect(() => {
     // console.log('Router instance:', router);
    }, [router]);



    interface Category {
      index: number;
      item: any; // Replace ItemType with the type of item
  }
  
  interface subCategory {
      index: number;
      item: any; // Replace ItemType with the type of item
  }
  interface items {
      index: number;
      item: any; // Replace ItemType with the type of item
  }
  interface workingdays {
      index: number;
      item: any; // Replace ItemType with the type of item
  }

  const dropdownRef = useRef<HTMLDivElement>(null);
  const flagRef = useRef<HTMLDivElement>(null);


  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry || countryOptions[0]);
    const { currentLocale, handleLanguageChange,translations } = useContext(LanguageContext);
    const [dbCategoryData, setCategoryData] = useState<any[]>([]); 
    const [dbSubCategoryData, setSubCategoryData] = useState<any[]>([]); 
    const [dbItemData, setItemData] = useState<any[]>([]); 
    const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);
    const [selectedSubCategory, setSelectedSubCategory] =useState<subCategory[]>([]);
    const [selectedItem, setSelectedItem] = useState<items[]>([]);
    const [selectedworking, setSelectedworking] = useState<workingdays[]>([]);
  
    const [dbWorkingday, setDbWorkingday] = useState([
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ]);
  
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [showMap, setShowMap] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] =  useState(new Date());

    const [FinalButtonEnable ,setFinalButtonEnable]= useState(true)
    const [dbSegmentDataValues, setdbSegmentDataValues] = useState([]);
    const [BusinessName, setBusinessName] = useState("");   
    const [BusinessNameError, setBusinessNameError] = useState("");
  
    const [BusinessWebSite, setBusinesWebsite] = useState("");
    const [BusinessWebSiteError, setBusinessWebsiteError] = useState("");
  

    const [BusinessEmail, setBusinessEmail] = useState(""); 
  

    const [BusinessPhone, setBusinessPhone] = useState("");
    const [BusinessPhoneError, setBusinessPhoneError] = useState("");

    const [BusinessUserName, setBusinessUserName] = useState("");
    const [BusinessUserNameError, setBusinessUserNameError] = useState("");
const [LocationAddressError, setLocationAddressError]=useState("");



const [dbCategoryDataError, setdbCategoryDataError]=useState("");
const [dbSubCategoryDataError, setSubCategoryDataError] = useState("");
const [dbItemDataError, setItemDataError] = useState("");

const [dbWorkingdayError, setDbWorkingdayError] = useState("");



    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [country, setcountry] = useState("");
    const [countryflag, setcountryflag] = useState("");
    const [latitude, setlatitude] = useState("");
    const [longitude, setlongitude] = useState("");
    const [pincode, setpincode] = useState("");

    const [EmailErrorValue, setEmailErrorValue] = useState("");

    

    
   
    

    

    
 
    

    

    




    const inputRefBusinessWebsite = useRef(null);
    const inputRefEmailPublic = useRef(null);
    const inputRefPhonePublic = useRef(null);
    const inputRefNamePublic = useRef(null);
    
    const theme1 = createTheme({
        palette: {
            primary: {
            main: '#E75600', 
          },
        },
      
      });


      const onFrameContainer1Click = () => {
        router.back()
        //exit to first screen 
      };
    
    
    
    
    
    
      const deobfuscateData =(data) =>  {
        return decodeURIComponent(escape(atob(data)));
      }
    
    
      const handleDatePickClick = () => {
        setShowDatePicker(!showDatePicker);
      };





      const Selectdateonclick =(date)=>{


      //  console.log("date",date)
        setSelectedDate(date)

        if(showDatePicker==true)
          {
            setShowDatePicker(false);
          }
      }
      
 


      useEffect(() => {
        // Restore saved state on mount

   
        const savedState = localStorage.getItem('businessState');
      
        if (savedState) {
    
           const parsedState = JSON.parse(savedState);
           setSelectedCategory(parsedState.selectedCategory || []);
           setSelectedSubCategory(parsedState.selectedSubCategory || []);
           setSelectedItem(parsedState.selectedItem || []);
           setSelectedworking(parsedState.selectedworking || []);

     
           setBusinessName(parsedState.businessNamestore || "");
           setBusinesWebsite(parsedState.businessWebsitestore || "");
           setBusinessEmail(parsedState.businessEmailstore || "");
           setBusinessPhone(parsedState.businessPhonestore || "");
           setBusinessUserName(parsedState.businessUserNamestore || "");
           // Load other states similarly

         
           localStorage.removeItem('businessState'); 


        }
     }, []);
     
     const saveStateBeforeNavigation = () => {


      //console.log("called heree")
        // Save state before navigating
        const currentState = {
           selectedCategory,
           selectedSubCategory,
           selectedItem,
           selectedworking,
           businessNamestore: BusinessName,
           businessWebsitestore: BusinessWebSite,
           businessEmailstore: BusinessEmail,
           businessPhonestore: BusinessPhone,
           businessUserNamestore: BusinessUserName,
           // Add other states you want to preserve
        };
        localStorage.setItem('businessState', JSON.stringify(currentState));
     };







      useEffect(() => {
        const storedData = localStorage.getItem('LocationData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          // Use parsedData in your component
         // console.log(parsedData);


          setaddress(parsedData.address)
           setcity(parsedData.city)
            setcountry(parsedData.country)
             setcountryflag(parsedData.countryflag)
              setlatitude(parsedData.latitude)
               setlongitude(parsedData.longitude)
                setpincode(parsedData.pincode)
         // console.log("storedDatastoredData",parsedData)
          setLocationAddressError('')

    


          localStorage.removeItem('LocationData'); // Clear data from Local Storage after retrieval


        }
      }, []);


   
    
      // useEffect(() => {
      //   const storedData = localStorage.getItem('LocationData'); // Retrieve data from Local Storage





      //   // if (storedData) {
      //   //   setData(JSON.parse(storedData));
      //   //   localStorage.removeItem('myData'); // Clear data from Local Storage after retrieval
      //   // }
      // }, []);

  

      const handlePickLocationClick = () => {
       // setShowMap(true);
       saveStateBeforeNavigation();
       router.push('/jiffybook/LocationpageAll');

      };
    
      const handleCloseMap = () => {
        setShowMap(false);
      };



const SelectCategory = (item, index) => {
    if (isSelectedCategory(index)) {
        setSelectedCategory(selectedCategory.filter(category => category.index !== index));
    } else {
        setSelectedCategory([...selectedCategory, { index, item }]);
       
    }
    setdbCategoryDataError('')
  };



const isSelectedCategory = (index) => {
    return selectedCategory.some(category => category.index === index);
  };





  const SelectSubCategory = (item, index) => {
    if (isSelectedSubCategory(index)) {
        setSelectedSubCategory(selectedSubCategory.filter(subcategory => subcategory.index !== index));
    } else {
        setSelectedSubCategory([...selectedSubCategory, { index, item }]);
       
    }
    setSubCategoryDataError('')
  };



const isSelectedSubCategory = (index) => {
    return selectedSubCategory.some(subcategory => subcategory.index === index);
  };




  const SelectItem = (item, index) => {
    if (isSelectedItem(index)) {
        setSelectedItem(selectedItem.filter(Items => Items.index !== index));
    } else {
        setSelectedItem([...selectedItem, { index, item }]);
       
    }
    setItemDataError('')

  };



const isSelectedItem = (index) => {
    return selectedItem.some(Items => Items.index === index);
  };



  const Selectworking = (item, index) => {
    if (isSelectedworking(index)) {
        setSelectedworking(selectedworking.filter(Items => Items.index !== index));
    } else {
        setSelectedworking([...selectedworking, { index, item }]);
       
    }

    setDbWorkingdayError('')

  };


  const isSelectedworking = (index) => {
    return selectedworking.some(Items => Items.index === index);
  };


  const handleBusinessnameChange =(event)=>{

    setBusinessName(event.target.value)




if(validatename(event.target.value) == false)
{
    setBusinessNameError('invalid')
    setFinalButtonEnable(false)
}


else{
    setBusinessNameError('')
    setFinalButtonEnable(true)
}





  }
  


   const validatename = (name) => {
    //  var re =/^[a-zA-Z-,]+(\s{3,256}[a-zA-Z-, ])/
 //var re = /^[a-zA-Z]+(\s[a-zA-Z]*){0,2}$/;
 var string = name.replace(/^\s+|\s+$/g, "");
  // console.log("re.test(name)",string)
    var valid = true
    if(string.trim().length>2)
    {
      valid = true
    }
    else
    {
      valid = false
    }
       return valid
  }












  const handleBusinessWebSiteChange =(event)=>{

if(BusinessName == "")
{
    setBusinessNameError('blank')
    setFinalButtonEnable(false)
}
else if(validatename(BusinessName) == false)
{
    setBusinessNameError('invalid')
    setFinalButtonEnable(false)
}
else{
  
}


 if(validateurl(event.target.value) == false)
{
    setBusinessWebsiteError('invalid') 
    setFinalButtonEnable(false)
}
else{
    setBusinessWebsiteError('') 
   


    if(BusinessName == "")
    {
        setBusinessNameError('blank')
        setFinalButtonEnable(false)
    }

else if(validatename(BusinessName) == false)
{
    setBusinessNameError('invalid')
    setFinalButtonEnable(false)
}



else{
    setFinalButtonEnable(true) 
}





}

setBusinesWebsite(event.target.value)

  }

  



  const validateEmail = (value) => {

     return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
   };






  const handleContactEmail =(event)=>{

   setBusinessEmail(event.target.value)


    // Perform email validation
    const isValidEmail = validateEmail(event.target.value);
 
    //console.log("Validate email",isValidEmail)
    // Update error message based on validation result
    if (isValidEmail) {
      setEmailErrorValue("");
      setFinalButtonEnable(true)
    
    } else {
      setEmailErrorValue('invalid');
     
      setFinalButtonEnable(false)
    }
    // additional logic if needed...








  }

  
    const validatephone = (number) => {
    //  var re =/^[a-zA-Z-,]+(\s{3,256}[a-zA-Z-, ])/
 var re = /^[0-9]{6,16}$/;
    return re.test(number);
  } 


  const handleContactPhone =(event)=>{

    setBusinessPhone(event.target.value)

    const isValidPhonenumber = validatephone(event.target.value);
    if (isValidPhonenumber) {
      setBusinessPhoneError("");
      setFinalButtonEnable(true)
    
    } else {
      setBusinessPhoneError('invalid');
     
      setFinalButtonEnable(false)
    }


  }


 



  const handleContactName =(event)=>{


    setBusinessUserName(event.target.value)

    const isValidPhonenumber = validatename(event.target.value);
    if (isValidPhonenumber) {
      setBusinessUserNameError("");
      setFinalButtonEnable(true)
    
    } else {
      setBusinessUserNameError('invalid');
     
      setFinalButtonEnable(false)
    }


  }
   










   const validateurl = (name) => {

   
    //var regexp = new RegExp(/^(https?:\/\/)?([a-z\d]([a-z\d-.]?[a-z\d])*\.[a-z]([a-z\.]?[a-z])*){2,255}(\/[\w-\.~!$&'()*+,;=:@%]*)*$/);
  
   // var regexp = new RegExp(/^((https?|ftp|smtp):\/\/)?(www.)?[a-zA-Z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/)
   //const regexp =  /^(https?:\/\/)?(www\.)?([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]{2,})+(\S+)?$/;
  
   const regexp = /^(https?:\/\/)?([\w.]+\.[a-z]{2,})(\/\S*)?$/i
    //var regexp = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/);
   // var regexp =  new RegExp(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/);
    // var regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
   // console.log("shdbfhbdf",regexp.test(name),name) 
     return regexp.test(name.toLowerCase());
  
  
    }

 









const finalbusinessdata=()=>{
   
   
 

     if(BusinessName ==="")
     {

   
        setBusinessNameError('blank')

        setFinalButtonEnable(false)
     }


     else  if(validatename(BusinessName) == false)
     {
         setBusinessNameError('invalid')
         setFinalButtonEnable(false)
     }
 else if(BusinessWebSite === "")

{
    setBusinessWebsiteError('blank') 
    setFinalButtonEnable(false)
}
 else if(validateurl(BusinessWebSite) == false)
{
    setBusinessWebsiteError('invalid') 
    setFinalButtonEnable(false)
}

else if(address === "")
  {
    setLocationAddressError('No_location') 
    setFinalButtonEnable(false)
  }

else if(selectedCategory.length == 0)
{
  setdbCategoryDataError('Select')
}

else if(selectedSubCategory.length == 0)
  {
    setSubCategoryDataError('Select')
   
  }
  else if(selectedItem.length == 0)
    {
      setItemDataError('Select')
      
    }
    else if(selectedworking.length == 0)
      {
        setDbWorkingdayError('Select')
      
      }
else if(BusinessEmail =="")
{

  setEmailErrorValue('blank');

  setFinalButtonEnable(false)
}
else  if(validateEmail(BusinessEmail) == false)
  {
    setEmailErrorValue('invalid')
      setFinalButtonEnable(false)
  }
  
  else if(BusinessPhone =="")
{
  setBusinessPhoneError('blank');
  setFinalButtonEnable(false)
}

else  if(validatephone(BusinessPhone) == false)
  {
    setBusinessPhoneError('invalid')
      setFinalButtonEnable(false)
  }
else if(BusinessUserName =="")
  {

    setBusinessUserNameError('blank');
    setFinalButtonEnable(false)
  } 
  else  if(validatename(BusinessUserName) == false)
    {
      setBusinessUserNameError('invalid')
        setFinalButtonEnable(false)
    }





 else{
    console.log("finalData Check",selectedCategory,selectedSubCategory,selectedItem,selectedworking)
   alert(" Everything is checked ")

 }

     
} 











  useEffect(() => {
  
   // console.log("useruserdata:", user);
  
    if (user  && user.uid !== '' ) {



        const currentUrl = window.location.href;
        //  console.log('Current URL:', currentUrl);
      
          // Extracting data from the URL query parameters
          const urlSearchParams = new URLSearchParams(window.location.search);
          const dataParam = urlSearchParams.get('data');
          
          try {
            if (dataParam) {
              const decodedData = decodeURIComponent(dataParam);
              const deobfuscatedData = deobfuscateData(decodedData);
              const parsedData = JSON.parse(deobfuscatedData);
             // console.log('Received data from query parameters:', parsedData);





              db.collection("dbCategory")
              .doc(parsedData.strSegID)
              .collection("Category")
              .get()
              .then((snapshotdata) => {
               // console.log("snapshotdata:", snapshotdata);
            
                if (snapshotdata.size > 0) {
                    const promises: { Value: any; id: string; }[] = [];
                  
                  // Define allButton outside of the forEach loop
               
            
                  snapshotdata.forEach((doc) => {
                    const docData = doc.data();
                    const finaldbCategorydata = {
                      'Value': docData,
                      'id': doc?.id,
                    };
                    promises.push(finaldbCategorydata);
                  });
            
                  Promise.all(promises)
                    .then((newdbCategorydata) => {
                      // Include allButton at the beginning of the new data array
                     
       //console.log("newdbCategorydata",newdbCategorydata)
                   
       setCategoryData(newdbCategorydata)

                    })
                    .catch((error) => {
                      console.log("error:", error);
                    });
                } else {
                  // Handle case where there is no data
                }
              })
              .catch((error) => {
                console.log("error buser:", error);
              });






              db.collection("dbCategory")
              .doc(parsedData.strSegID)
              .collection("Subcategory")
              .get()
              .then((snapshotdata) => {
               // console.log("snapshotdata Subcategory:", snapshotdata);
            
                if (snapshotdata.size > 0) {
                    const promises: { Value: any; id: string; }[] = [];
                  
                  // Define allButton outside of the forEach loop
               
            
                  snapshotdata.forEach((doc) => {
                    const docData = doc.data();
                    const finaldbsubCategorydata = {
                      'Value': docData,
                      'id': doc?.id,
                    };
                    promises.push(finaldbsubCategorydata);
                  });
            
                  Promise.all(promises)
                    .then((newdbSubCategorydata) => {
                      // Include allButton at the beginning of the new data array
                     
       //console.log("newdbCategorydata",newdbCategorydata)
                   
       setSubCategoryData(newdbSubCategorydata)

                    })
                    .catch((error) => {
                      console.log("error:", error);
                    });
                } else {
                  // Handle case where there is no data
                }
              })
              .catch((error) => {
                console.log("error buser:", error);
              });





              db.collection("dbItem")
              .doc(parsedData.strSegID)
              .collection("Item")
              .get()
              .then((snapshotdata) => {
               // console.log("snapshotdata:", snapshotdata);
            
                if (snapshotdata.size > 0) {
                    const promises: { Value: any; id: string; }[] = [];
                  
                  // Define allButton outside of the forEach loop
               
            
                  snapshotdata.forEach((doc) => {
                    const docData = doc.data();
                    const finaldbitemdata = {
                      'Value': docData,
                      'id': doc?.id,
                    };
                    promises.push(finaldbitemdata);
                  });
            
                  Promise.all(promises)
                    .then((newdbitemdata) => {
                      // Include allButton at the beginning of the new data array
                     
       //console.log("newdbCategorydata",newdbCategorydata)
                   
       setItemData(newdbitemdata)

                    })
                    .catch((error) => {
                      console.log("error:", error);
                    });
                } else {
                  // Handle case where there is no data
                }
              })
              .catch((error) => {
                console.log("error buser:", error);
              });











                   
            }

        
    } catch (error) {
      console.error('Error decoding or parsing data:', error);
    }


      
    }
    else{
      //console.log('Session expired, logging out...');
    }
  }, [user]);
  


  const handleKeyPress = (event, ref) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      ref.current.focus();
    }
  };
    
 

  const handleFlagClick = () => {
    setShowDropdown(!showDropdown);
  };



  const handleCountrySelect = (country: { value: string; label: string; dialCode: string }) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };


  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      flagRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !flagRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };


  useEffect(() => {
    // Add event listener for clicks outside the dropdown
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (

    // <div>
    // {user && user.uid !== '' ? (

    <div className="gallery-details" data-animate-on-scroll>
      <header className="header-new">
        <img
          className="vector-icon"
          alt=""
          src="/image/ellipse-1@2x.png"
        />
        <div className="keyword14bo">
          <h3 className="keyword-14bo">CREATE A GALLERY</h3>
        </div>
        <div className="keyword14bo1">
          <h3 className="keyword-14bo">Exit</h3>
        </div>
      </header>
      <section className="frame-parent">
    


{/* info tag start */}
<div className="keyword24bw-parent2">
      <div className="keyword24bw5">
        <h1 className="value-24bw5">Info</h1>
      </div>
      <div className="text-input-yellowbg7">
      <div className="text-input-wrapper3">


{!translations  ?
null :


<ThemeProvider theme={theme1}>
<TextField
className="text-input7"
value	={BusinessName}
color="primary"
label={translations.BUSINESS_NAME}
variant="standard"
focused
sx={{ "& .MuiInputBase-root": { height: "20px",} }}
InputProps={{ disableUnderline: true }} // Remove border line
onChange={handleBusinessnameChange}
onKeyPress={(e) => handleKeyPress(e, inputRefBusinessWebsite)}
/>
</ThemeProvider>
}

</div>
{!translations  ?
null :
<div className="keyword10bw9">
<b className="keyword-10bw9">{translations.Recommendation}</b>
<b className="keyword-10bw9">{translations.Note}</b>
          </div>
        }



       { translations && BusinessNameError  ?
    
 <div className="error-wrapper3">
 <b className="keyword-10bw9">{translations[BusinessNameError]}</b>
</div>
:
null
        }
      </div>
      <div className="text-input-yellowbg7">
      <div className="text-input-wrapper3">


{!translations  ?
null :


<ThemeProvider theme={theme1}>
<TextField
className="text-input7"
color="primary"
value	={BusinessWebSite}
label={translations.Business_Website}
focused
variant="standard"
sx={{ "& .MuiInputBase-root": { height: "20px",} }}
InputProps={{ disableUnderline: true }} // Remove border line
inputRef={inputRefBusinessWebsite}
onKeyPress={(e) => handleKeyPress(e, inputRefEmailPublic)}

onChange={handleBusinessWebSiteChange}
/>
</ThemeProvider>
}  

</div>
        <div className="keyword10bw10">
          <p className="keyword-10bw10">Note</p>
        </div>
        { translations && BusinessWebSiteError  ?
    
    <div className="error-wrapper3">
    <b className="keyword-10bw9">{translations[BusinessWebSiteError]}</b>
   </div>
   :
   null
           }
      </div>
      <div className="text-input-yellowbg7">

      <button className="arrow-right-parent"   onClick={handlePickLocationClick} >
        {/* <img className="arrow-right-icon" alt="" src="/image/arrowright@2x.png" /> */}
        <div className="keyword12bo1">
          <h4 className="keyword-12bo1">Pick a location</h4>
        </div>
      </button>




{/*         
        <Button
          className="frame-item"
          disableElevation={true}
          color="primary"
          variant="outlined"
          sx={{ borderRadius: "0px 0px 0px 0px" }}
          onClick={handlePickLocationClick}
        >
          Pick a location
        </Button> */}


        <div className="text-input-disabled-yellowbg1">



          <textarea
            className="text-input3"
            placeholder="Select the Address"
            readOnly={true}
            value={address}
          />




          <div className="note2">
            <p className="gallery-location">Gallery location</p>
            <p className="gallery-location">
              * A location is mandatory irrespective of whether it is required
              to fulfill the orders or not.
            </p>
          </div>
        </div>

        



        { translations && LocationAddressError  ?
  
    <div className="error-wrapper3">
    <b className="keyword-10bw9">{translations[LocationAddressError]}</b>
   </div>
   :
   null
           }


        {/* <div className="error-wrapper5">
          <p className="error16">Error</p>
        </div> */}
       



      </div>
    </div>







{/* Info tag end  */}
        <div className="keyword24bw-parent">
          <div className="keyword24bw">
            <h1 className="keyword-14bo">Tags</h1>
          </div>
          <div className="keyword14bw-parent">
            <div className="keyword14bw">
              <h3 className="keyword-14bo">Labels</h3>
            </div>
           
            <div  className="catselection">
        {dbCategoryData && (
    dbCategoryData.map((item, index) => (
        !translations ?
        null :


        <div key={index} className="small-text-button-whi-f-r-a-m ">
          <button className={`smalltextbuttonwhite ${isSelectedCategory(index) ? 'selected' : ''}` } onClick={() => SelectCategory(item, index)} >
            <b className= {`value  ${isSelectedCategory(index) ? 'Selectedvalue' : ''}` }       >{translations[item?.Value?.strCat]}</b>
          </button>
        
        </div>
 



))
)}

</div>


{ translations && dbCategoryDataError  ?
    
    <div className="error-wrapper3">
    <b className="keyword-10bw9">{translations[dbCategoryDataError]}</b>
   </div>
   :
   null
           }

            {/* <div className="error">
              <p className="error1">Error</p>
            </div> */}



          </div>
          <div className="keyword14bw-parent">
            <div className="keyword14bw">
              <h3 className="keyword-14bo">Services</h3>
            </div>
            <div  className="catselection">
        {dbSubCategoryData && (
    dbSubCategoryData.map((item, index) => (
        !translations ?
        null :


        <div key={index}  className="small-text-button-whi-f-r-a-m" onClick={() => SelectSubCategory(item, index)}>
          <button className={`smalltextbuttonwhite ${isSelectedSubCategory(index) ? 'selected' : ''}` }>
            <b className= {`value  ${isSelectedSubCategory(index) ? 'Selectedvalue' : ''}`}>{translations[item?.Value?.strSubcat]}</b>
          </button>
        
        </div>

))
)}

</div>
{ translations && dbSubCategoryDataError  ?
    
    <div className="error-wrapper3">
    <b className="keyword-10bw9">{translations[dbSubCategoryDataError]}</b>
   </div>
   :
   null

}


          </div>
          <div className="keyword14bw-container">
            <div className="keyword14bw">
              <h3 className="keyword-14bo">Items</h3>
            </div>
            <div  className="catselection">
        {dbItemData && (
    dbItemData.map((item, index) => (
        !translations ?
        null :


        <div key={index}  className="small-text-button-whi-f-r-a-m" onClick={() => SelectItem(item, index)}>
          <button className={`smalltextbuttonwhite ${isSelectedItem(index) ? 'selected' : ''}` }>
            <b className= {`value  ${isSelectedItem(index) ? 'Selectedvalue' : ''}`}>{translations[item?.Value?.strItem]}</b>
          </button>
        
        </div>

))
)}

</div>



{ translations && dbItemDataError  ?
    
    <div className="error-wrapper3">
    <b className="keyword-10bw9">{translations[dbItemDataError]}</b>
   </div>
   :
   null

}


          </div>
        </div>
      </section>
      <section className="frame-group">
        <div className="keyword24bw-parent">
          <div className="keyword24bw">
            <h1 className="keyword-14bo">Contact</h1>
          </div>
          <div className="text-input-yellowbg">
          
          <div className="text-input-wrapper3">

{!translations  ?
null :


<ThemeProvider theme={theme1}>
<TextField
className="text-input7"
color="primary"
value	={BusinessEmail}
label={translations.Contact_email}
focused
variant="standard"
sx={{ "& .MuiInputBase-root": { height: "20px"} }}
InputProps={{ disableUnderline: true }} // Remove border line
inputRef={inputRefEmailPublic}
onKeyPress={(e) => handleKeyPress(e, inputRefPhonePublic)}

onChange={handleContactEmail}
/>
</ThemeProvider>
}  

</div>
            
            <div className="keyword14bw">
              <p className="keyword-10bw">Note</p>
            </div>
        
            { translations && EmailErrorValue  ?
    
    <div className="error-wrapper3">
    <b className="keyword-10bw9">{translations[EmailErrorValue]}</b>
   </div>
   :
   null

}



          </div>




          
          <div className="text-input-yellowbg">


          <div className="text-input-wrapper3" style={{ display: 'flex',  padding: '5px', borderRadius: '5px', width: '100%' }}>
          
{!translations  ?
null :
<div>
<span style={{color:'#E75600',fontWeight:'500'}}>{translations.Phone}</span>  






 


<div style={{ display: 'flex', alignItems: 'center',width: '100%', }}>







      {/* Flag display that opens the dropdown */}
      <div onClick={handleFlagClick} style={{ cursor: 'pointer',  }}  ref={flagRef} >
        <ReactCountryFlag
          countryCode={selectedCountry.value}
          svg
          style={{
            width: '2em',
            height: '2em',
        
          }}
        />
        <span style={{ color: 'black', fontSize: '1.5em',fontWeight:'500' }}>
          {selectedCountry.dialCode}
        </span>
      </div>

      {/* Custom dropdown to show country list */}
      {showDropdown && (
        <div
        ref={dropdownRef}  
        style={{
          marginTop: '10px',
          border: '1px solid #ccc',
          maxHeight: '200px',
          overflowY: 'auto',
          width: '250px',
          position: 'absolute',
          backgroundColor: '#fff',
          zIndex: 1,
        }}>
          {countryOptions.map((country) => (
            <div
              key={country.value}
              onClick={() => handleCountrySelect(country)}
              style={{
                padding: '5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid #eee',
               
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ReactCountryFlag
                  countryCode={country.value}
                  svg
                  style={{
                    width: '2em',
                    height: '2em',
                    marginRight: '10px',
                  }}
                />
                <span style={{ color: 'black', fontSize: '1em' }}>
                  {country.label}
                </span>
              </div>
            
            </div>
          ))}
        </div>
      )}

      {/* TextField Component */}
      <ThemeProvider theme={theme1}>
        <TextField
         className="text-input7"
         color="primary"
         value	={BusinessPhone}
        // label= {translations.Phone}
         focused
         variant="standard"
         sx={{ 
          "& .MuiInputBase-root": { height: "20px" ,marginTop:"1px",fontSize: '1.5em', },
         
  
        }}
         InputProps={{ disableUnderline: true }} // Remove border line
         inputRef={inputRefPhonePublic}
         onKeyPress={(e) => handleKeyPress(e, inputRefNamePublic)}
       
         onChange={handleContactPhone} 




     
        />
      </ThemeProvider>
    </div>

    </div>

}  

</div>




            <div className="keyword14bw">
              <p className="keyword-10bw">Note</p>
            </div>



            


            { translations && BusinessPhoneError  ?
    
    <div className="error-wrapper3">
    <b className="keyword-10bw9">{translations[BusinessPhoneError]}</b>
   </div>
   :
   null

}


            
          </div>




          <div className="text-input-yellowbg">



          <div className="text-input-wrapper3">

{!translations  ?
null :


<ThemeProvider theme={theme1}>
<TextField
className="text-input7"
value	={BusinessUserName}
color="primary"
label={translations.Name}
focused
variant="standard"
sx={{ "& .MuiInputBase-root": { height: "20px"} }}
InputProps={{ disableUnderline: true }} // Remove border line
inputRef={inputRefNamePublic}

onChange={handleContactName}
/>
</ThemeProvider>


}  

</div>





            <div className="keyword14bw">
              <p className="keyword-10bw">Note</p>
            </div>
           
            { translations && BusinessUserNameError  ?
    
    <div className="error-wrapper3">
    <b className="keyword-10bw9">{translations[BusinessUserNameError]}</b>
   </div>
   :
   null

}
          </div>
        </div>


        
        <div className="keyword24bw-container">

          <div className="keyword14bw">
            <h1 className="keyword-14bo">Workdays</h1>
          </div>
      
          <div className="keyword14bw-parent3">

          <div className="keyword14bw6">
        <h3 className="keyword-14bw6">Working days</h3>
      </div>
          <div  className="catselection">
        {dbWorkingday && (
    dbWorkingday.map((item, index) => (
        !translations ?
        null :
        
        <div key={index}  className="small-text-button-whi-f-r-a-m" onClick={() => Selectworking(item, index)}>
          <button className={`smalltextbuttonwhite ${isSelectedworking(index) ? 'selected' : ''}` }>
            <b className= {`value  ${isSelectedworking(index) ? 'Selectedvalue' : ''}`}>{translations[item]}</b>
          </button>
        
        </div>

))
)}

</div>
{ translations && dbWorkingdayError  ?
    
    <div className="error-wrapper3">
    <b className="keyword-10bw9">{translations[dbWorkingdayError]}</b>
   </div>
   :
   null

}

</div>


          {/* <TextInputDisabledFrameWhit /> */}


          <div className="frame-parent4">
      <button className="arrow-right-parent" onClick={handleDatePickClick} >
        {/* <img className="arrow-right-icon" alt="" src="/image/arrowright@2x.png" /> */}
        <div className="keyword12bo1">
          <h4 className="keyword-12bo1">Pick Start a date</h4>
        </div>
      </button>
      {showDatePicker && (
          <DatePicker
            selected={selectedDate}

            minDate={new Date()} // Disable past dates
            onSelect={(date) =>  Selectdateonclick(date)    }
            inline
          />
        )}


      <div className="text-input-disabled-yellowbg2">
        <textarea
          className="text-input4"
          placeholder="Select the Date"
          readOnly={true}

          value={selectedDate ? format(selectedDate, 'dd-MM-yyyy') : ''}
        />





        <p className="note3">Note</p>
      </div>
      {/* <div className="error22">
        <p className="error23">Error</p>
      </div> */}
    </div>

        </div>
      </section>

      <div className="submitbuttonorange-wrapper">
        <button className="submitbuttonorange" onClick={finalbusinessdata}  >
          <img className="vector-icon" alt="" src="/image/vector.svg" />
        </button>
      </div>


    </div>


// ) : ( <div>
//     <SessionPage/>
//     </div>)
//       }


//       </div>
  
  


  );
};


export default withAuth(BusinessRegister);
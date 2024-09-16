
'use client'
import Image from 'next/image'
import Link from 'next/link';
import React,{ useCallback,useState,useEffect,useContext } from "react";
import { useRouter } from 'next/navigation'
import withAuth from '../../component/withAuth';
import {auth,db } from '../../../../firestore';
 import SessionPage from '../../component/sessionpage'
 import { LanguageContext } from "../../api/LanguageContext";
 import "./style.css";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { library,IconProp } from '@fortawesome/fontawesome-svg-core';
 import { IconName } from '@fortawesome/fontawesome-common-types';
 import { fas } from '@fortawesome/free-solid-svg-icons';
 import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
 import {

  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";


 import {OpenAI} from "openai";
 library.add(fas);




 const AddBusiness: React.FC<{ user: any }> = ({ user }) => {
  const router = useRouter()

  type ButtonData = {
    id: string;
    Value: {
        strSegIndustry: string;
    };
};



const [prompt, setPrompt] = useState("");
//const [result, setResult] = useState<string[]>([]);
const [description, setDescription] = useState('');
const [imageUrl, setImageUrl] = useState('');

  const { currentLocale, handleLanguageChange,translations } = useContext(LanguageContext);



  const [dbSegmentData, setdbSegmentData] = useState<ButtonData[] | never[]>([]);

  const [dbSegmentDataValues, setdbSegmentDataValues] = useState<any[]>([]);




  const onFrameContainer1Click = () => {
    router.back()
    //exit to first screen 
  };

  const getIcon = (iconName: string): IconProp => {
    return iconName ? ['fas', iconName as IconName] : faExclamationCircle;
};





// const generateImage = async () => {
//   // await openai.images.create({
//   //   prompt: prompt,
//   //   n: 1,
//   //   size: "256x256",
//   // });
//   // setResult(res.data.data[0].url);



//   const response = await openai.images.generate({
//     prompt: prompt,
//     n: 5,
//     size: "512x512",
//   });
//   console.log(response.data);

//  // setResult(response.data[3].url);

//   const urls = response.data.map(imageData => imageData.url);
//   setResult(prevImageUrls => [...prevImageUrls, ...urls]);




// };

  useEffect(() => {
  
    console.log("useruserdata,process:", process.env.OPEN_AI_API_KEY);
  

  
  
   





    if (user  && user.uid !== '' ) {
        db.collection("dbSegment")
        .doc('EE')
        .collection("region")
        .get()
        .then((snapshotdata) => {
          console.log("snapshotdata:", snapshotdata);
      
          if (snapshotdata.size > 0) {
        

            const promises: { Value: any; id: string; }[] = [];
            // Define allButton outside of the forEach loop
          //  const allButton = { 'id':'all', 'Value': { strSegIndustry: "All" } };
            const allButton: ButtonData = {
              id: 'all',
              Value: { strSegIndustry: "All" }
          };
            snapshotdata.forEach((doc) => {
              const docData = doc?.data();
              const finaldbSegmentdata = {
                'Value': docData,
                'id': doc?.id,
              };

           



              promises.push(finaldbSegmentdata);
            });
      
            Promise.all(promises)
              .then((newdbSegmentdata) => {
                // Include allButton at the beginning of the new data array
                const combinedData: ButtonData[] = [
                  allButton,
                  ...newdbSegmentdata.map(item => ({
                      id: item.id,
                      Value: item.Value
                  }))
              ];

              setdbSegmentData(combinedData);

                setdbSegmentDataValues(newdbSegmentdata)
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
    else{
      console.log('Session expired, logging out...');
    }
  }, [user]);
  
  const SegIndustry =(item,index)=>{



  }


const Selectsegment =(item,index)=>{
  console.log("item,index",item,index)

  const dataObject = { 'strSegID':item.id, 'Value': item.Value };
  const dataString = JSON.stringify(dataObject);
  const obfuscatedData = obfuscateData(dataString);
  const encodedDataString = encodeURIComponent(obfuscatedData);

  router.push(`/jiffybook/BusinessRegister?data=${encodedDataString}`, { scroll: true });
  // BusinessRegister


}

const obfuscateData =(data) =>  {
  return btoa(unescape(encodeURIComponent(data)));
}


//console.log("businessData",businessData,user)


const handleBusinessnameChange =(event)=>{



  console.log("called ",event.target.value)
  setPrompt(event.target.value)

}

  return (

    <div>
    {user && user.uid !== '' ? (

  


<div className="gallery-schema">
<div className="header2">
        <div className="header-inner" />
        <img className="ellipse-icon" alt="" src="/image/ellipse-1@2x.png" />
        <div className="header-container">
          <b className="header3">CREATE A GALLERY</b>
        </div>
        <div className="menu-container" onClick={onFrameContainer1Click}>
          <b className="header3">Exit</b>
        </div>
      </div>
    





     
{/* Start of filter */}

<div className="business-segment-schema-button">
  <div className="keyword14bw6">
    <h3 className="keyword-14bw6">Apply a filter</h3>
  </div>
  <div className="frame-keyword-container">
  {dbSegmentData && (
    dbSegmentData.map((item, index) => (
      <div key={item.id} className="frame-keyword-b-w-frame"> {/* Add key prop */}
        <button className="smalltextbuttonwhite10" onClick={() => SegIndustry(item, index)} >
          <b className="value11">{item?.Value?.strSegIndustry}</b>
        </button>
      </div>
    ))
  )}
</div>
</div>

{/* end of filter */}

{/* Start of section */}
<section className="business-segment">





  {dbSegmentDataValues && (
    dbSegmentDataValues.map((item, index) => (
        !translations ?
        null :
        <div key={index} className="schema-button">
        {/* <img className="clock-icon" loading="eager" alt="" src="/clock.svg" /> */}


      
    
        <FontAwesomeIcon icon={getIcon(item?.Value?.strIcon)}  className="clock-icon" style={{color: item?.Value?.strIconColor}} />
      
        <button className="label" onClick={() => Selectsegment(item, index)} >
       <b className="value26"  >{translations[item?.Value?.strSeg]}</b>
        </button>
        <div className="keyword12bo5" >
          <h3 className="keyword-12bo5" >
          Restaurant delivery and pickup
          </h3>
        </div>
        <div className="keyword10bb4">
          <div className="value-10bb4">
            <ul className="guests-order-food-from-a-menu">
              <li className="guests1">Guests:</li>
              <li className="order-food-from">order food from a menu</li>
              <li className="share-email-phone">share email, phone number and address with the booking</li>
              <li className="chat-with-gallery">chat with gallery</li>
              <li className="gallery1">Gallery:</li>
              <li className="shares-location-with">
              shares location with the guests
              </li>
              <li className="arranges-delivery-or">
              arranges delivery or pickup on the same day, during the booked time slot
              </li>
              <li>Bookings are open on the day of booking</li>
            </ul>
          </div>
        </div>
      </div>











        
    ))
  )}


     
    
    </section>

{/* end of section */}

{/* end of tag */}
      </div>

     ) : ( <div>
      <SessionPage/>
      </div>)
     





      }


    </div>









  )



  }
export default withAuth(AddBusiness);
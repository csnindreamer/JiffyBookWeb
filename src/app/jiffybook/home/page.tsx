'use client'
import Image from 'next/image'
import Link from 'next/link';
import React,{ useCallback,useState,useEffect } from "react";
import { useRouter } from 'next/navigation'
import withAuth from '../../component/withAuth';
import {auth,db } from '../../../../firestore';
 import SessionPage from '../../component/sessionpage'
 import "./style.css";
 const Homepage: React.FC<{ user: any }> = ({ user }) => {

  const router = useRouter()
  const [businessData, setbusinessData] = useState<{ strBname: any; strBrole: number; strImage: any }[]>([]);
  const onFrameContainer1Click = () => {
    router.back()
    //exit to first screen 
  };




  useEffect(() => {
    console.log("useruserdata:", user);
  
    if (user) {
      db.collection("dbBuser")
        .doc(user.email)
        .collection("Business")
        .get()
        .then((snapshotdata) => {
          console.log("snapshotdata:", snapshotdata);
  
          if (snapshotdata.size > 0) {
            const promises = [] as Promise<any>[]; 
  
            snapshotdata.forEach((doc) => {
              const promise = db
                .collection("dbBusiness")
                .doc(doc?.id)
                .get()
                .then((bname) => {
                  if (bname.exists) {
                    console.log("bname:", bname);
                    const finalbusinessdata = {
                      strBname: bname.data()?.strBname,
                      strBrole: doc.data()?.strBrole,
                      strImage: bname.data()?.strLogoURL,
                    };
                    return finalbusinessdata;
                  }
                })
                .catch((error) => {
                  console.log("error:", error);
                });
  
              promises.push(promise);
            });
  
            Promise.all(promises)
              .then((newBusinessData) => {
                setbusinessData(newBusinessData.filter(Boolean));
              })
              .catch((error) => {
                console.log("error:", error);
              });
          } else {
            // Handle case where there is no data
          }
        })
        .catch((error) => {
          console.log("error:", error);
        });
    }
  }, [user]);
  








//console.log("businessData",businessData,user)


  return (

    <div>
    {user ?

  


<div className="homescreen">
<div className="header2">
        <div className="header-inner" />
        <img className="ellipse-icon" alt="" src="/image/ellipse-1@2x.png" />
        <div className="header-container">
          <b className="header3">GALLERY HOME</b>
        </div>
        <div className="menu-container" onClick={onFrameContainer1Click}>
          <b className="header3">Exit</b>
        </div>
      </div>
    

      <div className="businesscard-list">
      {businessData && (
      businessData.map((item, index) => (
        <div key={index} className="businesscard-parent">
                {/* <GoogleIcon iconText="/google11.svg" /> */}
                <img
              className="prefix-image"
              alt=""
              src={item.strImage}
              style={{ marginRight: "8px" }} // Adjust the margin as needed
            />
          <div className="keyword14bo1">
            <b className="keyword-14bo1">{item.strBname}</b>
          </div>
          <div className="keyword10bw1">
            <b className="keyword-14bo1">{item.strBrole}</b>
          </div>
        </div>
      ))
      )}
    </div>



{/* end of tag */}
      </div>

      : 
      <div>
    <SessionPage/>
    </div>





      }


    </div>









  )



  }
export default withAuth(Homepage);
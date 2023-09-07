'use client'
import React, { useState } from 'react';
import { QrReader } from "react-qr-reader";

const QRCodeScannerPage = () => {

  const [data, setData] = useState("No result");


  return (
<div >
      <div >
        <QrReader
         onResult={(result: any, error) => {
            if (result) {
              setData(result.text);
            }
          
            if (error) {
              console.info(error);
            }
          }}
//this is facing mode : "environment " it will open backcamera of the smartphone and if not found will 
// open the front camera
        constraints    ={{ facingMode:  "environment"  }}
         // style={{ width: "40%", height: "40%" }}
        />
        <p>{data}</p>
      </div>
    </div>
  );
};





export default QRCodeScannerPage;

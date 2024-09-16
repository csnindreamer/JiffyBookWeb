'use client'
import { FunctionComponent } from "react";
import React, { useState } from 'react';
import "./style.css";
import { Button } from "@mui/material";
import withAuth from '../../component/withAuth';
import SessionPage from '../../component/sessionpage'
const BasicDetails= ({ user }) => {
    const [activeSection, setActiveSection] = useState(1);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };


  return (
    <div className="basic-details">
      <div className="header4">
        <div className="header-inner" />
        <img
          className="circle-logo-with-space-12"
          alt=""
          src="/image/ellipse-1@2x.png"
        />
        <div className="header-frame">
          <b className="header5">ADD_BUSINESS</b>
        </div>
        <div className="menu-frame">
          <b className="header5">EXIT</b>
        </div>
      </div>
      <div className="basic-details1">
        <div className="keyword24bo5">
          <b className="header5">Basic_details</b>
        </div>
        <div className="keyword10bw2">
          <b className="header5">
            You_cannot_change_these_details_in_the_future
          </b>
        </div>
      </div>
    
      
      <section style={{ display: activeSection === 1 ? 'block' : 'none' }} className="select-stock-or-slot">
        {/* Contents of Section 1 */}
     


 <div >
        <div className="keyword14bw1">
          <b className="header5">Select_Stock_or_Slot</b>
        </div>
        <div className="Stock_Slot">
        <div className="keyword12bo-parent"  onClick={() => toggleSection(2)}>
          <div className="keyword24bo5">
            <b className="header5">Slot_Booking</b>
          </div>
          <img className="clock-icon" alt="" src="/clock.svg" />
          <div className="keyword10bb4">
            <b className="header5">Slot_Booking_Message</b>
          </div>
        </div>
        <div className="keyword12bo-parent"  onClick={() => toggleSection(2)}>
          <div className="keyword24bo5">
            <b className="header5">Stock_Booking</b>
          </div>
          <img className="clock-icon" alt="" src="/clock.svg" />
          <div className="keyword10bb4">
            <b className="header5">Stock_Booking_Message</b>
          </div>
        </div>
     
        </div>
      
        {/* <Button
    style={{ display: activeSection === 1 ? 'block' : 'none', color: '#fff' }}
    onClick={() => toggleSection(2)}
  >
    Toggle Section 1
  </Button> */}
      
      </div>

 



      </section>

      <section style={{ display: activeSection === 2 ? 'block' : 'none' }} className="business-segment">
        {/* Contents of Section 2 */}

 
        <div >
        <div className="keyword14bw2">
          <b className="header5">Business_Segment</b>
        </div>
        <div className="Stock_Slot">
        <div className="keyword12bw-parent">
          <div className="keyword24bo5">
            <b className="header5">strSeg</b>
          </div>
          <img className="clock-icon" alt="" src="/stethoscope.svg" />
        </div>
        <div className="keyword12bw-parent">
          <div className="keyword24bo5">
            <b className="header5">strSeg</b>
          </div>
          <img className="clock-icon" alt="" src="/stethoscope.svg" />
        </div>
        <div className="keyword12bw-parent">
          <div className="keyword24bo5">
            <b className="header5">strSeg</b>
          </div>
          <img className="clock-icon" alt="" src="/stethoscope.svg" />
        </div>
      
       
      </div>
  

     <Button
    style={{ display: activeSection === 2 ? 'block' : 'none', color: '#fff' }}
    onClick={() => toggleSection(1)}
  >
    Toggle Section 2
  </Button> 




      </div>


     
      </section>
   
     
    

   
   

    


    </div>
  );
};

export default   withAuth(BasicDetails); 


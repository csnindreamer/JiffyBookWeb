
'use client'
import React, { useState,useEffect } from 'react';
import Map from '../../component/LocationMap';
import withAuth from '../../component/withAuth';
import '../../styles.css';

const MyPage = ({ user }) => {
    const [markers, setMarkers] = useState<Array<{ position: { lat: number; lng: number }; title: string }>>([]);
  
  const handleSearch = async (searchText) => {
    try {
      const results = await fetchSearchResults(searchText);
      setMarkers(results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };








  const fetchSearchResults = async (searchText) => {
    try {
      // Perform your search API call here and return the results
      // Replace this with your actual API call logic
      // For simplicity, I'm returning a mock result
      return [
        { position: { lat: 40.712776, lng: -74.005974 }, title: 'New York' },
        { position: { lat: 51.5074, lng: -0.1278 }, title: 'London' },
      ];
    } catch (error) {
      console.error('Error fetching search results:', error);
      return [];
    }
  };
  console.log("called 1234",user)
  return (


    <div >

{user ?

      <Map markers={markers} onSearch={handleSearch} />

      : 
      
    <div className="center-container" >
      <p>Please log in.</p>
      <div className="loader"> </div>
   </div>
    
      }


    </div>
  );
};

export default withAuth(MyPage);


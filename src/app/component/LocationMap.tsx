
'use client'




import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Search from './Search';
import axios from 'axios';
const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 0,
  lng: 0
};

const LocationMap = ({ markers, onSearch }) => {
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const [searchResults, setSearchResults] = useState([]);
  const [mapMarkers, setMapMarkers] = useState<{ position: any; title: any }[]>([]);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (searchResults.length > 0) {
      const newMarkers = searchResults
        .map((result: any, index: number) => {
          const { geometry, name } = result;
          if (geometry && geometry.location) {
            const { location } = geometry;
            return {
              position: location,
              title: name
            };
          }
          return null;
        })
        .filter((marker) => marker !== null) as { position: any; title: any; }[];

        setMapMarkers(newMarkers);
    }
  }, [searchResults]);

  const handleSearch = async (searchText) => {
    try {
      const results = await fetchSearchResults(searchText);
      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const fetchSearchResults = async (searchText) => {


    console.log('PORT:', process.env.PORT);
console.log('NODE_ENV:', process.env.NODE_ENV);
    try {
      const response = await axios.get('https://us-central1-jiffybook-public.cloudfunctions.net/googlePlacesTextSearch', {
       
        params: {
          query: searchText,
          key: 'AIzaSyCn_5rImQH7nJ_PaM58WmUNMxYriM9w6a8' // Replace with your Google Maps API key
        }
      
      });

      
      console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching search results:', error);
      return [];
    }
   



  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCn_5rImQH7nJ_PaM58WmUNMxYriM9w6a8">
      <div>
        <Search onSearch={handleSearch} />
      </div>
      <GoogleMap mapContainerStyle={containerStyle} center={currentLocation || center} zoom={10}>
        {currentLocation && mapMarkers.length === 0 && (
          <Marker position={currentLocation} title="Current Location" />
        )}

        {mapMarkers.map((marker, index) => (
          <Marker key={index} position={marker.position} title={marker.title} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default LocationMap;

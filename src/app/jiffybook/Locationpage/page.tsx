'use client'
import React, { useState,useEffect } from 'react';
import { GoogleMap, useJsApiLoader,Marker,Autocomplete ,LoadScript} from '@react-google-maps/api';
import geohash from "ngeohash";
import {auth,db } from '../../../../firestore';
import { useRouter } from 'next/navigation'
const LIBRARIES: ("places")[] = ['places'];
const LocationPage = () => {
    const router = useRouter()
  const [data, setData] = useState("No result");
  const [searchText, setSearchText] = useState('');
  const [currentPosition, setCurrentPosition] = useState<{ lat: number; lng: number }>({ lat: 0, lng: 0 });
  const [Finaldata, setFinaldata] = useState<{ address: any; latitude: number; longitude: number; countryflag: any; pincode: any; city: any; country: any; } | null>(null);
  const [autocomplete, setAutocomplete] =useState<google.maps.places.AutocompleteService | null>(null);
  interface Style {
    position?: 'fixed' | 'absolute' | 'relative';
    bottom: number;
    right: number;
    padding: string;
    fontSize: string;
    zIndex: number;
    cursor: string;
  }
  
  const commonStyle: Style = {
    position: 'fixed',
    bottom: 180,
    right: 10,
    padding: '10px',
    fontSize: '24px',
    zIndex: 1,
    cursor: 'pointer',
  };
  
  const mobileStyle: Style = {
    position: 'fixed',
    bottom: 180,
    right: 5,
    padding: '5px',
    fontSize: '36px',
    zIndex: 1,
    cursor: 'pointer',
  };
  const containerStyle = {
    width: '100vw',
    height: '100vh'
  };
  const center = {
    lat: 13.139008,
    lng: 77.743094
  };
  const markerPosition = {
    lat: 13.139008,
    lng: 77.743094
  };
  
  
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY|| 'DEFAULT_API_KEY',
      libraries: ['places'],
    })



    

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
  
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
    const getCurrentLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {

                console.log("positionposition",position)
              setCurrentPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude
              });

              import('isomorphic-fetch').then(() => {
              fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' +  position.coords.latitude + ',' +  position.coords.longitude + '&key=' + process.env.GOOGLE_MAP_API_KEY)
     
        .then((response) => response.json())

       .then((responseJson) => {  

        console.log("responseJson",responseJson)
        setSearchText(responseJson.results[0].formatted_address);
        const location = {
            address: responseJson.results[0].formatted_address,
           // countrycode: responseJson.results[0].address_components[2].short_name,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            countryflag :  responseJson.results[responseJson.results.length-1].address_components[responseJson.results[responseJson.results.length-1].address_components.length-1].short_name,
            pincode:responseJson.results[0].address_components[responseJson.results[0].address_components.length-1].short_name,
            city:responseJson.results[responseJson.results.length-3].address_components[0].short_name,
            country:responseJson.results[responseJson.results.length-1].address_components[responseJson.results[responseJson.results.length-1].address_components.length-1].long_name
          };
          console.log('location',location)


setFinaldata(location)
         








         // setFinaldata


       })  .catch(error => {
        console.log("responseJson error",error)
    })

              })
            },
            (error) => {
              console.error('Error getting current location:', error);
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      };
    

   
    
  








      // Function to handle place selection from Autocomplete
      const handlePlaceSelect = () => {
      
        
        if (autocomplete) {
            const autocompleteUnknown = autocomplete as unknown;
            const place = (autocompleteUnknown as { getPlace: () => google.maps.places.PlaceResult }).getPlace();
          
        
          if (place.geometry && place.geometry.location) {
           
            setCurrentPosition({
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            });



            import('isomorphic-fetch').then(() => {
                fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' +currentPosition.lat + ',' + currentPosition.lng+ '&key=' + process.env.GOOGLE_MAP_API_KEY)
             
                .then((response) => response.json())
        
               .then((responseJson) => {  
        
                console.log("responseJson",responseJson)
                setSearchText(responseJson.results[0].formatted_address);
                
        
                const location = {
                    address: responseJson.results[0].formatted_address,
                   // countrycode: responseJson.results[0].address_components[2].short_name,
                    latitude:currentPosition.lat,
                    longitude:currentPosition.lng,
                    countryflag :  responseJson.results[responseJson.results.length-1].address_components[responseJson.results[responseJson.results.length-1].address_components.length-1].short_name,
                    pincode:responseJson.results[0].address_components[responseJson.results[0].address_components.length-1].short_name,
                    city:responseJson.results[responseJson.results.length-3].address_components[0].short_name,
                    country:responseJson.results[responseJson.results.length-1].address_components[responseJson.results[responseJson.results.length-1].address_components.length-1].long_name
                  };
                  console.log('location',location)
        
        
        setFinaldata(location)
        
        
               })  .catch(error => {
                console.log("responseJson error",error)
            })
        
        
        
                })











            if (place.formatted_address) {
                setSearchText(place.formatted_address);
              } // Clear the search text input
          }
        }
      };




      useEffect(() => {
     if (isLoaded) {

            const google = window.google;
            console.log("const google = window.google;", google.maps)
            const autocompletion = new window.google.maps.places.AutocompleteService();
            setAutocomplete(autocompletion);
       
        }
      }, [isLoaded]);


      const handleAutocompleteLoad = (autocompleteInstance) => {
  


       
        setAutocomplete(autocompleteInstance);
      };

      const handleMapClick = (e) => {
        console.log(" On clickor drag",e.latLng.lat(),e.latLng.lng())
        setCurrentPosition({
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        });
        import('isomorphic-fetch').then(() => {
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' +   e.latLng.lat() + ',' +  e.latLng.lng()+ '&key=' + process.env.GOOGLE_MAP_API_KEY)
     
        .then((response) => response.json())

       .then((responseJson) => {  

        console.log("responseJson",responseJson)
        setSearchText(responseJson.results[0].formatted_address);
        

        const location = {
            address: responseJson.results[0].formatted_address,
           // countrycode: responseJson.results[0].address_components[2].short_name,
            latitude:e.latLng.lat(),
            longitude:e.latLng.lng(),
            countryflag :  responseJson.results[responseJson.results.length-1].address_components[responseJson.results[responseJson.results.length-1].address_components.length-1].short_name,
            pincode:responseJson.results[0].address_components[responseJson.results[0].address_components.length-1].short_name,
            city:responseJson.results[responseJson.results.length-3].address_components[0].short_name,
            country:responseJson.results[responseJson.results.length-1].address_components[responseJson.results[responseJson.results.length-1].address_components.length-1].long_name
          };
          console.log('location',location)


setFinaldata(location)


       })  .catch(error => {
        console.log("responseJson error",error)
    })



        })

      };

      useEffect(() => {
        // Get and set the user's current location when the component mounts
        getCurrentLocation();
      }, []);

      const clearInput = () => {
        setSearchText('');
      };

      const handleSave = () => {


        //    address
        //    city
        //    country
        //    countryflag
        //    latitude
        //    longitude
        //    pincode
               
        
        if(Finaldata){
            const hash = geohash.encode(Finaldata.latitude,Finaldata.longitude)
        
            console.log("FinaldataFinaldata",Finaldata)
        
        
            const user = auth.currentUser;
        if(user)
        {
            db.collection('dbUser').doc(user.uid).collection('Location').doc('Default').set({
                strClongitude: Finaldata.longitude,
                 strClatitude:Finaldata.latitude,
               strCaddress: Finaldata.address,
               strCcountry:Finaldata.country,
               strCcity:Finaldata.city,
               strCpincode:Finaldata.pincode,
               strCcountryCode:Finaldata.countryflag,
               strLocName:"Default",
               geohash:hash,
               }).then(success=> {
        
                window.history.replaceState({}, '', '/jiffybook/Profilepage');
                router.push('/jiffybook/Profilepage'); 
                  
        
             })
             .catch(function(error) {
              
                 console.error("Error adding document: ", error);
                 
             });
        
        }
        
        
        
        
        
        
           
           // alert("final update")
        
        
        
        
        }
        else{
           
        }
        
                
              };
              
        
  return (
    <LoadScript
    googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY || 'YOUR_DEFAULT_API_KEY'}
    libraries={LIBRARIES}
  >
   
<div>
<div style={{ position: 'absolute', top: 60, left: 10, zIndex: 1 }}>
{isLoaded ? (
        <Autocomplete
          onLoad={handleAutocompleteLoad}
        
          onPlaceChanged={handlePlaceSelect}
          options={{
            componentRestrictions: { country: ['EE','IN'] } // Specify the country code here
          }}
        >
            <div>
          <input
            type="text"
            placeholder="Search for a location"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: '300px', padding: '10px', fontSize: '16px',color:'black' ,paddingRight: '30px',}}
          />
           {searchText && (



           

        <button
          onClick={clearInput}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            border: 'none',
            background: 'transparent',
            zIndex: 1, // Ensure the button is above the text
            color:'black'
          }}
        >
          &#10006;
        </button>
      )}
      </div>
        </Autocomplete>
            ) : <></>}
      </div>


      <div style={{ position: 'fixed', bottom: 80, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>

{ Finaldata && Object.keys(Finaldata).length > 0   ?
 <button
 style={{
   padding: '10px',
   fontSize: '18px',
   cursor: 'pointer',
   border: 'none',
   width:'240px',
   background: '#e75600',
   color: 'white',
   borderRadius: '30px',
 }}
 onClick={handleSave}
>
 Save
</button>
:
<button
style={{
  padding: '10px',
  fontSize: '18px',
  cursor: 'pointer',
  border: 'none',
  width:'240px',
  background: '#808080',
  color: 'white',
  borderRadius: '30px',
}}

>
Save
</button>
}


 










</div>






      <div
       style={{
        ...commonStyle,
        ...(typeof window !== 'undefined' && window.innerWidth <= 600 && mobileStyle),
      }}
          onClick={getCurrentLocation}
        >
          {/* You can replace the content inside the <div> with your preferred SVG icon */}
          📍
        </div>

      {isLoaded ? (



    <GoogleMap
      mapContainerStyle={containerStyle}
      center={currentPosition|| undefined}
      zoom={15}
     // onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={handleMapClick}
    >
      {currentPosition && <Marker position={currentPosition} />}
      {/* {clickedPosition && <Marker position={clickedPosition} />} */}
    </GoogleMap>
  



        // <GoogleMap
        //   mapContainerStyle={containerStyle}
        //   center={currentPosition || { lat: 13.1343, lng: 77.7466 }}
        //   zoom={15}
        //   onLoad={setMap}
        // >
        //   {/* Child components, such as markers, info windows, etc. */}
        //   {map && currentPosition && (
        //     <Marker position={currentPosition} />
        //   )}
        // </GoogleMap>





      ) : <></>}
    </div>

    </LoadScript>
  );
  
};





export default LocationPage;






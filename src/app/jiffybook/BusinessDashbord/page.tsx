'use client'
import Image from 'next/image'
import Link from 'next/link';
import React,{ useCallback,useState,useEffect } from "react";
import { useRouter } from 'next/navigation'
import withAuth from '../../component/withAuth';
import {auth,db } from '../../../../firestore';
import { Chart as ChartJS, ArcElement, Tooltip, Legend , CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement,  Filler} from 'chart.js';
import { Pie,Doughnut } from 'react-chartjs-2';


  import { Bar,Line } from 'react-chartjs-2';



 

 import SessionPage from '../../component/sessionpage'
 ChartJS.register(  Title, BarElement, LinearScale,CategoryScale,ArcElement, Tooltip, Legend, PointElement, LineElement, Filler,);


const BusinessDashbord= ({ user }) => {
    const router = useRouter();
  
    const [receivedData, setReceivedData] = useState(null);
    const [BarchartData, setBarChartData] = useState<{
        labelsbar: string[];
        datasets: { label: string; data: number[]; backgroundColor: string }[];
      } | null>(null);
      const [piechartData, setpieChartData] = useState<{
        labels: string[];
        datasets: {
          label: string;
          data: number[];
          backgroundColor: string[];
          borderColor: string[];
          borderWidth: number;
        }[];
      } | null>(null);



      const [linechartData, setlineChartData] = useState<{
        labels: string[];
        datasets: {
          label: string;
          data: number[];
          backgroundColor: string[];
          borderColor: string[];
          fill:Boolean;
        }[];
      } | null>(null);





    const options = {
        indexAxis: 'y' as const,
         elements: {
    bar: {
      borderWidth: 1,
    },
  },
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
            labels: {
                font: {
                  size:14, // Set the default font size for legend labels
                },
              },
          },
          title: {
            display: true,
            text: 'Booking Bar Chart',
          },
          
        },
      };
      
      
      
     





 const optionslinechart = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'numCLV Line Chart',
          },
        },
      };



    //  const datalist = {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [
    //       {
    //         label: '# of Votes',
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           'rgba(255, 99, 132, 0.2)',
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(255, 206, 86, 0.2)',
    //           'rgba(75, 192, 192, 0.2)',
    //           'rgba(153, 102, 255, 0.2)',
    //           'rgba(255, 159, 64, 0.2)',
    //         ],
    //         borderColor: [
    //           'rgba(255, 99, 132, 1)',
    //           'rgba(54, 162, 235, 1)',
    //           'rgba(255, 206, 86, 1)',
    //           'rgba(75, 192, 192, 1)',
    //           'rgba(153, 102, 255, 1)',
    //           'rgba(255, 159, 64, 1)',
    //         ],
    //         borderWidth: 1,
    //       },
    //     ],
    //   };

      
    

    useEffect(() => {
       




            console.log("useruserdata:", user);
  
            const fetchData = async () => {


                const currentDate = new Date();

                // Get the current year and month
                const currentYear = currentDate.getFullYear();
                const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Ensure two digits
            
                // Set the current month in the format "YYYYMM"
               // setCurrentMonth(`${currentYear}${currentMonth}`);
            const finalmonthyear=`${currentYear}${currentMonth}`
                //console.log("currentMonth",finalmonthyear)
                // Calculate the previous month
                const previousDate = new Date(currentDate);
                previousDate.setMonth(currentDate.getMonth() - 1);
            
                // Get the year and month for the previous month
                const previousYear = previousDate.getFullYear();
                const previousMonth = (previousDate.getMonth() + 1).toString().padStart(2, '0'); // Ensure two digit



                const finalpreviousmonthyear=`${previousYear}${previousMonth}`

               





                const currentUrl = window.location.href;
                console.log('Current URL:', currentUrl);
            
                // Extracting data from the URL query parameters
                const urlSearchParams = new URLSearchParams(window.location.search);
                const dataParam = urlSearchParams.get('data');
                
                try {
                  if (dataParam) {
                    const decodedData = decodeURIComponent(dataParam);
                    const parsedData = JSON.parse(decodedData);
                   // console.log('Received data from query parameters:', parsedData.strBid);
                    setReceivedData(parsedData);
                    // Your logic to handle the received data

                if (user && user.uid !== '') {
                  try {
                    // Replace this with your logic to get parsedData

                  
                    // const parsedData = { strBid: parsedData.strBid };
                    console.log('called herer for checking ', parsedData?.strBid);
                   
                    const snapshotdata = await db
                      .collection('dbBusiness')
                      .doc(parsedData.strBid)
                      .collection('Bookings')
                      .get();
          
                    if (snapshotdata.size > 0) {
                        const labels: string[] = [];
                        const labelsbar: string[] = [];
                        const data1: number[] = [];
                        const data2: number[] = [];
                        const data3: number[] = [];
                        const data4: number[] = [];
                      snapshotdata.forEach((doc) => {
                        if (doc && doc.id) {

                            console.log("previousMonth",finalpreviousmonthyear,finalmonthyear)
                         
if(finalpreviousmonthyear ==  doc.id || finalmonthyear ==  doc.id)

{
    console.log("previousMonth",finalpreviousmonthyear,finalmonthyear,doc.id)
    labelsbar.push(doc.id as string);
    data1.push(doc.data()?.numUniqBooking as number);
    data2.push(doc.data()?.numUniqComplete as number);
    
}
else{

}

                           
                   labels.push(doc.id as string);
                            // Assuming data3 is another property you want to extract
                            data3.push(doc.data()?.numTotalComplete as number);
                            data4.push(doc.data()?.numCLV as number);
                          }
                      });
          

                      console.log('Received data from query parameters:', labelsbar,data1,data2);
                      setBarChartData({
                        labels: labelsbar,
                        datasets: [
                          {
                            label: 'numUniqBooking',
                            data: data1,
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            
                          },
                          {
                            label: 'numUniqComplete',
                            data: data2,
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            
                          },
                      
                        ],
                      });


                      setpieChartData({
                        labels,
                        datasets: [
                          {
                            label: 'numTotalComplete',
                            data: data3,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                              ],
                              borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                              ],
                              borderWidth: 1,
                          },
                         
                        ],
                      })
               
                      
                      setlineChartData({
                        labels,
                        datasets: [
                          {
                            fill: true,
                            label: 'numCLV',
                            data: data4,
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            borderColor: 'rgb(53, 162, 235)',
                          },
                         
                       
                        ],
                      })





                    } else {
                      // Handle case where there is no data
                      setBarChartData(null);
                      setpieChartData(null);
                    }
                  } catch (error) {
                    console.log('Error fetching data:', error);
                  }
                } else {
                  console.log('Session expired, logging out...');
                }



            }
        } catch (error) {
          console.error('Error decoding or parsing data:', error);
        }

              };
          
              fetchData();








        
    
        // Other logic related to YourComponent
















    }, [user]); // Empty dependency array means this effect runs once on mount
     

  
  return (

    <div>
     {user && user.uid !== '' ? (

  


<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color:'black' }}>
<h1>
  BusinessDashboard 
</h1>







{/* {piechartData ?
      <div  style={{
        width: '100%',
        maxWidth: '600px', // Set a maximum width for larger screens
        height: '100%',
        minHeight: '300px',
        minWidth: '300px',
        margin: '0 auto', // Center the container horizontally

        // Media query for smaller screens
        '@media (max-width: 600px)': {
          minHeight: '200px',
          minWidth: '200px',
        },
      }}>
 <Doughnut
 data={piechartData}
 
/>
</div>
:

     
null } */}

      {BarchartData ?
    
<div  style={{
  width: '100%',
  maxWidth: '600px', // Set a maximum width for larger screens
  height: '100%',
  minHeight: '300px',
  minWidth: '300px',
  margin: '0 auto', // Center the container horizontally

  // Media query for smaller screens
  '@media (max-width: 600px)': {
    minHeight: '200px',
    minWidth: '200px',
  },
}}>
<Bar options={options} data={BarchartData} />
</div>


    
    :
    
    null
    }    





{ linechartData  ?
   <div  style={{
    width: '100%',
    maxWidth: '600px', // Set a maximum width for larger screens
    height: '100%',
    minHeight: '300px',
    minWidth: '300px',
    margin: '0 auto', // Center the container horizontally
  
    // Media query for smaller screens
    '@media (max-width: 600px)': {
      minHeight: '200px',
      minWidth: '200px',
    },
  }}>
<Line options={optionslinechart} data={linechartData} />
</div>
   :
    
   null

}
</div>



      ) :( <div>
        <SessionPage/>
        </div>) 
     
      }


    </div>









  )



  }
export default withAuth(BusinessDashbord);
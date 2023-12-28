'use client'
import { FunctionComponent, useCallback ,useState,useEffect,useLayoutEffect} from "react";
import { useRouter } from 'next/navigation'
import "./style.css";
import withAuth from '../../component/withAuth';
import SessionPage from '../../component/sessionpage'
import {auth,db } from '../../../../firestore';
import { DocumentData } from 'firebase/firestore';
import { Chart as ChartJS, ArcElement, Tooltip, Legend , CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement,  Filler} from 'chart.js';
import { Pie,Doughnut } from 'react-chartjs-2';


  import { Bar,Line } from 'react-chartjs-2';
ChartJS.register(  Title, BarElement, LinearScale,CategoryScale,ArcElement, Tooltip, Legend, PointElement, LineElement, Filler,);
    const AdminDashboardSlotPerson= ({ user }) => {

        type ReceivedDataType = {
            strBname: string; // Add other properties as needed
            strBid:string;
            strBrole:string;
            strImage:string;
            // ...
          };

        
    const router = useRouter();

    const [receivedData, setReceivedData] = useState<ReceivedDataType | null>(null);;
    const [dbBusinessData, setdbBusinessData] = useState<DocumentData | null>(null);
    const [dbBusinessBookingData, setdbBusinessBookingData] = useState<DocumentData | null>(null);
    const [numBstatusData, setnumBstatusData] =useState<number | null>(null);
    const [numCompleteData, setnumCompleteData] =useState<number | null>(null);
    const [BarchartData, setBarChartData] = useState<{
        labels: string[];
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
        
        }[];
      } | null>(null);

      const [TwolineChartData, setTwolineChartData] = useState<{
        labels: string[];
        datasets: {
          label: string;
          data: number[];
          backgroundColor: string[];
          borderColor: string[];
       
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




     const optionsTwolinechart = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'numGuestsNew and numGuestsLeft Line Chart',
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
       




           // console.log("useruserdata:", user);
  
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

                const secondPreviousDate = new Date(previousDate);
                secondPreviousDate.setMonth(previousDate.getMonth() - 1);


                const secondPreviousYear = secondPreviousDate.getFullYear();
                const secondPreviousMonth = (secondPreviousDate.getMonth() + 1).toString().padStart(2, '0'); // Ensure two digits
             
                

                const finalpreviousmonthyear=`${previousYear}${previousMonth}`

                const finalSecondPreviousMonthYear = `${secondPreviousYear}${secondPreviousMonth}`;





                const currentUrl = window.location.href;
              //  console.log('Current URL:', currentUrl);
            
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
                
                    db.collection('dbBusiness')
                    .doc(parsedData.strBid).get()
                    .then(businessdata=>{

                      //  console.log("businessdata",businessdata)

if(businessdata.exists)
{

    const databusiness = businessdata.data();
    if (databusiness) {
        setdbBusinessData(databusiness as DocumentData );
    }
  
}

else{

}



                    }).catch((err) => {

                        console.log("err",err)

                    })


                    // const currentDatecheck = new Date();

                    // // Extract the current year and month
                    // const currentYearcrm = currentDatecheck.getFullYear();
                    // const currentMonthcrm= currentDatecheck.getMonth() + 1; // Months are zero-indexed, so add 1



                    const todaycurrentDate = new Date();

                    const todayyear = todaycurrentDate.getFullYear();
                    const todaymonth = (todaycurrentDate.getMonth() + 1).toString().padStart(2, '0'); // Add 1 because months are zero-indexed
                    const todayday = todaycurrentDate.getDate().toString().padStart(2, '0');
                    
                    const formattedDate = `${todayyear}${todaymonth}${todayday}`;
                  //  console.log("formattedDate",formattedDate);

                 
          


                    const snapshotcount =  db.collection('dbBdateslot')
                    .doc(parsedData.strBid)
                    .collection(formattedDate)
                    // .where('dtCreated', '>=', new Date(`${currentYearcrm}-${currentMonthcrm}-01`))
                    // .where('dtCreated', '<', new Date(`${currentYearcrm}-${currentMonthcrm + 1}-01`))
                    .get().then(snapshotdbBdateslot => {
                        let numBstatus = 0;
                        let numComplete = 0;

if(snapshotdbBdateslot.size>0)
{
    snapshotdbBdateslot.forEach((docdata) => {

      
        // Assuming 'amount' is the field you want to sum
        const FinalnumBstatus =  docdata.data()?.numBstatus || 0; // If 'amount' is not present, default to 0
        const FinalnumComplete =  docdata.data()?.numComplete || 0; // If 'amount' is not present, default to 0
        numBstatus += FinalnumBstatus;
        numComplete += FinalnumComplete;

    })

    

    setnumBstatusData(numBstatus  as number) 

    setnumCompleteData(numComplete  as number)
}




                      }).catch(error => {
                        console.error("Error fetching data:", error);
                      });

             

   













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
                        const data5: number[] = [];
                        const data6: number[] = [];
                      snapshotdata.forEach((doc) => {
                        if (doc && doc.id) {

                           // console.log("previousMonth",finalpreviousmonthyear,finalmonthyear)
                         
if(finalpreviousmonthyear ==  doc.id || finalmonthyear ==  doc.id || finalSecondPreviousMonthYear ==  doc.id ) 

{
   // console.log("previousMonth",finalSecondPreviousMonthYear,finalpreviousmonthyear,finalmonthyear,doc.id)



    if( finalmonthyear ==  doc.id )

    {
        setdbBusinessBookingData(doc.data() as DocumentData)
    }

    labelsbar.push(doc.id as string);
    data1.push(doc.data()?.numUniqBooking as number);
    data2.push(doc.data()?.numUniqComplete as number);
    data4.push(doc.data()?.numCLV as number);
    data5.push(doc.data()?.numGuestsNew as number);
    data6.push(doc.data()?.numGuestsLeft as number);
    labels.push(doc.id as string);
}
else{

}

                           
                 
                            // Assuming data3 is another property you want to extract
                            data3.push(doc.data()?.numTotalComplete as number);
                          
                          }
                      });
          

                     // console.log('Received data from query parameters:', labelsbar,data1,data2);
                      setBarChartData({
                        labels: labelsbar,
                        datasets: [
                          {
                            label: 'numUniqBooking',
                            data: data1,
                            backgroundColor: 'rgba(0,0,0)',
                            
                          },
                          {
                            label: 'numUniqComplete',
                            data: data2,
                            backgroundColor: 'rgba(0, 255, 0)',
                            
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
                           // fill: true,
                            label: 'numCLV',
                            data:data4,
                            backgroundColor:['rgba(255, 99, 132, 0.5)'],
                            borderColor: ['rgb(53, 162, 235)'],
                          },
                         
                       
                        ],
                      })


                      setTwolineChartData({
                        labels: labelsbar,
                        datasets: [
                            {
                            
                              label: 'numGuestsNew',
                              data: data5,
                              backgroundColor: ['rgba(0,255,0)'],
                              borderColor:['rgb(0, 255, 0)'],
                            },
                            {
                             
                                label: 'numGuestsLeft',
                                data: data6,
                                backgroundColor: ['rgba(255, 0,0)'],
                                borderColor: ['rgb(255, 0, 0)'],
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


    useLayoutEffect(() => {
        // Ensure that the necessary data is available before scrolling
        if (BarchartData && piechartData && linechartData && TwolineChartData) {
          // Scroll logic here
          window.scrollTo(0, 0);
        }
      }, [BarchartData, piechartData, linechartData, TwolineChartData]);

  const onFrameContainer1Click = useCallback(() => {
    
  }, []);

  return (
    <div>
    {user && user.uid !== '' ? (
    <div className="admin-dashboard-slot-person">
      <div className="header">
        <div className="header-child" />
        <img className="header-item" alt="" src="/image/ellipse-1@2x.png" />
        <div className="header-wrapper">
          <b className="menu">GALLERY ADMIN DASHBOARD</b>
        </div>
        <div className="menu-wrapper" onClick={onFrameContainer1Click}>
          <b className="menu">Exit</b>
        </div>
      </div>

{dbBusinessData?  

      <div className="gallery-overview">
        {dbBusinessData ?
        
        <img className="strblogo-icon" alt="" src={dbBusinessData.strLogoURL} />
        :
        null
    }
       
        <div className="keyword24bo">
          <b className="value-24bo">Gallery Overview</b>
        </div>
        {receivedData && (
        <div className="keyword14bb">
        <b className="menu">{receivedData.strBname}</b>
      </div>
        )
     
    }
        {dbBusinessData ?
         <div className="keyword10bb">
         <b className="menu">{dbBusinessData.address}</b>
       </div>
       :
       null
    }
       
        <div className="smalltextbuttonorange">
          <b className="menu">Click to open control panel</b>
        </div>
      </div>
:
null

}


      <div className="bookings-overview">
        <img className="shopping-cart-icon" alt="" src="/image/shoppingcart@2x.png" />
        <div className="keyword24bo1">
          <b className="value-24bo">Bookings Overview</b>
        </div>
        <div className="keyword14bb1">
          <b className="menu">Completed / Total</b>
        </div>

        { numBstatusData && numCompleteData 
       
       ?
        <div className="bookings-overview-child">
        <div style={{ width: `${(numCompleteData /numBstatusData ) * 100 || 0}%`, height: '100%', backgroundColor: 'green',borderRadius:'20px'}}></div>
</div>

:
null}

       { numBstatusData && numCompleteData 
       
       ?




       <div className="keyword14bo">
       <b className="value-24bo">Pending: {numBstatusData}-{numCompleteData}</b>
     </div>

    :
    null} 
       
        <div className="smalltextbuttonorange1">
          <b className="menu">Click to open detailed view</b>
        </div>
        <div className="bookings-overview-item" />
        <div className="keyword14bb1">
          <b className="menu">Monthly Data</b>
        </div>
        <div className="keyword10bb1">
          <b className="menu">3 months</b>

        </div>
        <div className="chart-area">
          <div className="chart-area-child" >

          {BarchartData ?
 

<div style={{
  width: '100%',
  maxWidth: '600px',
  height: '100%',
  minHeight: '300px',
  minWidth: '300px',
  margin: '0 auto',
  '@media (maxWidth: 600px)': {
    minHeight: '200px',
    minWidth: '200px',
  },
} as React.CSSProperties}>





    <Bar options={options} data={BarchartData} />
  
    </div>
    
        
        :
        
        null
        } 
</div>
        </div>
        <div className="smalltextbuttonorange1">
          <b className="menu">Click to open historical data</b>
        </div>
      </div>
      <div className="gallery-overview">
        <img className="shopping-cart-icon" alt="" src="/image/users@2x.png" />
        <div className="keyword24bo1">
          <b className="value-24bo">Guests Overview</b>
        </div>

        {dbBusinessData ?
     <div className="keyword24bb">
     <b className="menu">{dbBusinessData.numGuests}</b>
   </div>
   : null    
    }
       
        <img
          className="arrow-circle-up-icon"
          alt=""
          src="/image/arrowcircleup@2x.png"
        />

        {dbBusinessBookingData ?
         <div className="keyword14bo1">
         <b className="keyword-14bo1">New: +{dbBusinessBookingData.numGuestsNew} Left: -{dbBusinessBookingData.numGuestsLeft}</b>
       </div>

       : null
    
    }
       
        <div className="smalltextbuttonorange">
          <b className="menu">Click to open detailed view</b>
        </div>
        <div className="bookings-overview-item" />
        <div className="keyword14bb">
          <b className="menu">Monthly Data</b>
        </div>
        <div className="keyword10bb">
          <b className="menu">3 months</b>

         

        </div>
        <div className="chart-area">
          <div className="chart-area-child" >

          { TwolineChartData  ?
 <div style={{
    width: '100%',
    maxWidth: '600px',
    height: '100%',
    minHeight: '300px',
    minWidth: '300px',
    margin: '0 auto',
    '@media (maxWidth: 600px)': {
      minHeight: '200px',
      minWidth: '200px',
    },
  } as React.CSSProperties}>
<Line options={optionsTwolinechart} data={TwolineChartData} />
</div>
   :
    
   null

}
            </div>
        </div>
        <div className="smalltextbuttonorange">
          <b className="menu">Click to open historical data</b>
        </div>
      </div>
      <div className="revenue-overview">
        <img className="shopping-cart-icon" alt="" src="/image/moneybillalt@2x.png" />
        <div className="keyword24bo3">
          <b className="value-24bo">Revenue Overview</b>
        </div>

        {dbBusinessBookingData ?
        
        <div className="keyword14bb1">
        <b className="menu">{dbBusinessBookingData.numCLV}</b>
      </div>

      : null
    }
      
        <div className="smalltextbuttonorange1">
          <b className="menu">Click to open detailed view</b>
        </div>
        <div className="bookings-overview-item" />
        <div className="keyword14bb">
          <b className="menu">Monthly Data</b>
        </div>
        <div className="keyword12bb">
          <b className="menu">3 months</b>
        </div>
        <div className="chart-area">
          <div className="chart-area-child" >
          { linechartData  ?
  



<div style={{
  width: '100%',
  maxWidth: '600px',
  height: '100%',
  minHeight: '300px',
  minWidth: '300px',
  margin: '0 auto',
  '@media (maxWidth: 600px)': {
    minHeight: '200px',
    minWidth: '200px',
  },
} as React.CSSProperties}>




<Line options={optionslinechart} data={linechartData} />
</div>
   :
    
   null

}
            </div>
        </div>
        <div className="smalltextbuttonorange1">
          <b className="menu">Click to open historical data</b>
        </div>
      </div>
    </div>
         ) :( <div>
            <SessionPage/>
            </div>) 
         
          }
    
    
        </div>
  );
};

export default   withAuth(AdminDashboardSlotPerson); 

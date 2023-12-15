'use client'
import Image from 'next/image'
import Link from 'next/link';

import withAuth from '../../component/withAuth';

 import SessionPage from '../../component/sessionpage'
const homepage = ({ user }) => {

console.log("useruseruser",user)
  return (

    <div>
    {user ?

  


     <div   style={{
       
        fontSize: '18px',
      
       justifyContent:'center',
        color: 'black',
      
      }}>

      <h1>
    Profile screen is coming soon 
      </h1>
      </div>

      : 
      <div>
    <SessionPage/>
    </div>
    // <div   style={{
       
    //     fontSize: '18px',
    //    alignitem:'center',
    //    justifyContent:'center',
    //     color: 'black',
      
    //   }}>

    //   <h1>
    // Profile screen is coming soon 
    //   </h1>
    //   </div>




      }


    </div>









  )



  }
export default withAuth(homepage);
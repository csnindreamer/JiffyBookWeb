'use client'
import Image from 'next/image'
import Link from 'next/link';

import withAuth from '../../component/withAuth';

 import SessionPage from '../../component/sessionpage'
const homepage = ({ user }) => {


  return (

    <div>
    {user ?

  


     <div>

      <h1>
      Home screen 
      </h1>
      </div>

      : 
      <div>
    <SessionPage/>
    </div>





      }


    </div>









  )



  }
export default withAuth(homepage);
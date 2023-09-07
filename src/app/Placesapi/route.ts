// import { NextResponse } from 'next/server'
// import axios from 'axios';



//  export const dynamic = 'force-dynamic' 
// export const dynamicParams = true
// export const revalidate = 0
// export const fetchCache = 'force-no-store'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'

// export async function GET(request: Request ,response: Response) {
//   const { searchParams } = new URL(request.url)
//   //const id = searchParams.get('id')
// //console.log("searchParamssearchParams",searchParams,request.url)
// console.log("searchParamssearchParams",searchParams.get('query'))


// //   const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
// //     headers: {
// //       'Content-Type': 'application/json',
// //       'API-Key': process.env.DATA_API_KEY,
// //     },
// //   })
// //   const product = await res.json()
 
//  // return NextResponse.json({ "Hello world" })


//  try {
//     const searchText = searchParams.get('query');

//     const key= searchParams.get('key')
//     const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchText}&key=${key}`;
//     const response = await axios.get(apiUrl);
//    // console.log("searchParamssearchParams",response)
//     // response.setHeader('Access-Control-Allow-Origin', '*');
//     // response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
//     // response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

//    // response.status(200).send(response.data);

//    const responseData = {
//     message: 'Hello, Next.js!',
//     dataFromGooglePlaces: response.data, // Add additional data as needed
//   };


//   const jsonResponse = JSON.stringify(responseData);

//   return new Response(jsonResponse, {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//     },
//   });
    






//   } catch (error) {
//     console.error('Error proxying the request:', error);
//    // response.status(500).json({ error: 'An error occurred while processing the request' });


//    return new Response(JSON.stringify({ error: 'An error occurred while processing the request' }), {
//     status: 500,
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//     },
//   });


//   }






// //  return new Response('Hello, Next.js!', {
// //     status: 200,
// //     headers: {
// //       'Access-Control-Allow-Origin': '*',
// //       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
// //       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
// //     },
// //   })
// }



import axios from 'axios';



export async function GET(request, response) {

  console.log("searchParamssearchParams", request);
  //const { searchParams } = request.url.searchParams;
  //console.log("searchParamssearchParams", searchParams.get('query'));

  try {
   // const searchText = searchParams.get('query');
   // const key = searchParams.get('key');

    const searchText = "Devanahalli";
    const key = "AIzaSyCn_5rImQH7nJ_PaM58WmUNMxYriM9w6a8";
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchText}&key=${key}`;
    const axiosResponse = await axios.get(apiUrl);

    const responseData = {
      message: 'Hello, Next.js!',
      dataFromGooglePlaces: axiosResponse.data, // Add additional data as needed
    };

    const jsonResponse = JSON.stringify(responseData);

    return new Response(jsonResponse, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.error('Error proxying the request:', error);

    return new Response(JSON.stringify({ error: 'An error occurred while processing the request' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }
}

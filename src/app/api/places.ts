// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {


//   console.log("called  herereere")
//   try {
//   //  const { searchText, key } = req.query;
//   //  const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchText}&key=${key}`;
//   const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=Devanahalli&key=AIzaSyCn_5rImQH7nJ_PaM58WmUNMxYriM9w6a8`;

//     const response = await axios.get(apiUrl);

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// console.log("called tsting ",response.data)
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error('Error proxying the request:', error);
//     res.status(500).json({ error: 'An error occurred while processing the request' });
//   }
// }



// export async function GET(request: Request) {
// 	const origin = request.headers.get("origin");

// 	console.log("origin", origin);

// 	return new Response("Hello, Next.js!", {
// 		status: 200,
// 		headers: {
// 			"Access-Control-Allow-Origin": origin,
// 			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
// 			"Access-Control-Allow-Headers": "Content-Type, Authorization",
// 		},
// 	});
// 	// return NextResponse.json(message);
// }





import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { searchText, key } = req.query;
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchText}&key=${key}`;
    const response = await axios.get(apiUrl);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error proxying the request:', error);
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
}

export async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end('Method Not Allowed');
    return;
  }

  // Handle POST method logic here
}

export async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    res.status(405).end('Method Not Allowed');
    return;
  }

  // Handle PUT method logic here
}

export async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    res.status(405).end('Method Not Allowed');
    return;
  }

  // Handle DELETE method logic here
}

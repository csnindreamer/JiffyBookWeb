const express = require('express');
const next = require('next');
const axios = require('axios');
const cors = require('cors');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

// Enable CORS for all routes
server.use(cors({
  origin:'https://ee-jiffybook-preprod.web.app'}

));

// Additional CORS configuration for all routes
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.get('/api/search', async (req, res) => {


  try {
    console.log('server.js is being called');
    const { query, key } = req.query;
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${key}`;
    const response = await axios.get(apiUrl);

    console.log("called gerererer",response)
    res.json(response.data);
  } catch (error) {
    console.error('Error proxying the request:', error);
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
});



app.prepare().then(() => {
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`>Server running on port:${port}`);
  });

});

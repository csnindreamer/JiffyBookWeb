const withPWA = require('next-pwa')({
  dest: 'public',
  disable: false,
  register: true,
  sw: '/service-worker.js',
  skipWaiting: true,
});

const nextConfig = {
  trailingSlash: true,
  output: 'export',

  env: {
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    // Add more variables as needed
  },

 



};  

module.exports = withPWA(nextConfig);

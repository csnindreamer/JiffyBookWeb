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



 



};  

module.exports = withPWA(nextConfig);

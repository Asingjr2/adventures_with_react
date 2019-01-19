import axios from 'axios';

// Axios allows preconfiguring headers and axios params.
// Create customized instance of axios.
// Exporting actual variable.
// baseURL is key word that acts as base urls for the instance of axios client.
export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID < UNSPLASH ACCESS CODES >'
  }
})

import axios from 'axios';

// Axios allows preconfiguring headers and axios params.
// Create customized instance of axios.
// Exporting actual variable.
// baseURL is key word that acts as base urls for the instance of axios client.
export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 945fb7426637c4a80b137b49167ca0f50009fb7cb783b6047f3b233398bd0f27'
  }
})

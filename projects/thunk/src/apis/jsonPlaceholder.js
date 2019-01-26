import axios from 'axios';

export default axios.create({
  /** Will add posts or users to request in app. */
  baseURL: 'https://jsonplaceholder.typicode.com',
  params: {
  }
});

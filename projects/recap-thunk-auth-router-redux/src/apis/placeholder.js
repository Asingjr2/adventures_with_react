import axios from 'axios';

/**
 * Exporting configurable request maker to jsonplaceholder.com
 * to get random user and posts examples.
 * Additional routes will be added in actual async requests with thunk.
 */
export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

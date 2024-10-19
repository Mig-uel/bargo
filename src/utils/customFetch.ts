import axios from 'axios'

const baseURL = 'http://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
  baseURL,
})

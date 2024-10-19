import axios from 'axios'

const baseURL = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
  baseURL,
})

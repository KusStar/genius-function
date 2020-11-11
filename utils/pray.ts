import axios from 'axios'

const ACCESS_TOKEN = process.env.ACCESS_TOKEN

export const BASE_URL = 'https://api.genius.com'

export const HEADERS = {
  Authorization: `Bearer ${ACCESS_TOKEN}`
}

export const pray = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
})

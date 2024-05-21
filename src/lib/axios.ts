import { AppError } from '@/utils/app-error'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.1.2:3333',
})

api.interceptors.request.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message))
    }

    return Promise.reject('Erro no servidor. Tente novamente mais tarde.')
  }
)

// api.defaults.headers.common['Authorization'] =
//   `Bearer ${env.VITE_API_BEARER_TOKEN}`
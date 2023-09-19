import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

export const authAxios = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

export const publicAxios = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

authAxios.interceptors.request.use(
  async (config) => {
    const accessToken = (await AsyncStorage.getItem('accessToken')) || ''

    if (accessToken) {
      config.headers['X-Access-Token'] =
        'Bearer' + ' ' + accessToken.replace('"', '')
    }

    return config
  },
  // eslint-disable-next-line promise/prefer-await-to-callbacks
  (error) => {
    return Promise.reject(error)
  },
)

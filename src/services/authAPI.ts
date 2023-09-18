import type {
  HTTPResponse,
  LoginPasswordReq,
  TokenRes
} from '@/types'
import axiosClient from '.'
import { axiosInstance } from './axiosInstance'
import { AxiosPromise } from 'axios'

const authAPI = {
  login: (params: LoginPasswordReq) => {
    return axiosClient.post('/user_information_controller/login_by_password', {
      params,
    })
  },

  refreshToken: (refresh_token: string): AxiosPromise<HTTPResponse<TokenRes>> => {
    return axiosInstance.get(
      `/user_information_controller/refresh_token?refresh_token=${refresh_token}`
    )
  },
}

export { authAPI }


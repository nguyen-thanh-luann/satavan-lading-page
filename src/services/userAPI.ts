import type {
  AddressAdd,
  AddressDelete,
  DistrictId,
  HTTPResponse,
  LoginFormParams,
  ShippingAddressV2,
  StateId,
  UpdateUserParams,
} from '@/types'
import axiosClient from '.'
import { axiosInstance } from './axiosInstance'

const userAPI = {
  login: (data: LoginFormParams) => {
    return axiosClient.post('/login', { params: data })
  },

  logout: () => {
    return axiosClient.post('/logout', {})
  },

  refreshToken: () => {
    return axiosClient.post('/refresh-token')
  },

  getUserInfo: () => {
    return axiosClient.get('/user_information_controller/get_account_information')
  },

  getAddress: (params: StateId | DistrictId | {}) => {
    return axiosInstance.post('/api/v2.0/user/adress', {
      params,
    })
  },

  checkHasPassword: () => {
    return axiosClient.post(`/user_information_controller/check_has_password`, {})
  },

  getDetailUser: () => {
    return axiosClient.post('/api/v2.0/information_customers/get_info_customer', { params: {} })
  },

  addAddress: (address: AddressAdd) => {
    return axiosClient.post('/api/v2.0/user/adress_add', { params: address })
  },

  deleteAddress: (params: AddressDelete) => {
    return axiosClient.post('/api/v2.0/user/adress_delete', {
      params,
    })
  },

  getShippingAddressList: (): Promise<HTTPResponse<ShippingAddressV2[]>> => {
    return axiosClient.post('/api/v2.0/user/get_adress_by_partner', {})
  },

  updateUser: (props: UpdateUserParams) => {
    return axiosClient.post('/user_information_controller/update_account_information', {
      params: props,
    })
  },

  likeProduct: (product_id: number) => {
    return axiosClient.get(`/wishlist_controller/like?product_id=${product_id}`)
  },

  unLikeProduct: (product_id: number) => {
    return axiosClient.get(`/wishlist_controller/unlike?product_id=${product_id}`)
  },
}

export { userAPI }

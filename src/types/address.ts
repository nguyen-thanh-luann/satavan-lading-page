import { OptionType } from './common'
import { QueryList } from './http'

export interface GetProvinceParams extends QueryList {
  value_address_by_store?: boolean
}

export interface GetDistrictParams extends QueryList {
  value_address_by_store?: boolean
  province_id?: number
}

export interface GetWardParams extends QueryList {
  value_address_by_store?: boolean
  district_id: number
}

export interface Province {
  province_id: number
  province_name: string
}

export interface District {
  district_id: number
  district_name: string
}

export interface Ward {
  ward_id: number
  ward_name: string
}

export interface StateId {
  state_id: number
}

export interface DistrictId {
  district_id: number
}

export interface AddressId {
  id: number
  name: string
}

export interface WardAddress {
  id: number
  name: string
  district_id: number
  district_name: string
  state_id: number
  state_name: string
  country_id: number
  country_name: string
}

export interface Address {
  name: string
  phone: string
  street: string
  ward_id: number
  district_id: number
  state_id: number
  country_id?: number
}

export interface AddressAdd {
  adress_id?: number | false
  partner_id: number
  address_new: Address
}

export interface IShippingAddress {
  country_id: string
  country_name_id: number
  district_id: string
  district_name_id: number
  ward_id: string
  ward_name_id: number
  state_id: string
  state_name_id: number
}

export interface AddressDelete {
  adress_id: number
  partner_id: number
}

export interface ShippingAddress extends IShippingAddress {
  id: number
  full_adress: string
  name: string
  phone: string
  street: string
}

export interface ShippingAddressV2 {
  id: number
  street: string
  name: string
  phone: string
  ward_id: {
    id: number
    name: string
  }
  district_id: {
    id: number
    name: string
  }
  state_id: {
    id: number
    name: string
  }
  country_id?: {
    id: number
    name: string
  }
  full_adress: string
}

export interface AddAddressHook {
  address: AddressAdd
  addressForm?: ShippingAddressV2
  onSuccess?: (res: ShippingAddressV2) => void // when add address is successful => response just return new partner shipping id,
}

export interface AddressPickerI {
  state: OptionType<number>
  district: OptionType<number>
  ward: OptionType<number>
}

export interface Country {
  country_id: number
  country_name: string
}

export interface Province {
  province_id: number
  province_name: string
}

export interface District {
  district_id: number
  district_name: string
}

export interface Ward {
  ward_id: number
  ward_name: string
}

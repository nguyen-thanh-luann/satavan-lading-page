import { PayloadType, ShippingAddressV2 } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

interface CommonSlice {
  backdropVisible: boolean
  previewImageUrl: string | undefined
  previousRoute: string | undefined | null
  addressForm: ShippingAddressV2 | undefined
}

const initialState: CommonSlice = {
  backdropVisible: false,
  previewImageUrl: undefined,
  previousRoute: undefined,
  addressForm: undefined,
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setBackdropVisible: (state, { payload }: PayloadType<boolean>) => {
      state.backdropVisible = payload
    },

    setPreviewImageUrl: (state, { payload }: { payload: string | undefined }) => {
      state.previewImageUrl = payload
    },

    setPreviousRoute: (state, { payload }: { payload: string | undefined | null }) => {
      state.previousRoute = payload
    },

    setAddressForm: (state, { payload }: { payload: ShippingAddressV2 | undefined }) => {
      state.addressForm = payload
    },
  },
})

export const selectPreviewImageUrl = (state: RootState) => state.common.previewImageUrl
export const selectAddressForm = (state: RootState) => state.common.addressForm

export default commonSlice.reducer
export const { setBackdropVisible, setPreviewImageUrl, setPreviousRoute, setAddressForm } =
  commonSlice.actions

import { SWR_KEY } from '@/constants'
import { userAPI } from '@/services'
import {
  LoginFormParams,
  LoginRes,
  UseParams
} from '@/types'
import { useSWRConfig } from 'swr'
import { useAsync } from '../common/useAsync'

export const useAuth = () => {
  const { asyncHandler } = useAsync()
  const { mutate: swrConfigMutate } = useSWRConfig()

  const loginWithPassword = async (_params: UseParams<LoginFormParams, LoginRes>) => {
    const { onSuccess, params, onError } = _params
    asyncHandler({
      fetcher: userAPI.login(params),
      onSuccess: (res: LoginRes) => {
        onSuccess?.(res)
      },
      onError,
      config: {
        showSuccessMsg: false,
      },
    })
  }

  const logout = async (cb?: Function) => {
    try {
      const res: any = await userAPI.logout()
      if (res?.result?.code !== 200) return
      cb?.()
      swrConfigMutate(SWR_KEY.get_user_information)
    } catch (error) {
      console.log(error)
    }
  }


  return {
    loginWithPassword,
    logout
  }
}

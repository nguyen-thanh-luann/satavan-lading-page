import { LoginForm } from '@/components'
import { useAuth, useUser } from '@/hooks'
import { RootState } from '@/store'
import { Main } from '@/templates'
import { LoginFormParams } from '@/types'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Login = () => {
  const { push } = useRouter()
  const previousRoute = useSelector((state: RootState) => state.common.previousRoute)
  const {mutateAccountData} = useUser({})
  const { loginWithPassword } = useAuth()

  const handleLogin = (data: LoginFormParams) => {
    loginWithPassword({
      params: data,
      onSuccess: () => {
        mutateAccountData()
        if (previousRoute?.includes('/admin')) {
          push('/admin')
        } else {
          push('/apps')
        }
      },
    })
  }

  return (
    <Main title={'Đăng nhập'} description="">
      <div className="container min-h-[100vh] w-[90%] md:w-[50%] mx-auto flex items-center justify-center">
        <div className="bg-white w-full p-24 rounded-lg border border-gray-200 box-shadow-sm">
          <p className="text-3xl text-center font-bold mb-12 text-primary-gradient">
            Welcome to Satavan
          </p>
          <LoginForm onSubmit={(data) => handleLogin(data)} />
        </div>
      </div>
    </Main>
  )
}

export default Login

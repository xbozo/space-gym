import { useAuth } from '@/hooks/use-auth'
import { Div } from '@expo/html-elements'
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export const Router = () => {
  const { userData } = useAuth()

  return (
    <Div className='flex-1 bg-neutral-900'>
      <NavigationContainer>
        {userData !== null ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Div>
  )
}

import { AppHeaderContainer } from '@/components/app-header-container'
import { LucideLogOut } from '@/components/icons'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/hooks/use-auth'
import { Div, Span, Strong } from '@expo/html-elements'
import { TouchableOpacity } from 'react-native'

import fallbackAvatarImg from '@/assets/userPhotoDefault.png'
import { api } from '@/lib/axios'

export const HomeHeader = () => {
  const { userData, signOut, isLoadingUserStorageData } = useAuth()

  const userAvatar = `${api.defaults.baseURL}/avatar/${userData?.avatar}`

  return (
    <AppHeaderContainer>
      <Div className='flex flex-row w-full justify-between items-center'>
        <Div className='flex flex-row gap-4 items-center'>
          <Avatar
            className='size-16'
            alt="Zach Nugent's Avatar"
          >
            <AvatarImage source={userAvatar ? { uri: userAvatar } : fallbackAvatarImg} />
          </Avatar>

          <Div className='flex'>
            <Span className='text-neutral-100'>Olá,</Span>
            <Strong className='text-neutral-100 '>{userData?.name}</Strong>
          </Div>
        </Div>

        <TouchableOpacity
          onPress={signOut}
          disabled={isLoadingUserStorageData}
        >
          <LucideLogOut
            accessibilityLabel='Sair'
            className='size-5 text-neutral-200'
          />
        </TouchableOpacity>
      </Div>
    </AppHeaderContainer>
  )
}

import type { User } from '@/@types/user'
import { getUserOnStorage } from '@/local-storage/user-storage'
import { createContext, useEffect, useState, type ReactNode } from 'react'

type AuthContextType = {
  userData: User | null
  setUserData: (user: User) => void
  isLoadingUserStorageData: boolean
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<User | null>(null)
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true)

  const loadExistingUserData = async () => {
    try {
      const userDataOnStorage = await getUserOnStorage()

      if (userDataOnStorage) {
        setUserData(userDataOnStorage)
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }

  useEffect(() => {
    loadExistingUserData()
  }, [loadExistingUserData])

  const contextValue = {
    userData,
    setUserData,
    isLoadingUserStorageData,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

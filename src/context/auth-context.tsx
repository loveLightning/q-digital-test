import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface AuthProps {
  accessToken: string
  authenticated: boolean
}

interface AuthContext {
  authState: AuthProps
  getAccessToken: () => string | undefined
  setAuthState: Dispatch<SetStateAction<AuthProps>>
}

const AuthContext = createContext<AuthContext>({
  getAccessToken: () => undefined,
  authState: {
    accessToken: '',
    authenticated: false,
  },
  setAuthState: () => undefined,
})

const AuthProvider = ({ children }: Props) => {
  const [authState, setAuthState] = useState<AuthProps>({
    accessToken: '',
    authenticated: false,
  })

  const getAccessToken = () => {
    return authState.accessToken
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        getAccessToken,
        setAuthState,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }

import React, { useCallback, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AuthContext } from 'src/context'

import { Navigators, Stacks } from './routes'
import { AuthStack } from './stacks/auth-stack'
import { TabBar } from './tabbar'

const Stack = createNativeStackNavigator()

export const RootNavigation = () => {
  const { setAuthState, authState } = useContext(AuthContext)

  const loadJWT = useCallback(async () => {
    const accessToken = (await AsyncStorage.getItem('accessToken')) || ''

    if (accessToken) {
      setAuthState({
        accessToken,
        authenticated: !!accessToken,
      })
    } else {
      setAuthState({
        accessToken: '',
        authenticated: false,
      })
    }
  }, [setAuthState])

  useEffect(() => {
    loadJWT()
  }, [loadJWT])

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authState.accessToken && authState.authenticated ? (
        <>
          <Stack.Screen name={Navigators.Main} component={TabBar} />
        </>
      ) : (
        <>
          <Stack.Screen name={Stacks.Authorization} component={AuthStack} />
        </>
      )}
    </Stack.Navigator>
  )
}

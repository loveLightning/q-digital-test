import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginScreen, RegisterScreen } from 'src/screens'

import { Screens } from '../routes'

const Auth = createNativeStackNavigator()

export const AuthStack = () => {
  return (
    <Auth.Navigator initialRouteName={Screens.Registration}>
      <Auth.Screen
        name={Screens.Registration}
        options={{ headerShown: false }}
        component={RegisterScreen}
      />
      <Auth.Screen
        name={Screens.Login}
        options={{ headerShown: false }}
        component={LoginScreen}
      />
    </Auth.Navigator>
  )
}

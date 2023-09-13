import React from 'react'
import { StatusBar, StatusBarStyle } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

import { AuthProvider } from 'src/context'
import { RootNavigation } from 'src/navigation'
import { isIOS } from 'src/utils'

const statusBarStyle: StatusBarStyle = isIOS ? 'dark-content' : 'default'

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AuthProvider>
          <StatusBar barStyle={statusBarStyle} />
          <RootNavigation />
        </AuthProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App

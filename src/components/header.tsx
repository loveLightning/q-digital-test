import React from 'react'
import { SafeAreaView, View } from 'react-native'

interface HeaderProps {
  title?: string
  children?: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#002538' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 12,
          height: 60,
          borderBottomWidth: 0.5,
        }}>
        {children}
      </View>
    </SafeAreaView>
  )
}

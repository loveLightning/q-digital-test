import React from 'react'
import { Text, View } from 'react-native'

import { WarningIcon } from 'src/icons'

interface Props {
  title?: string
  children?: React.ReactNode
}

export const Warning = ({ title, children }: Props) => {
  return (
    <View className="p-[10px] bg-[#C92100] w-[280px] flex-row items-center">
      <WarningIcon />
      <Text className="text-white ml-[6px]">{title}</Text>
      {children}
    </View>
  )
}

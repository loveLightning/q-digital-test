import React from 'react'
import {
  StyleProp,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'

import { Spinner } from 'src/components'

interface Props extends TouchableOpacityProps {
  title: string
  isLoading?: boolean
  disabled?: boolean
  style?: StyleProp<ViewStyle>
}

export const Button = ({ title, isLoading, disabled, ...rest }: Props) => {
  return (
    <TouchableOpacity
      style={{ opacity: disabled ? 0.5 : 1 }}
      className="bg-[#0079B8] rounded-[3px] pt-[10px] pb-[10px] disabled:opacity-50"
      {...rest}>
      {isLoading ? (
        <Spinner />
      ) : (
        <Text className="text-white uppercase text-center">{title}</Text>
      )}
    </TouchableOpacity>
  )
}

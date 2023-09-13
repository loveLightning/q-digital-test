import React, { ReactNode } from 'react'
import { KeyboardAvoidingView, TextInput, TextInputProps } from 'react-native'

type Props = {
  componentsLeft?: ReactNode
  componentsRight?: ReactNode
} & TextInputProps

export const Input = ({ componentsRight, componentsLeft, ...props }: Props) => {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        position: 'relative',
      }}>
      {componentsLeft}
      <TextInput
        style={{
          flex: 1,
          backgroundColor: '#fff',
          color: 'black',
        }}
        underlineColorAndroid="transparent"
        {...props}
      />
      {componentsRight}
    </KeyboardAvoidingView>
  )
}

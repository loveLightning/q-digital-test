import React, { useRef } from 'react'
import { Pressable, TextInput, TextInputProps } from 'react-native'

type Props = {
  isVisibleIcon?: boolean
} & TextInputProps

export const FormInput = ({ ...props }: Props) => {
  const ref = useRef<TextInput>(null)
  const handleFocus = () => ref.current?.focus()

  return (
    <Pressable className="border-b-2 border-[#9A9A9A] " onPress={handleFocus}>
      <TextInput {...props} ref={ref} />
    </Pressable>
  )
}

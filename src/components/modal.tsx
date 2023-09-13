import React from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'

interface Props {
  children: React.ReactNode
  isVisible: boolean
}

export const ReusableModal = ({ children, isVisible }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <Modal
        style={{ flexDirection: 'row', alignItems: 'center' }}
        isVisible={isVisible}>
        <View style={{ flex: 1, padding: 25 }}>{children}</View>
      </Modal>
    </View>
  )
}

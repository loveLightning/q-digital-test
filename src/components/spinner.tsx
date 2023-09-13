import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

export const Spinner = () => (
  <View style={styles.container}>
    <ActivityIndicator size="small" color="#007aff" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

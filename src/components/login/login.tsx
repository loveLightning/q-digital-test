import React, { useContext, useState } from 'react'
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import { styled } from 'nativewind'

import { publicAxios } from 'src/axios'
import { Button, FormInput, Warning } from 'src/components'
import { AuthContext } from 'src/context'
import { Screens, useNavigation } from 'src/navigation'
import { loginSchema } from 'src/scheme'
import { LoginTypes } from 'src/types'

interface Props {
  email: string
  password: string
}

const initialValues: Props = {
  email: '',
  password: '',
}

const StyledError = styled(Text, 'text-white ml-[6px]')
const StyledField = styled(View, 'w-[278px] mb-[18px]')

export const Login = () => {
  const { navigate } = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { setAuthState } = useContext(AuthContext)

  const submitForm = async (values: Props) => {
    setIsLoading(true)

    try {
      const { data } = await publicAxios.post<LoginTypes>(
        'https://internsapi.public.osora.ru/api/auth/login',
        values,
      )

      if (data.status) {
        const dataToken = data.data
        const acessToken = JSON.stringify(dataToken.access_token)

        await AsyncStorage.setItem('accessToken', acessToken)

        setAuthState({
          accessToken: dataToken.access_token,
          authenticated: true,
        })
        setError('')
      }
    } catch {
      setError("Password or email isn't right")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView className="flex-1">
      {error ? (
        <View className="items-center mt-[30px]">
          <Warning>
            <StyledError>{error}</StyledError>
          </Warning>
        </View>
      ) : null}

      <ScrollView>
        <KeyboardAvoidingView>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            validateOnChange
            validateOnBlur
            onSubmit={(values) => {
              submitForm(values)
            }}>
            {({
              handleChange,
              handleBlur,
              submitForm,
              isValid,
              values,
              dirty,
            }) => (
              <View className="mt-[120px] justify-center items-center mb-[60px]">
                <Text className="text-black text-[36px] mb-[46px]">Login</Text>

                <StyledField>
                  <FormInput
                    placeholder="Your email"
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                    value={values.email}
                  />
                </StyledField>
                <StyledField>
                  <FormInput
                    textContentType="password"
                    placeholder="Your password"
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                    value={values.password}
                  />
                </StyledField>

                <View className="w-[280px] mt-[60px]">
                  <Button
                    isLoading={isLoading}
                    disabled={!isValid || !dirty}
                    title="Log In"
                    onPress={submitForm}
                  />
                  <Button
                    style={{ marginTop: 22, backgroundColor: '#004366' }}
                    title="Sign up"
                    onPress={() => navigate(Screens.Registration)}
                  />
                </View>
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

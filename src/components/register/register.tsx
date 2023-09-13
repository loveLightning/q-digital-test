import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native'
import { AxiosError } from 'axios'
import { Formik } from 'formik'
import { styled } from 'nativewind'

import { publicAxios } from 'src/axios'
import { Button, FormInput, Warning } from 'src/components'
import { Screens, useNavigation } from 'src/navigation'
import { registerSchema } from 'src/scheme'
import { RegisterTypes } from 'src/types'

interface Props {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const initialValues: Props = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
}

const StyledError = styled(Text, 'text-white ml-[6px]')
const StyledField = styled(View, 'w-[278px] mb-[18px]')

export const Register = () => {
  const { navigate } = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const submitForm = async (values: Props) => {
    setIsLoading(true)

    try {
      const response = await publicAxios.post<RegisterTypes>(
        'https://internsapi.public.osora.ru/api/auth/signup',
        values,
      )

      if (response.data.status) {
        navigate(Screens.Login)
        setError('')
      }
    } catch (err) {
      const errorAxios = err as AxiosError
      setError(errorAxios.message)
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
            validationSchema={registerSchema}
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
                <Text className="text-black text-[36px] mb-[46px]">
                  Registration
                </Text>

                <StyledField>
                  <FormInput
                    placeholder="Your name"
                    onBlur={handleBlur('name')}
                    onChangeText={handleChange('name')}
                    value={values.name}
                  />
                </StyledField>
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
                <StyledField>
                  <FormInput
                    textContentType="password"
                    placeholder="Confirm password"
                    onBlur={handleBlur('password_confirmation')}
                    onChangeText={handleChange('password_confirmation')}
                    value={values.password_confirmation}
                  />
                </StyledField>
                <View className="w-[280px] mt-[60px]">
                  <Button
                    isLoading={isLoading}
                    disabled={!isValid || !dirty}
                    title="Submit"
                    onPress={submitForm}
                  />
                  <Button
                    style={{ marginTop: 22, backgroundColor: '#004366' }}
                    title="Login"
                    onPress={() => navigate(Screens.Login)}
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

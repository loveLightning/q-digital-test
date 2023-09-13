import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { authAxios } from 'src/axios'
import { Button, ReusableModal } from 'src/components'
import { CloseIcon } from 'src/icons'
import { Screens, Stacks, useNavigation } from 'src/navigation'
import { MyBookTypes } from 'src/types'

interface Props {
  item: MyBookTypes
  id: number
  getMyBooks: () => void
  navigateRoute: Stacks
}

export const MyBookCard = ({ item, id, getMyBooks, navigateRoute }: Props) => {
  const { navigate } = useNavigation()

  const [isModal, setIsModal] = useState({
    isFirstModal: false,
    isSecondModal: false,
  })

  const [isLoading, setIsLoading] = useState({
    isFirstLoading: false,
    isSecondLoading: false,
  })
  const [isError, setIsError] = useState({
    isFirstError: false,
    isSecondError: false,
  })

  const addBookToFavorite = async () => {
    try {
      setIsLoading((prev) => {
        return {
          ...prev,
          isFirstLoading: true,
        }
      })
      const isExists = item.favorite ? 0 : 1

      const response = await authAxios.post(
        `https://internsapi.public.osora.ru/api/book/update/${item.id}?favorite=${isExists}`,
      )

      if (response.data.status) {
        setIsModal((prev) => {
          return {
            ...prev,
            isFirstModal: false,
          }
        })
        getMyBooks()
      }
    } catch (error) {
      setIsError((prev) => {
        return {
          ...prev,
          isFirstError: true,
        }
      })
    } finally {
      setIsLoading((prev) => {
        return {
          ...prev,
          isFirstLoading: false,
        }
      })
    }
  }

  const deleteBookFromLibrary = async () => {
    try {
      setIsLoading((prev) => {
        return {
          ...prev,
          isSecondLoading: true,
        }
      })

      const response = await authAxios.get(
        `https://internsapi.public.osora.ru/api/book/destroy/${item.id}`,
      )

      if (response.data.status) {
        getMyBooks()
        setIsModal((prev) => {
          return {
            ...prev,
            isSecondModal: false,
          }
        })
      }
    } catch (error) {
      setIsError((prev) => {
        return {
          ...prev,
          isSecondError: true,
        }
      })
    } finally {
      setIsLoading((prev) => {
        return {
          ...prev,
          isSecondLoading: false,
        }
      })
    }
  }

  return (
    <TouchableOpacity className="border-[#CCCCCC] border-[1px] mb-[1px] flex-row justify-between w-full pr-[12px] relative items-center">
      <View
        style={{ backgroundColor: item.favorite ? '#62A420' : '#EEEEEE' }}
        className="h-full w-[6px] items-center"></View>

      <Text className="text-[#565656] text-[14px] font-normal w-20 pl-[12px]">
        {id + 1}.
      </Text>
      <Text
        numberOfLines={1}
        className="text-[#565656] text-[14px] font-normal w-40">
        {item.title}
      </Text>
      <View className="w-40 ml-auto items-end flex-row justify-end pt-[18px] pb-[18px]">
        <Button
          onPress={() =>
            setIsModal((prev) => {
              return {
                ...prev,
                isFirstModal: true,
              }
            })
          }
          title="F"
          style={{
            backgroundColor: '#62A420',
            height: 24,
            width: 24,
            paddingBottom: 4,
            paddingTop: 2,
            marginRight: 3,
          }}></Button>
        <Button
          onPress={() =>
            setIsModal((prev) => {
              return {
                ...prev,
                isSecondModal: true,
              }
            })
          }
          title="D"
          style={{
            backgroundColor: '#E62700',
            height: 24,
            width: 24,
            paddingBottom: 4,
            marginRight: 3,
            paddingTop: 2,
          }}></Button>
        <Button
          onPress={() =>
            navigate(navigateRoute, {
              screen: Screens.BookDesc,
              params: {
                title: item.title,
                authors: item.authors,
                desc: item.description,
              },
            })
          }
          title="I"
          style={{
            backgroundColor: '#0079B8',
            height: 24,
            width: 24,
            paddingBottom: 4,
            paddingTop: 2,
          }}></Button>
      </View>

      <ReusableModal isVisible={isModal.isFirstModal}>
        <View className="bg-white p-[25px] relative rounded-[3px]">
          <Text className="text-[24px] text-black font-light mr-[20px]">
            Add to favorites/remove
          </Text>
          <TouchableOpacity
            onPress={() =>
              setIsModal((prev) => {
                return {
                  ...prev,
                  isFirstModal: false,
                }
              })
            }
            className="absolute top-[30px] right-[30px]">
            <CloseIcon />
          </TouchableOpacity>
          <Text className="text-[14] font-normal text-[#565656] mt-[28px]">
            Are you sure you want to add this book?
          </Text>
          {isError.isFirstError && (
            <Text className="text-red-600">An error has occurred</Text>
          )}
          <View className="flex-row mt-[30px] justify-end">
            <Button
              isLoading={isLoading.isFirstLoading}
              onPress={addBookToFavorite}
              style={{
                height: 24,
                width: 72,
                padding: 0,
                backgroundColor: '#0079B8',
                paddingBottom: 4,
                paddingTop: 2,
                marginRight: 24,
              }}
              title="Yes"
            />
            <Button
              onPress={() =>
                setIsModal((prev) => {
                  return {
                    ...prev,
                    isFirstModal: false,
                  }
                })
              }
              style={{
                height: 24,
                width: 72,
                padding: 0,
                backgroundColor: '#E62700',
                paddingBottom: 4,
                paddingTop: 2,
              }}
              title="No"
            />
          </View>
        </View>
      </ReusableModal>

      <ReusableModal isVisible={isModal.isSecondModal}>
        <View className="bg-white p-[25px] relative rounded-[3px]">
          <Text className="text-[24px] text-black font-light">Delete book</Text>
          <TouchableOpacity
            onPress={() =>
              setIsModal((prev) => {
                return {
                  ...prev,
                  isSecondModal: false,
                }
              })
            }
            className="absolute top-[30px] right-[30px]">
            <CloseIcon />
          </TouchableOpacity>
          <Text className="text-[14] font-normal text-[#565656] mt-[28px]">
            Are you sure you want to delete this book?
          </Text>

          {isError.isSecondError && (
            <Text className="text-red-600">An error has occurred</Text>
          )}

          <View className="flex-row mt-[30px] justify-end">
            <Button
              isLoading={isLoading.isSecondLoading}
              onPress={deleteBookFromLibrary}
              style={{
                height: 24,
                width: 72,
                padding: 0,
                backgroundColor: '#0079B8',
                paddingBottom: 4,
                paddingTop: 2,
                marginRight: 24,
              }}
              title="Yes"
            />
            <Button
              onPress={() =>
                setIsModal((prev) => {
                  return {
                    ...prev,
                    isSecondModal: false,
                  }
                })
              }
              style={{
                height: 24,
                width: 72,
                padding: 0,
                backgroundColor: '#E62700',
                paddingBottom: 4,
                paddingTop: 2,
              }}
              title="No"
            />
          </View>
        </View>
      </ReusableModal>
    </TouchableOpacity>
  )
}

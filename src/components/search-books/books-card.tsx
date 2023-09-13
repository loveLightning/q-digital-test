import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { authAxios } from 'src/axios'
import { Button, ReusableModal } from 'src/components'
import { CloseIcon } from 'src/icons'
import { ItemBooks, MyBooksTypes } from 'src/types'

interface Props {
  item: ItemBooks
  id: number
}

export const BooksCard = ({ item, id }: Props) => {
  const [isModal, setIsModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const addBookToLibrary = async () => {
    const values = {
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors[0],
      description: item.volumeInfo.description,
      favorite: 1,
      uid: item.id,
    }

    setIsLoading(true)

    try {
      const response = await authAxios.post<MyBooksTypes>(
        'https://internsapi.public.osora.ru/api/book/add',
        values,
      )

      if (response.data.status) {
        setIsModal(false)
      }
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <TouchableOpacity className="border-[#CCCCCC] border-[1px] mb-[1px] flex-row justify-between w-full pr-[12px] relative items-center">
      <View className="h-full w-[6px] items-center bg-[#eeeeee]"></View>

      <Text className="text-[#565656] text-[14px] font-normal w-20 pl-[12px]">
        {id + 1}.
      </Text>
      <Text
        numberOfLines={1}
        className="text-[#565656] text-[14px] font-normal w-40">
        {item.volumeInfo.title}
      </Text>
      <View className="w-40 ml-auto items-end pt-[18px] pb-[18px]">
        <Button
          onPress={() => setIsModal(true)}
          title="Add"
          style={{
            backgroundColor: '#62A420',
            height: 24,
            width: 74,
            paddingBottom: 4,
            paddingTop: 2,
          }}></Button>
      </View>

      <ReusableModal isVisible={isModal}>
        <View className="bg-white p-[25px] relative rounded-[3px]">
          <Text className="text-[24px] text-black font-light">Add book</Text>
          <TouchableOpacity
            onPress={() => setIsModal(false)}
            className="absolute top-[30px] right-[30px]">
            <CloseIcon />
          </TouchableOpacity>
          <Text className="text-[14] font-normal text-[#565656] mt-[28px]">
            Are you sure you want to add this book?
          </Text>
          {isError && (
            <Text className="text-red-600">
              This book alredy exists in your library
            </Text>
          )}
          <View className="flex-row mt-[30px] justify-end">
            <Button
              isLoading={isLoading}
              onPress={addBookToLibrary}
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
              onPress={() => setIsModal(false)}
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

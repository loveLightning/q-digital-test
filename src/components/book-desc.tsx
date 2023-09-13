import { SafeAreaView, ScrollView, Text, View } from 'react-native'

interface Props {
  title: string
  desc: string
  authors: string[] | string
}

export const BookDesc = ({ title, desc, authors }: Props) => {
  return (
    <SafeAreaView className="flex-1 ml-[24px] mr-[24px]">
      <Text className="font-normal text-[24px] text-black mt-[25px]">
        {title}
      </Text>
      <View className="bg-[#E1F1F6] w-[120px] border-[#89CBDF] border-[1px] rounded-[11px] pl-[10px] pr-[10px] pt-[5px] mt-[5px]">
        <Text className="font-normal text-[11px] text-[#004A70] text-center mb-[8px] bt-[8px]">
          {authors}
        </Text>
      </View>

      <ScrollView className="mt-[8px]">
        <Text className="font-normal text-[14px] text-[#565656]">{desc}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

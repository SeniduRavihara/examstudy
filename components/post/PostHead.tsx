import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants';

interface PostHeadProps {
  title: string;
  creator: string;
  avatar: string;
}

const PostHead = ({ title, creator, avatar }: PostHeadProps) => {
  return (
    <View className="flex flex-row gap-3 items-start w-full">
      <View className="flex justify-center items-center flex-row flex-1">
        <View
          style={{
            height: 46,
            width: 46,
          }}
          className="w-[46px] h-[46px] rounded-lg border flex justify-center items-center p-0.5"
        >
          <Image
            source={{ uri: avatar }}
            className="w-full h-full rounded-lg"
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>

        <View className="flex justify-center flex-1 ml-3 gap-y-1">
          <Text className="font-psemibold text-sm text-white" numberOfLines={1}>
            {title}
          </Text>
          <Text
            className="text-xs text-gray-100 font-pregular"
            numberOfLines={1}
          >
            {creator}
          </Text>
        </View>
      </View>

      <View className="pt-2">
        <Image
          source={icons.menu}
          className="w-5 h-5"
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            cursor: "pointer",
          }}
        />
      </View>
    </View>
  );
};

export default PostHead
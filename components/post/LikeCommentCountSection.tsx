import { Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";

const LikeCommentCountSection = () => {
  return (
    <View className="flex flex-row items-center w-full justify-between bg-postfoground p-3 mt-3 rounded-lg">
      {/* Likes Section */}
      <View className="flex flex-row items-center gap-2">
        <View className="relative flex flex-row">
          {/* Thumbs Up */}
          <View className="bg-primary rounded-full w-6 h-6 items-center justify-center border border-white">
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <Path d="M7 10v12" />
              <Path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
            </Svg>
          </View>

          {/* Heart */}
          <View className="bg-primary rounded-full w-6 h-6 items-center justify-center -ml-2 border border-white">
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <Path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </Svg>
          </View>
        </View>

        {/* Like Count */}
        <Text className="text-white font-semibold">5,200</Text>
      </View>

      {/* Comments Section */}
      <Text className="text-white font-semibold">2,200 comments</Text>
    </View>
  );
};

export default LikeCommentCountSection;

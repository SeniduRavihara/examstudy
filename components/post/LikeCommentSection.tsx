import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Path, Polyline, Svg } from "react-native-svg";

const LikeCommentSection = () => {
  return (
    <View className="w-full flex flex-row items-center justify-between px-5 py-3 rounded-lg ">
      {/* Like Button */}
      <TouchableOpacity className="p-2 text-white">
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <Path d="M7 10v12" />
          <Path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
        </Svg>
      </TouchableOpacity>

      {/* Comment Button */}
      <TouchableOpacity className="p-2">
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </Svg>
      </TouchableOpacity>

      {/* Share Button */}
      <TouchableOpacity className="p-2">
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Polyline points="15 17 20 12 15 7" />
          <Path d="M4 18v-2a4 4 0 0 1 4-4h12" />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

export default LikeCommentSection;

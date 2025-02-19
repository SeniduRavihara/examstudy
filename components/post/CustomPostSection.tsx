import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomPostSection = () => {
  const handleEnroll = () => {
    console.log("Enroll button clicked!");
    // Add enrollment logic here
  };

  return (
    <View className="flex flex-row mt-5 items-center justify-between w-full p-4 bg-primary rounded-lg shadow-md">
      {/* Left Section - Text */}
      <Text className="font-semibold text-white">
        Join Our Exclusive Course!
      </Text>

      {/* Right Section - Enroll Button */}
      <TouchableOpacity
        onPress={handleEnroll}
        className="py-2 px-6 rounded-lg"
        style={{ backgroundColor: "#FF6A3D" }}
        activeOpacity={0.8}
      >
        <Text className="text-white font-semibold text-base">Enroll</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomPostSection;

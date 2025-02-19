import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import CustomPostSection from "./post/CustomPostSection";
import LikeCommentCountSection from "./post/LikeCommentCountSection";
import LikeCommentSection from "./post/LikeCommentSection";
import PostHead from "./post/PostHead";

interface PostProps {
  title: string;
  creator: string;
  avatar: string;
  video?: string;
}

const Post = ({ title, creator, avatar, video }: PostProps) => {
  return (
    <View className="flex flex-col items-center px-4 mb-14 bg-postfoground  p-5 m-3 rounded-xl">
      <PostHead title={title} creator={creator} avatar={avatar} />

      <View className="flex justify-center items-center w-full">
        <Image
          source={require("../assets/temp/temp_post.png")}
          className=" rounded-xl mt-3 w-full h-60"
          style={{
            width: "100%",
            height: 200,
            resizeMode: "stretch",
          }}
        />
      </View>

      <CustomPostSection />

      <LikeCommentCountSection />

      <LikeCommentSection />
    </View>
  );
};

export default Post;

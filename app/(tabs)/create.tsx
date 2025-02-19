import { images } from "@/constants";
import { post_image } from "@/constants/temp";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
const Create = () => {
  return (
    <View>
      <Text>Create senidu</Text>

      {/* <Image
        source={images.logo}
        className="w-[180px] h-[84px]"
        resizeMode="contain"
      />

      <Image
        source={{uri: post_image}}
        className=" rounded-xl mt-3"
        resizeMode="cover"
        style={{
          width: 300,
          height: 200,
        }}
      /> */}

      {/* <Image source={require("../assets/temp/temp_post.png")} /> */}
      <Image
        source={require("../../assets/temp/temp_post.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200, // Set width
    height: 200, // Set height
    resizeMode: "contain", // Optional: adjust how the image fits
  },
});
export default Create;

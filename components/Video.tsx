import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";

import { View, Text } from "react-native";

type VideoProps = {
  videoSource: string;
  styles: any;
};

const Video = ({ videoSource, styles }: VideoProps) => {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <View>
      <VideoView
        className=""
        player={player}
        allowsFullscreen
        allowsPictureInPicture
        contentFit="cover"
        style={styles}
      />
    </View>
  );
};
export default Video;

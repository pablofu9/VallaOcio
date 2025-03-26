import Animated, {
    interpolate,
    useAnimatedStyle,
  } from "react-native-reanimated";
  import { StyleSheet } from "react-native";
  
  
  type AnimatedHeaderImageProps = {
    scrollOffset: Animated.SharedValue<number>;
    imageSource: any;
    image_height: number;
  };
  
  export const AnimatedHeaderImage = ({
    scrollOffset,
    imageSource,
    image_height
  }: AnimatedHeaderImageProps) => {
    const imageAnimatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: interpolate(
              scrollOffset.value,
              [-image_height, 0, image_height],
              [-image_height / 2, 0, image_height * 0.75]
            ),
          },
          {
            scale: interpolate(
              scrollOffset.value,
              [-image_height, 0, image_height],
              [2, 1, 1]
            ),
          },
        ],
      };
    });
  
    return (
      <Animated.Image
        style={[styles.image, imageAnimatedStyle, {height: image_height}]}
        source={imageSource}
        resizeMode="cover"
        blurRadius={5}
      />
    );
  };
  
  const styles = StyleSheet.create({
    image: {
      width: "100%",
      zIndex: 1,
    },
  });
import Animated, { AnimatedStyle } from "react-native-reanimated";
import { StyleSheet, ViewStyle, View, Text } from "react-native";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { CircularButton } from "../buttons/circularButton";
import { AntDesign } from "@expo/vector-icons";
// Define the props for the ParallaxHeader component.
// `headerAnimatedStyle` will be the style passed from the parent component that contains the animation logic.
type ParallaxHeaderProps = {
  topInset: number; // The inset from the top, typically from safe area or navigation bar.
  headerAnimatedStyle: AnimatedStyle<ViewStyle>; // Animated style to apply to the header.
  handleGoBack: () => void;
  handleShare: () => void;
  bgColor: string;
  textHeader?: string;
  isRoundedButtons: boolean;
};

/**
 * `ParallaxHeader` component is used to display a header with parallax effect when the user scrolls.
 * It takes `topInset` for positioning and `headerAnimatedStyle` for applying animations.
 *
 * @param {number} topInset - The top inset value (typically from `useSafeAreaInsets()`).
 * @param {AnimatedStyle<ViewStyle>} headerAnimatedStyle - The animated style for the header.
 *
 * @returns {JSX.Element} - Rendered `Animated.View` component.
 */
export const ParallaxHeader = ({
  topInset,
  headerAnimatedStyle,
  handleGoBack,
  handleShare,
  bgColor,
  textHeader,
  isRoundedButtons,
}: ParallaxHeaderProps) => {
  return (
    <Animated.View
      style={[
        styles.rootContainer,
        {
          paddingTop: topInset,
          height: topInset + 50,
          backgroundColor: bgColor,
        }, // Adjusting the height with the top inset.
        headerAnimatedStyle, // Applying the animated style.
      ]}
    >
      <View style={styles.headerButtons}>
        {isRoundedButtons ? (
          <>
            <CircularButton
              size={40}
              color={GlobalStyle.colors.transparent}
              buttonHandle={handleGoBack}
            >
              <AntDesign name="left" size={20} color="white" />
            </CircularButton>
            <CircularButton
              size={40}
              color={GlobalStyle.colors.transparent}
              buttonHandle={handleGoBack}
            >
              <AntDesign name="sharealt" size={20} color="white" />
            </CircularButton>
          </>
        ) : (
          <>
            <AntDesign
              name="left"
              size={20}
              color={GlobalStyle.colors.primaryPurple}
            />
            <Text>{textHeader}</Text>
            <AntDesign
              name="sharealt"
              size={20}
              color={GlobalStyle.colors.primaryPurple}
            />
          </>
        )}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    position: "absolute",
    paddingHorizontal: 20,
    shadowRadius: 10,
    shadowColor: GlobalStyle.colors.grayBackground,
    elevation: 5,
    shadowOpacity: 0.7,
  },
  headerButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

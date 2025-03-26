import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Film } from "../../models/film";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { AntDesign } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CircularButton } from "../../components/buttons/circularButton";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { AnimatedHeaderImage } from "../../components/animatedHeaderImage/animatedHeaderImage";
import { ParallaxHeader } from "../../components/parallaxHeader/parallaxHeader";

const IMAGE_HEIGHT = 300;
type RootStackParamList = {
  filmDetail: { film: Film };
};
type Props = NativeStackScreenProps<RootStackParamList, "filmDetail">;

export const FilmDetail = ({ route }: Props) => {
  const { film } = route.params;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMAGE_HEIGHT / 1.5], [0, 1]),
    };
  });
  const staticHeaderAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMAGE_HEIGHT], [1, 0]),
    };
  });

  function handleGoBack() {
    navigation.goBack();
  }

  function handleShare() {}
  return (
    <View style={styles.rootContainer}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContainer}
      >
        <AnimatedHeaderImage
          scrollOffset={scrollOffset}
          imageSource={require("../../../assets/images/film.jpg")}
          image_height={IMAGE_HEIGHT}
        />

        <View style={styles.textContainer}>
          <Text style={styles.nameContainer}>{film.name}</Text>
          <Text style={styles.descriptionContainer}>{film.description}</Text>
          <View style={styles.durationContainer}>
            <Text>Duracion: </Text>
            <Text>{film.duration.toString()}</Text>
          </View>
        </View>
      </Animated.ScrollView>

      <ParallaxHeader
        topInset={insets.top}
        headerAnimatedStyle={headerAnimatedStyle}
        handleGoBack={handleGoBack}
        handleShare={handleGoBack}
        bgColor={GlobalStyle.colors.white}
        textHeader={film.name.toString()}
        isRoundedButtons={false}
      />
      <ParallaxHeader
        topInset={insets.top}
        headerAnimatedStyle={staticHeaderAnimatedStyle}
        handleGoBack={handleGoBack}
        handleShare={handleGoBack}
        bgColor={"transparent"}
        isRoundedButtons={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.semiGrayBG,
  },
  imagebgStyle: {
    width: "100%",
    height: IMAGE_HEIGHT,
    zIndex: 1,
  },
  backContainer: {
    flex: 1,
    width: "100%",
    position: "absolute",
    paddingLeft: 20,
    backgroundColor: GlobalStyle.colors.white,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  descriptionContainer: {
    fontSize: 50,
    fontWeight: "regular",
  },
  nameContainer: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 40
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  durationContainer: {
    flexDirection: 'row'
  }
});

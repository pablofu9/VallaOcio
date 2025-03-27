import { Image, View, StyleSheet, Text, ImageSourcePropType } from "react-native";
import { GlobalStyle } from "../../styles/GlobalStyle";

type NoContentProps = {
    text: string;
    imageSource: ImageSourcePropType;
}

export const NoContent = ({ text, imageSource}: NoContentProps) => {
  return <View style={styles.container}>
      <Image source={imageSource} style={styles.imageContainer} />
      <Text style={styles.textStyle}>{text}</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  imageContainer: {
    width: 150,
    height: 150
  },
  textStyle: {
    color: GlobalStyle.colors.transparent,
    fontWeight: 'bold',
    fontSize: 35
  }
});

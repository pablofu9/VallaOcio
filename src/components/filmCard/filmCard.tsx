import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Film } from "../../models/film";
import { GlobalStyle } from "../../styles/GlobalStyle";

type FilmCardProps = {
  film: Film;
};

export const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        style={styles.imageBgStyle}
        source={require("../../../assets/images/film.jpg")}
        borderRadius={20}
        resizeMode="cover"
        blurRadius={10}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>{film.name}</Text>
          <Text>{film.director}</Text>
          <Text>{film.description}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginVertical: 10,
    overflow: 'hidden'
  },
  nameText: {
    color: GlobalStyle.colors.white,
    fontWeight: 'bold'
  },
  imageBgStyle: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
  infoContainer: {
    backgroundColor: GlobalStyle.colors.transparent,
    padding: 20,
    borderRadius: 20
  },
});

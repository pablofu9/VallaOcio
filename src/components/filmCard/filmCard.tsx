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
        <View style={styles.durationPill}>
          <Text style={styles.durationText}>{film.duration} min</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>{film.name}</Text>
          <Text style={styles.directorText}>{film.director}</Text>
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
    overflow: "hidden",
  },
  nameText: {
    color: GlobalStyle.colors.white,
    fontWeight: "bold",
    fontSize: 22,
  },
  imageBgStyle: {
    flex: 1,
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  infoContainer: {
    backgroundColor: GlobalStyle.colors.transparent,
    height: "50%",
    padding: 20,
    borderRadius: 20,
  },
  directorText: {
    color: GlobalStyle.colors.white,
    fontWeight: "regular",
    fontSize: 18,
  },
  durationPill: {
    alignSelf: 'flex-start',
    width: 'auto',
    borderRadius: 7,
    backgroundColor: GlobalStyle.colors.primaryPurple,
    padding: 5,
    marginLeft: 10,
    position: 'absolute',
    top: 0,
    marginTop: 10
  },
  durationText: {
    color: GlobalStyle.colors.white,
    fontSize: 17
  }
});

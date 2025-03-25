import { View, Text, StyleSheet } from "react-native";
import { Film } from "../../models/film";
import { GlobalStyle } from "../../styles/GlobalStyle";

type FilmCardProps = {
  film: Film;
};

export const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.nameText}>
        {film.name}
      </Text>
      <Text>
        {film.director}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: GlobalStyle.colors.transparent,
        width: '100%',
        height: 200,
        borderRadius: 20,
        marginVertical: 10,
        padding: 20
    },
    nameText: {
        color: GlobalStyle.colors.white
    }
})
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { GlobalStyle } from "../../styles/GlobalStyle";

export const LoadingScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <ActivityIndicator
        size="large"
        color={GlobalStyle.colors.primaryPurple}
      />
      <Text>Cargando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: GlobalStyle.colors.semiGrayBG,
        justifyContent: 'center'
    }
})
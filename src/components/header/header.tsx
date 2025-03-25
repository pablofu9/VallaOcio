import { View, Text, Animated, StyleSheet, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { FilterButton } from "../buttons/filterButton";
import { SearcherTextField } from "../textfields/searcherTextField";


type HeaderProps = {
  handleFilterPress: () => void;
  onChangeText: (text: string) => void;

};

export const Header = ({ handleFilterPress, onChangeText }: HeaderProps) => {
  const insets = useSafeAreaInsets();



  return (
    <Animated.View
      style={{
        height: insets.top + 50, 
        backgroundColor: GlobalStyle.colors.white,
        position: 'relative', 
        top: 0, 
        left: 0,
        right: 0,
      }}
    >
      <View style={[styles.headerStyle]}>
        <SearcherTextField placeholder="Buscar..." onChangeText={onChangeText}/>
        <FilterButton handleFilterPress={handleFilterPress} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
    headerStyle: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      alignItems: "flex-end",
      paddingBottom: 8
    },
  });
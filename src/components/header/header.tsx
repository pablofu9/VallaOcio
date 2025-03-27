import { View, Text, Animated, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { FilterButton } from "../buttons/filterButton";
import { SearcherTextField } from "../textfields/searcherTextField";


type HeaderProps = {
  handleFilterPress: () => void;
  onChangeText: (text: string) => void;
  date: string
};

export const Header = ({ handleFilterPress, onChangeText, date }: HeaderProps) => {
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
        {/* <SearcherTextField placeholder="Buscar..." onChangeText={onChangeText}/> */}
        <FilterButton handleFilterPress={handleFilterPress} />
        <TouchableOpacity onPress={handleFilterPress} style={styles.calendarContainer}>
          <Text>{date}</Text>
        </TouchableOpacity>
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
    imageStyle: {
      width: 40,
      height: 40
    },
    calendarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: GlobalStyle.colors.primaryPurple,
      paddingVertical: 5,
      paddingHorizontal: 8,
      borderRadius: 20
    }
  });
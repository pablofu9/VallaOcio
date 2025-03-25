import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyle } from "../../styles/GlobalStyle";

type FilterProps = {
    handleFilterPress: () => void;
}

export const FilterButton = ({ handleFilterPress }: FilterProps) => {
    return(
        <View>
            <Pressable onPress={handleFilterPress} android_ripple={{ color: GlobalStyle.colors.white }} style={({ pressed }) => pressed ?  [styles.pressedStyle] : []}>
                <Ionicons name="filter" size={30} color={GlobalStyle.colors.primaryPurple} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    pressedStyle: {
        opacity: 0.5
    }
})
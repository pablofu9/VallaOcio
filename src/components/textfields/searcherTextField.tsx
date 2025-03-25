import { TextInput, StyleSheet, View } from "react-native";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { useState } from "react";

type searcherProps = {
  placeholder: string;
  onChangeText: (text: string) => void;

};

export const SearcherTextField = ({ placeholder, onChangeText }: searcherProps) => {
  const [isFocused, setIsFocused] = useState(false);
  function onFocused() {
    setIsFocused(true);
  }
  return (
    <View style={styles.viewContainer}>
      <TextInput
        style={[
          styles.textInputContainer,
          isFocused ? styles.focusedStyle : styles.unfocusedStyle, // Aplica estilos según el estado
        ]}
        placeholder={placeholder}
        multiline={false}
        onFocus={onFocused}
        onChangeText={onChangeText} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    width: "80%",
  },
  textInputContainer: {
    width: "100%",
    height: 40,
    backgroundColor: GlobalStyle.colors.grayBackground,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  focusedStyle: {
    borderColor: GlobalStyle.colors.primaryPurple,
  },
  unfocusedStyle: {
    borderColor: GlobalStyle.colors.grayBackground,
  },
});

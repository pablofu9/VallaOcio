import { StyleSheet, View, TouchableOpacity } from "react-native";

/**
 * Props for the CircularButton component.
 */
type CircularButtonProps = {
  size: number;
  color: string;
  buttonHandle: () => void;
  children?: React.ReactNode;
};

/**
 * A reusable circular button component that can contain an icon or text.
 *
 * @param {CircularButtonProps} props - The props for the circular button.
 * @returns {JSX.Element} A TouchableOpacity button styled as a circle.
 */
export const CircularButton = ({
  size,
  color,
  buttonHandle,
  children,
}: CircularButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={buttonHandle}
      style={[
        styles.buttonContainer,
        {
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: size / 2, // Ensures the button is circular
        },
      ]}
    >
      {/* Renders children inside the button */}
      <View style={styles.content}>{children}</View>
    </TouchableOpacity>
  );
};

/**
 * Styles for the CircularButton component.
 */
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
});

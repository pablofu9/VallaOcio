// src/components/TabBarIcon.tsx
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Default icon library
import { FontAwesome } from "@expo/vector-icons"; // Example of another library
import { MaterialIcons } from "@expo/vector-icons"; // Another example of icon library
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { GlobalStyle } from "../../styles/GlobalStyle";

type TabBarIconProps = {
  focused: boolean;
  size: number;
  iconLibrary: "Ionicons" | "FontAwesome6" | "MaterialIcons" | "FontAwesome5"; // Define the available libraries
  focusedIcon: string; // The icon to show when the tab is focused
  unfocusedIcon: string; // The icon to show when the tab is not focused
};

export const TabBarIcon = ({
  focused,
  size,
  iconLibrary,
  focusedIcon,
  unfocusedIcon,
}: TabBarIconProps) => {
  let IconComponent: React.ElementType;

  // Select the icon library based on the `iconLibrary` prop
  switch (iconLibrary) {
    case "FontAwesome6":
      IconComponent = FontAwesome6;
      break;
    case "FontAwesome5":
        IconComponent = FontAwesome5;
        break;
    case "MaterialIcons":
      IconComponent = MaterialIcons;
      break;
    case "Ionicons":
    default:
      IconComponent = Ionicons;
      break;
  }

  // Render the focused or unfocused icon
  return (
    <IconComponent name={focused ? focusedIcon : unfocusedIcon} size={size} color={ focused ? GlobalStyle.colors.primaryPurple : GlobalStyle.colors.textSecondary}/>
  );
};

// src/components/TabBarText.tsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { GlobalStyle } from '../../styles/GlobalStyle';

type TabBarTextProps = {
  focused: boolean;
  label: string;
};

export const TabBarLabel = ({ focused, label }: TabBarTextProps) => {
  return (
    <Text
      style={
        focused ? styles.tabBarTextFocused : styles.tabBarNotFocused
      }
    >
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  tabBarTextFocused: {
    fontWeight: 'bold',
    color: GlobalStyle.colors.primaryPurple
  },
  tabBarNotFocused: {
    fontWeight: 'normal',
    opacity: 0.6,
    color: GlobalStyle.colors.textSecondary
  },
});
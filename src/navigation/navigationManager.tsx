import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FilmsScreen } from "../screens/FilmsScreen";
import { TheatherScreen } from "../screens/theatherScreen";
import { MuseumScreen } from "../screens/museumScreen";
import { Text, StyleSheet } from "react-native";
import { TabBarIcon } from "../components/tabBar/tabBarIcon";
import { TabBarLabel } from "../components/tabBar/tabBarLabel";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Film } from "../models/film";
import { FilmDetail } from "../screens/filmDetail/filmDetail";

type navigationTabBarProps = {
  Film: undefined;
  Theather: undefined;
  Museum: undefined;
};

type RootStackParamList = {
  tabBar: undefined;
  filmDetail: { film: Film };
};

// Tab bar controller
const Tab = createBottomTabNavigator<navigationTabBarProps>();
// Navigation stack controller
const Stack = createNativeStackNavigator<RootStackParamList>();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          height: 70,
          backgroundColor: GlobalStyle.colors.white,
        },
      }}
    >
      <Tab.Screen
        name="Film"
        component={FilmsScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <TabBarIcon
              iconLibrary="Ionicons"
              focused={focused}
              size={size}
              focusedIcon="film"
              unfocusedIcon="film-outline"
            />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} label="Cine" />
          ),
        }}
      />
      <Tab.Screen
        name="Theather"
        component={TheatherScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <TabBarIcon
              iconLibrary="FontAwesome6"
              focused={focused}
              size={size}
              focusedIcon="masks-theater"
              unfocusedIcon="masks-theater"
            />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} label="Teatros" />
          ),
        }}
      />
      <Tab.Screen
        name="Museum"
        component={MuseumScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <TabBarIcon
              iconLibrary="MaterialIcons"
              focused={focused}
              size={size}
              focusedIcon="museum"
              unfocusedIcon="museum"
            />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} label="Museos" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const NavigationManager = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="tabBar" children={() => <TabBar />} />
        <Stack.Screen name="filmDetail" component={FilmDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarTextFocused: {
    fontWeight: "bold",
  },
  tabBarNotFocused: {
    fontWeight: "regular",
    opacity: 0.6,
  },
});

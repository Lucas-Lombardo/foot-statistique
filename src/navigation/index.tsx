/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React from "react";

import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ColorSchemeName } from "react-native";

import { RootStackParamList } from "../../types";
import BottomTabNavigator from "./BottomTabNavigator";
import SplashScreen from "../components/SplashScreen";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }): JSX.Element {
  return (
    <NavigationContainer
      fallback={<SplashScreen />}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

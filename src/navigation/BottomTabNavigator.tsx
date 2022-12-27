/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import * as React from "react";

import { useTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import PlayerScreen from "../screens/PlayerScreen";
import {
  BottomTabParamList,
  PlayerParamList,
  TeamParamList,
  VersusParamList,
} from "../../types";
import TeamScreen from "../screens/TeamScreen";
import VersusScreen from "../screens/VersusScreen";

const DefaultScreenOptions: StackNavigationOptions = {
  cardStyle: { backgroundColor: Colors.grey_0 },
};

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): JSX.Element {
  const { colors } = useTheme();
  const iconSize = 24;

  return (
    <BottomTab.Navigator
      initialRouteName="Versus"
      activeColor={Colors.secondary.bostonBlue}
      inactiveColor={Colors.grey_50}
      labeled={true}
      shifting={false}
      barStyle={{ backgroundColor: colors.background }}
    >
      <BottomTab.Screen
        name="Team"
        component={TeamNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="sliders" color={color} size={iconSize} style={{ transform: [{ rotate: "90deg" }] }} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Versus"
        component={VersusNavigator}
        options={{
          tabBarIcon: ({ color }) => <Feather name="file-plus" color={color} size={iconSize} />,
          title: "Versus",
        }}
      />

      <BottomTab.Screen
        name="Player"
        component={PlayerNavigator}
        options={{
          tabBarIcon: ({ color }) => <Feather name="credit-card" color={color} size={iconSize} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const PlayerStack = createStackNavigator<PlayerParamList>();

function PlayerNavigator() {
  return (
    <PlayerStack.Navigator initialRouteName="PlayerScreen" screenOptions={DefaultScreenOptions}>
      <PlayerStack.Screen name="PlayerScreen" component={PlayerScreen} options={{ headerShown: false }} />
    </PlayerStack.Navigator>
  );
}

const TeamStack = createStackNavigator<TeamParamList>();

function TeamNavigator() {
  return (
    <TeamStack.Navigator screenOptions={DefaultScreenOptions}>
      <TeamStack.Screen name="TeamScreen" component={TeamScreen} options={{ headerShown: false }} />
    </TeamStack.Navigator>
  );
}

const VersusStack = createStackNavigator<VersusParamList>();

function VersusNavigator() {
    return (
        <VersusStack.Navigator screenOptions={DefaultScreenOptions}>
            <VersusStack.Screen name="VersusScreen" component={VersusScreen} options={{ headerShown: false }} />
        </VersusStack.Navigator>
    );
}

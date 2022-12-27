import { Route } from "react-native";
import { Action } from "@react-navigation/routers/src/CommonActions";

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type ScreenProps = {
  navigation: Navigation;
  route: Route;
};

export type Navigation = {
  navigate: (scene: string, params?: any) => void;
  dispatch: (action: Action) => void;
};

export type RootStackParamList = {
  Root: undefined;
  AuthLoading: undefined;
  NotFound: undefined;
  Login: undefined;
};

export type BottomTabParamList = {
  Player: undefined;
  Versus: undefined;
  Team: undefined;
};

export type PlayerParamList = {
  PlayerScreen: undefined;
};

export type VersusParamList = {
  VersusScreen: undefined;
};

export type TeamParamList = {
  TeamScreen: undefined;
};

export type FormInputField<T> = {
  value: T;
  error: string;
};

export const hasError = (field: FormInputField<string>): boolean => field.error !== "";

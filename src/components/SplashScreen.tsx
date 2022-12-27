import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SplashScreen(): JSX.Element {
  return (
    <SafeAreaView>
      <ImageBackground source={require("../../assets/icon.png")} style={styles.imageContainer} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: "100%",
    alignItems: "center",
  },
});

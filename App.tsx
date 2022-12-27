import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import useColorScheme from "./src/hooks/useColorScheme";

export default function App() {
  const colorScheme = useColorScheme();
  return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

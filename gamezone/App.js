import * as Font from "expo-font";
import Splash from "./Screens/Splash";
import "react-native-gesture-handler";
import Stacks from "./routes/Stacks";

export default function App() {
  // Fonts
  const [loaded, setLoaded] = Font.useFonts({
    Nunito: require("./assets/fonts/NunitoSans-Light.ttf"),
    NunitoBold: require("./assets/fonts/NunitoSans-SemiBold.ttf"),
  });

  if (!loaded) {
    return (
      <>
        <Splash />
      </>
    );
  }

  return (
    <>
      <Stacks />
    </>
  );
}

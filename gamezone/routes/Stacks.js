import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import Home from "../Screens/Home";
import ReviewDetails from "../Screens/ReviewDetails";
import About from "../Screens/About";
import Header from "../components/Header";

const Stacks = () => {
  // Navigation
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          // screenOptions={{
          //   header: ({ navigation, options }) => (
          //     <Header navigation={navigation} />
          //   ),

          // headerBackVisible: false, // For Android
          // headerBackButtonMenuEnabled: false, // For iOS
          // }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTitle: () => <Header /> }}
          ></Stack.Screen>
          <Stack.Screen
            name="ReviewDetails"
            component={ReviewDetails}
            options={{
              headerTitle: () => <Header />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Stacks;

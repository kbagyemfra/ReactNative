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
  //   const Drawer = createDrawerNavigator();
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato", height: 60 },
        }}
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
    </>
  );
};

export default Stacks;

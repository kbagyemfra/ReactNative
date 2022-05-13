import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import About from "./About";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Stacks from "../routes/Stacks";
const Drawer = createDrawerNavigator();

const Draw = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Stack">
          <Drawer.Screen
            name="Stack"
            component={Stacks}
            options={{ headerShown: false }}
          />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Draw;

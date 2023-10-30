import { StyleSheet } from "react-native";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsScreen } from "./screens/MealsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={CategoriesScreen}></Stack.Screen>
        <Stack.Screen name="Meals" component={MealsScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

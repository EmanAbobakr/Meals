import { StyleSheet } from "react-native";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsScreen } from "./screens/MealsScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // you can pass an obj or an arrow fun to "options"
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Home"
            component={CategoriesScreen}
            options={{
              title: "Categories",
            }}
          ></Stack.Screen>
          {/* you can set option dynamically here or frome inside the component using navigation.setOptions() method and useLayoutEffect (not useEffect) useEffect vs useLayoutEffect*/}
          <Stack.Screen
            name="Meals"
            component={MealsScreen}
            options={({ route, navigation }) => {
              return { title: route.params.title };
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

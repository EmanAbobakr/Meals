import { StyleSheet } from "react-native";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MealsScreen } from "./screens/MealsScreen";
import { DetailsScreen } from "./screens/DetailsScreen";
import { FavouritesScreen } from "./screens/FavouritesScreen";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#3f2f25",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    // you can pass an obj or an arrow fun to "options"
    // the value of headerRight should be a a component function (If you want this component interact directly with the screen you need put it in the screen itself)
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
            component={MyDrawer}
            options={{ headerShown: false }}
          ></Stack.Screen>
          {/* you can set option dynamically here or frome inside the component using navigation.setOptions() method and useLayoutEffect (not useEffect) useEffect vs useLayoutEffect*/}
          <Stack.Screen
            name="Meals"
            component={MealsScreen}
            options={({ route, navigation }) => {
              return { title: route.params.title };
            }}
          ></Stack.Screen>
          <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

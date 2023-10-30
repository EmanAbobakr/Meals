import { StyleSheet, View } from "react-native";
import { CategoriesScreen } from "./screens/CategoriesScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <CategoriesScreen></CategoriesScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
  },
});

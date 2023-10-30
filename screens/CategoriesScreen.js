import { StyleSheet, View, FlatList } from "react-native";
import { Categories } from "../data/DummyData";
import { Category } from "../components/Category";

export function CategoriesScreen() {
  return (
    <View>
      <FlatList
        data={Categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Category data={item}></Category>}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

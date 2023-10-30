import { View, FlatList } from "react-native";
import { Categories } from "../data/DummyData";
import { Category } from "../components/Category";

export function CategoriesScreen({ navigation }) {
  function pressHandler(category) {
    navigation.navigate("Meals", category);
  }

  return (
    <View>
      <FlatList
        data={Categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Category data={item} onPress={() => pressHandler(item)}></Category>
        )}
        numColumns={2}
      />
    </View>
  );
}

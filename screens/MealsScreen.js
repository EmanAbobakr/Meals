import { View, FlatList } from "react-native";
import { Meals } from "../data/DummyData";
import { Meal } from "../components/Meal";

export function MealsScreen({ navigation, route }) {
  function pressHandler(meal) {}

  const displayedMeals = Meals.filter((meal) =>
    meal.categoryId.includes(route.params.id)
  );

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Meal data={item} onPress={() => pressHandler(item)}></Meal>
        )}
      />
    </View>
  );
}

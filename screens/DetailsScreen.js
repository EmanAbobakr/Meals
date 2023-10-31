import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MealDetails } from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { List } from "../components/MealDetail/List";

export function DetailsScreen({ route }) {
  const selectedMeal = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.img} source={{ uri: route.params.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        textStyle={styles.detailText}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      ></MealDetails>
      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients}></List>
      <Subtitle>Instructions</Subtitle>
      <List data={selectedMeal.instructions}></List>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   alignItems: "center",
  // },
  img: { width: "100%", height: 350 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    margin: 8,
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },
});

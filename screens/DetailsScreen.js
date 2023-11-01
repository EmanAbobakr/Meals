import { Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { MealDetails } from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { List } from "../components/MealDetail/List";
import { Ionicons } from "@expo/vector-icons";

export function DetailsScreen({ route, navigation }) {
  const selectedMeal = route.params;

  function headerButtonHandler() {
    console.log("you pressed me!");
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Ionicons
            name="star"
            size={20}
            color="white"
            onPress={headerButtonHandler}
          />
        );
      },
    });
  }, [navigation]);

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

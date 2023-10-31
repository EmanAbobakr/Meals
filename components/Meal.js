import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { MealDetails } from "./MealDetails";

export function Meal({ data, onPress }) {
  return (
    <View style={[styles.outerContainer]}>
      <Pressable
        android-ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          {/*An img from the web? you have to add style to define width and height*/}
          <Image style={styles.img} source={{ uri: data.imageUrl }} />
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <MealDetails
          duration={data.duration}
          complexity={data.complexity}
          affordability={data.affordability}
        ></MealDetails>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    //you have to have bg color to see shadow in Ios
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    //disappear the shadow so you need set it visible in Ios
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  //to solve the top borders issue in Ios
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  img: { width: "100%", height: 200 },
});

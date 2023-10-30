import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

export function Category({ data, onPress }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: data.color }]}>
      <Pressable
        android-ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        onPress={onPress}
      >
        <View>
          <Text style={styles.title}>{data.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    //you have to have bg color to see shadow in Ios
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    //disappear the shadow
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  // button: {
  //   flex: 1
  // },
  buttonPressed: {
    opacity: 0.5,
  },
  // innerContainer: {
  //   flex: 1,
  //   padding: 16,
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

import { Text, View, StyleSheet } from "react-native";

export function Subtitle(props) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitleContainer: {
    borderBottomColor: "#deb16d",
    borderBottomWidth: 2,
    margin: 4,
    marginHorizontal: 15,
    padding: 6,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#deb16d",
    textAlign: "center",
  },
});

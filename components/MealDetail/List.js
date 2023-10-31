import { Text, View, StyleSheet } from "react-native";

export function List({ data }) {
  return (
    <View>
      {data.map((dataPoint) => (
        <View style={styles.textContainer}>
          <Text style={styles.text} key={dataPoint}>
            {dataPoint}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "80%",
  },
  textContainer: {
    backgroundColor: "#deb16d",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    alignItems: "center",
  },
  text: {
    color: "#351401",
  },
});

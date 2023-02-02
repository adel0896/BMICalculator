import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, SafeAreaView, Button, TextInput, StyleSheet } from "react-native";

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    const numWeight = parseInt(weight);
    const numHeight = parseInt(height);
    const multiply = numHeight * numHeight;
    const divide = numWeight / multiply;
    setResult(divide.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>BMI Calulator</Text>

      <Text> Height (for example 1.7):</Text>
      <TextInput style={styles.input} onChangeText={setHeight} value={height} />
      <Text> Weight (for example 56):</Text>
      <TextInput style={styles.input} onChangeText={setWeight} value={weight} />
      {result && (
        <>
          <Text style={styles.result}> Final result: {result}</Text>
        </>
      )}

      <Button color={"#FF69B4"} title="Calculate" onPress={calculate} />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: "50%",
    marginHorizontal: "10%",
  },
  heading: {
    fontSize: 40,
    margin: 10,
    alignSelf: "center",
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  result: {
    fontSize: 20,
  },
});

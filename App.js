import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import TextInputComponent from "./src/component/TextInputComponent";
import TextComponent from "./src/component/TextComponent";
import Styles from "./src/styles/Style";

export default function App() {
  const [celsius, setCelsius] = useState("");
  const [resultado, setResultado] = useState("");

  const AlertCalculate = () => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    if (celsius === "") {
      alert("Insira um valor");
    } else {
      setResultado(fahrenheit);
    }
  };
  return (
    <View style={Styles.container}>
      <Text>Insira o valor em celsius para converter para fahrenheit</Text>
      <TextInputComponent value={celsius} onChangeText={setCelsius} />
      <TouchableOpacity onPress={AlertCalculate} style={{ backgroundColor: '#add8e6'}}>
        <TextComponent style={Styles.resultText}>Calcular</TextComponent>
      </TouchableOpacity>

      <Text>{resultado}</Text>
    </View>
  );
}

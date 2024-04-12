import React from 'react';
import { TextInput } from 'react-native';

const TextInputComponent = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={{ height: 40, borderColor: 'blue', borderWidth: 1, marginBottom: 10 }}
      placeholder="Digite a temperatura em Celsius"
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default TextInputComponent;

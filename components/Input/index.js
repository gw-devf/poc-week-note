import { View, TextInput, Text } from "react-native";
import styles from "./style";

function Input({ label = "Label text:", customStyle = {}, ...rest }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.input, customStyle]} {...rest} />
    </View>
  );
}

export default Input;

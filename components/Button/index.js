import { TouchableHighlight, Text } from "react-native";

import styles from "./style";

function Button({ text = "Text Button", type = "primary", ...rest }) {
  return (
    <TouchableHighlight
      style={[
        styles.button,
        type === "primary" ? styles.primaryButton : styles.secondaryButton,
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.text,
          type === "primary" ? styles.primaryText : styles.secondaryText,
        ]}
      >
        {text}
      </Text>
    </TouchableHighlight>
  );
}

export default Button;

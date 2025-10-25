import { View } from "react-native";

import styles from "./styles";

function Wrapper({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default Wrapper;

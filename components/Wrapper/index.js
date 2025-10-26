import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";

function Wrapper({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

export default Wrapper;

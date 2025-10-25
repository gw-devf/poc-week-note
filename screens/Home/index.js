import { Text, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Wrapper from "../../components/Wrapper";

import styles from "./style";

function Home() {
  const navigation = useNavigation();

  const toSelectWeekScreen = () => navigation.navigate("SelectWeek");

  return (
    <Wrapper>
      <Text>Home Page</Text>
      <TouchableHighlight
        onPress={toSelectWeekScreen}
        style={styles.buttonSelectWeek}
      >
        <Text style={styles.buttonSelectWeekText}>+</Text>
      </TouchableHighlight>
    </Wrapper>
  );
}

export default Home;

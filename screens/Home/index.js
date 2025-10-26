import { Text, TouchableHighlight, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDatabase } from "../../context/Database";

import ListWeek from "./ListWeek";
import Wrapper from "../../components/Wrapper";

import styles from "./style";

function Home() {
  const { database } = useDatabase();
  const navigation = useNavigation();

  const toSelectWeekScreen = () => navigation.navigate("SelectWeek");

  return (
    <Wrapper>
      <FlatList
        data={database}
        keyExtractor={(item) => item.id}
        renderItem={ListWeek}
      />

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

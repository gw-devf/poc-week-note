import { View, Text, FlatList, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDatabase } from "../../context/Database";

import Wrapper from "../../components/Wrapper";

import styles from "./style";

function SelectWeek() {
  const { database } = useDatabase();
  const navigation = useNavigation();

  const toRegisterProgramWeekScreen = (id) => {
    navigation.navigate("RegisterProgramWeek", { id });
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        <Text style={styles.title}>
          Selecione o dia da semana para cadastrar/atualizar os dados
        </Text>
        <FlatList
          data={database}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 24 }}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => toRegisterProgramWeekScreen(item.id)}
              style={styles.linkButton}
            >
              <Text style={styles.linkButtonText}>{item.week}</Text>
            </TouchableHighlight>
          )}
        />
      </View>
    </Wrapper>
  );
}

export default SelectWeek;

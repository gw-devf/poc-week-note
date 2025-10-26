import { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDatabase } from "../../context/Database";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Wrapper from "../../components/Wrapper";

function getDateNow() {
  const data = new Date();
  let day = data.getDate();
  let month = data.getMonth() + 1;
  let year = data.getFullYear();

  day = String(day).padStart(2, "0");
  month = String(month).padStart(2, "0");

  return `${day}/${month}/${year}`;
}

function RegisterProgramWeek({ route }) {
  const [date, setDate] = useState("");
  const [events, setEvents] = useState("");
  const [week, setWeek] = useState("");
  const { database, setDatabase } = useDatabase();
  const { id } = route.params;
  const navigation = useNavigation();

  const confirmUpdateData = () => {
    const databaseUpdated = database.map((data) => {
      if (data.id === id) {
        const eventsTransform = events.replaceAll("\n", ";");
        const dateTransform = date.length ? date : getDateNow();

        return { ...data, date: dateTransform, events: eventsTransform };
      }

      return data;
    });

    setDatabase(databaseUpdated);
    navigation.navigate("Home");
  };

  const cancel = () => navigation.navigate("Home");

  useEffect(() => {
    if (database.length) {
      const [data] = database.filter((event) => event.id === id);

      if (data) {
        setDate(data.date);
        setEvents(data.events.replaceAll(";", "\n"));
        setWeek(data.week);
      }
    }
  }, [id]);

  return (
    <Wrapper>
      <Input
        label={week}
        placeholder="Digite a data respectiva do calendário"
        onChangeText={setDate}
        value={date}
        customStyle={{ marginBottom: 16 }}
      />
      <Input
        label={`Programação da ${week.toLowerCase()}:`}
        placeholder="Escreva a programação..."
        onChangeText={setEvents}
        value={events}
        customStyle={{
          height: 200,
          textAlignVertical: "top",
          marginBottom: 24,
        }}
        multiline={true}
      />

      <View style={{ flexDirection: "row", gap: 20 }}>
        <Button text="Confirmar" onPress={confirmUpdateData} />
        <Button text="Cancelar" type="secondary" onPress={cancel} />
      </View>
    </Wrapper>
  );
}

export default RegisterProgramWeek;

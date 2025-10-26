import { View, Text } from "react-native";

import styles from "./style";

function ListWeek({ item }) {
  const { week, date, events } = item;
  const eventList = events.split(";");

  return (
    <View>
      <Text style={styles.titleDay}>{`${week} (${date}):`}</Text>

      <View style={styles.containerContentDay}>
        {eventList.map((event, index) => (
          <Text
            key={index}
            style={[
              styles.contentDay,
              index === eventList.length - 1 && { marginBottom: 24 },
            ]}
          >
            {event}
          </Text>
        ))}
      </View>
    </View>
  );
}

export default ListWeek;

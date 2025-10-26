import { View, Text } from "react-native";

import styles from "./style";

function ListWeek({ item }) {
  const { week, date, events } = item;
  const eventList = events.length ? events.split(";") : [];

  return (
    <View>
      <Text style={styles.titleDay}>{`${week} (${date}):`}</Text>

      <View style={styles.containerContentDay}>
        {eventList.length ? (
          eventList.map((event, index) => (
            <Text key={index} style={styles.contentDay}>
              {event}
            </Text>
          ))
        ) : (
          <Text style={[styles.contentDay, { marginBottom: 24 }]}>
            Sem eventos para esse dia...
          </Text>
        )}
      </View>
    </View>
  );
}

export default ListWeek;

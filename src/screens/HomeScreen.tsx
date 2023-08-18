import * as React from "react";
import { Button, View, Text } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello World!</Text>
      <Text>Development Deploy!</Text>
      <Button title="FCM Test" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

export default HomeScreen;

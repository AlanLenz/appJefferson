import { Text, View } from "react-native";
import { Styles } from "../../src/style";

export default function home() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.formTitle}>Página inicial</Text>
    </View>
  );
}

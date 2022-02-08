import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { Provider } from "react-redux";
import store from "./src/store";
import Home from "./src/Home";

export default function App() {
  return (
    <ScrollView>
      <Provider store={store}>
        <StatusBar backgroundColor="#8BAFF7" barStyle="dark-content" />
        <View style={styles.container}>
          <Home />
        </View>
      </Provider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
});

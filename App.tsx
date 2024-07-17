//@format
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Main from './src/screens/Main';
import store from './src/redux/store';
import { Provider } from 'react-redux';



const App = (): React.JSX.Element => {


  return (
    <Provider store={store}>
      <SafeAreaView style={styles.generalDesign}>
        <View>
          <Main />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  generalDesign: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    direction: 'rtl',
    overflow: 'scroll'
  }
});

export default App;

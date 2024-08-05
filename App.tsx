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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List_customer_products from './src/screens/List_customer_products';




const App = (): React.JSX.Element => {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.generalDesign}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Main}
            />
            <Stack.Screen
              name="customers_products_page"
              component={List_customer_products}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  generalDesign: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    direction: 'rtl',
    // overflow: 'scroll'
    height: "100%",

  }
});

export default App;

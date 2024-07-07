/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {




  return (
    <SafeAreaView style={styles.generalDesign}>
      <View>
        <Text>
          ss
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  generalDesign: {
    backgroundColor: "#D6EFD8",
    flex: 1
  }
});

export default App;

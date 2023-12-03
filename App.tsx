import React, {useState} from 'react';
import {View, StyleSheet, Text, Modal} from 'react-native';
import StartGameScreen from './screen/StartGameScreen';
import PrimaryButton from './components/PrimaryButton';
import GameScreen from './screen/GameScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeNavigation from './screen/HomeNavigation';
import DetailNavigation from './screen/DetailNavigation';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [activeScreen, setActiveScreen] = useState('StartGameScreen');

  let screen;

  if (activeScreen == 'StartGameScreen') {
    screen = <StartGameScreen />;
  } else {
    screen = <GameScreen />;
  }

  const [isShowModal, setShowModal] = useState(false);

  return (
    <View style={styles.rootScreen}>
      <PrimaryButton onClick={() => setActiveScreen('StartGameScreen')}>
        StartGameScreen
      </PrimaryButton>
      <PrimaryButton onClick={() => setActiveScreen('GameScreen')}>
        GameScreen
      </PrimaryButton>

      {screen}

      <PrimaryButton onClick={() => setShowModal(true)}>
        ShowModal
      </PrimaryButton>
      <Modal visible={isShowModal}>
        <Text>Modal</Text>
        <PrimaryButton onClick={() => setShowModal(false)}>
          Cancel
        </PrimaryButton>
      </Modal>

    </View>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="HomeNavigation">
    //     <Stack.Screen
    //       name="HomeNavigation"
    //       component={HomeNavigation}
    //     />
    //     <Stack.Screen
    //       name="DetailNavigation"
    //       component={DetailNavigation}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: 'orange',
  },
});

export default App;
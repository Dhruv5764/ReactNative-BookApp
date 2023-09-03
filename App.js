// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from './src/screen/chatScreen';
import splashSrc from './src/screen/splash/splashScreen'
import HomeSrc from './src/screen/homePage/homeSrc';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splashSrc" component={splashSrc}
          options={{
            headerShown: false,
            presentation:"modal"
            // title: 'My home',
            // headerStyle: {
            //   backgroundColor: '#f4511e',
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
          }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        <Stack.Screen  name="HomePage"  component={HomeSrc}
          options={{
            navigationBarHidden: true,
            animationTypeForReplace:"push",
            headerBackVisible: false,
            presentation:'containedModal',
            animation: 'slide_from_right',
            title: 'Home',
            headerStyle: {
              backgroundColor: 'white',
            },
            // headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: "black"
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
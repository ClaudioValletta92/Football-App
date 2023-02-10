import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OfflineGame from './screens/OfflineGame.js'
import Home from './screens/Home.js'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
<>
            <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OfflineGame" component={OfflineGame} />
      </Stack.Navigator>
</NavigationContainer>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242630',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

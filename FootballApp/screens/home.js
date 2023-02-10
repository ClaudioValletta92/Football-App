import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button,Alert } from 'react-native';



function Home() {
    return (
        <View style={styles.container}>
          <Text>Gioco dei giocatori</Text>
          <StatusBar style="auto" />
          <Button
        title="Gioca offline"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
       <Button
        title="Gioca contro un amico"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
        </View>
      );
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242630',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
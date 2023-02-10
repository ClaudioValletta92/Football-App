import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button,Alert } from 'react-native';

function OfflineGame() {
    return(
        <View style={styles.container}>
            <Text>Offline game js</Text>
        </View>
    );
}

export default OfflineGame;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 16
    }
});
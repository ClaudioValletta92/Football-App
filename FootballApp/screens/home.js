import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function HomeScreen(){
return (
    <View style={styles.container}>
    <Text>Ciaoss</Text>
    <View style={styles.fixToText}>
        <Button
          title="Gioca Offline"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Gioca Online"
          disabled
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    <StatusBar style="auto" />
  </View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      
  });

export default HomeScreen
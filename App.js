import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem name={'Modal S'} tagline={'Order Online for'}
        taglineCTA={'Touchline Delivery'}
        image={require('./assets/images/ModelX.jpeg')} />

      <StatusBar style="auto" />
    </View>
  );
}
// {} Starting at $69,420
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

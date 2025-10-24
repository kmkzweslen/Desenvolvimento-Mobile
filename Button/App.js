import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

export default function App() {

  const aoPressionar = () => {
    alert('O botão foi pressionado')
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button onPress={aoPressionar} title='Toque aqui'/>
      <Button color='red' onPress={() => alert('Presssionado')} title='Toque aqui'/>
      <Button color='green' onPress={() => alert('Presssionado')} title='Toque aqui'/>
        <View>
          <TouchableHighlight onPress={() => aoPressionar('TouchableHighlighr')} underlayColor={'black'}>
            <View style={styles.containerBotao}>
              <Text style={styles.textoBotao}>TouchableHighlight</Text>
            </View>
          </TouchableHighlight>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  containerBotao: {
    color: 'gray',
  },
  textoBotao: {
    color: 'purple',
  }
});

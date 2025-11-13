import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-web';

export default function App() {

  const aoPressionar = () => {
    alert('Pressionado de leves')
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
          <TouchableHighlight onPress={() => aoPressionar('TouchableHighlight')} onLongPress={() => alert('Pressionado por mais tempo')} underlayColor={'black'}>
            <View style={styles.containerBotao}>
              <Text style={styles.textoBotao}>Pressione e segure</Text>
            </View>
          </TouchableHighlight>

          <TouchableOpacity onPress={aoPressionar} activeOpacity={0.2} onLongPress={() => alert('Pressionado por muito tempo')}>
            <View style={styles.containerBotaoOpacity}>
              <Text style={styles.textoBotaoOpacity}>
                TouchableOpacity
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableNativeFeedback onPress={() => aoPressionar('Feedback!')} onLongPress={() => alert('Botão feedback pressionado por muito tempo')} >
            <View style={styles.containerBotaoFeedback}>
              <Text style={styles.textoBotaoFeedback}>
                TouchableNativeFeedback
              </Text>
            </View>
          </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  containerBotao: {
    backgroundColor:'green',
    color: 'black',
  },
  textoBotao: {
    color: 'purple',
  },
  containerBotaoOpacity: {
    backgroundColor: 'yellow',
    color: 'gray',
  },
  textoBotaoOpacity: {
    color: 'blue',
  },
  containerBotaoFeedback: {
    marginLeft: 100,
    alignItems:'center',
    justifyContent:'center',
    display: 'flex',
    backgroundColor: 'Blue',
    color: 'gray',
  },
  textoBotaoFeedback: {
    color: 'black',
  }
});

import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

export default function App() {
  // Mensagens para os alertas
  const mensagens = [
    "Mensagem simples: Bem-vindo ao app!",
    "Mensagem de confirmação: Você deseja continuar?",
    "Mensagem com opções: Qual ação você prefere?",
  ];

  // Função para exibir alerta dinâmico
  function exibirAlertaAleatorio() {
    const tipo = Math.floor(Math.random() * 3);

    switch(tipo) {
      case 0:
        // Alerta simples (1 botão)
        Alert.alert(
          'Alerta Simples',
          mensagens[0],
          [
            { text: 'OK', onPress: () => console.log('Tipo exibido: Alerta Simples') }
          ]
        );
        break;
      case 1:
        // Alerta confirmação (2 botões)
        Alert.alert(
          'Confirmação',
          mensagens[1],
          [
            { text: 'Cancelar', onPress: () => console.log('Tipo exibido: Alerta Confirmação - Cancelar') },
            { text: 'OK', onPress: () => console.log('Tipo exibido: Alerta Confirmação - OK') }
          ]
        );
        break;
      case 2:
        // Alerta com três opções
        Alert.alert(
          'Escolha uma opção',
          mensagens[2],
          [
            { text: 'Ação 1', onPress: () => console.log('Tipo exibido: Alerta 3 opções - Ação 1') },
            { text: 'Ação 2', onPress: () => console.log('Tipo exibido: Alerta 3 opções - Ação 2') },
            { text: 'Cancelar', onPress: () => console.log('Tipo exibido: Alerta 3 opções - Cancelar'), style: 'cancel' }
          ]
        );
        break;
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Exibir Alerta" onPress={exibirAlertaAleatorio} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

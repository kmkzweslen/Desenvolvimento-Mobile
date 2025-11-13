import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [resumo, setResumo] = useState(null);

  const handleEnviar = () => {
    setResumo({ nome, email, mensagem });
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.caixaTexto} placeholder="Nome" onChangeText={setNome} value={nome}/>
      <TextInput style={styles.caixaTexto} placeholder="E-mail" keyboardType="email-address" onChangeText={setEmail} value={email}/>
      <TextInput style={styles.multiline} placeholder="Mensagem" multiline={true} numberOfLines={3} onChangeText={setMensagem} value={mensagem}/>
      <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
        <Text style={styles.textoBotao}>ENVIAR</Text>
      </TouchableOpacity>
      {resumo && (
        <View style={styles.resumo}>
          <Text>Resumo do envio:</Text>
          <Text>Nome: {resumo.nome}</Text>
          <Text>E-mail: {resumo.email}</Text>
          <Text>Mensagem: {resumo.mensagem}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 16, 
    backgroundColor: '#fff', 
    flex: 1, 
    justifyContent: 'center' 
  },
  caixaTexto: {
    height: 40,
    borderColor: '#0f0f0f',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#f1f1f1',
    width: '80%',
    alignSelf: 'center' 
  },
  multiline: {
    height: 80,
    borderColor: '#0f0f0f',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#f1f1f1',
    textAlignVertical: 'top',
    width: '80%',
    alignSelf: 'center'
  },
  botao: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
    alignSelf: 'center'
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  resumo: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '80%',
    alignSelf: 'center'
    },
  }
);
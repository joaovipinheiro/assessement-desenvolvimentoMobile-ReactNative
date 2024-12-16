import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { getUsers, setUsers } from '../data/MockData'; // Funções para manipular os dados no AsyncStorage

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const users = await getUsers(); // Obtém os usuários registrados do AsyncStorage
    const userExists = users.some(user => user.email === email); // Verifica se o e-mail já está cadastrado

    if (userExists) {
      Alert.alert("Este e-mail já está cadastrado.");
    } else {
      const newUser = { email, password, name }; // Cria o novo usuário
      users.push(newUser); // Adiciona o novo usuário à lista
      await setUsers(users); // Persiste a lista de usuários no AsyncStorage
      Alert.alert("Cadastro realizado com sucesso!");
      navigation.navigate('Login'); // Navega para a tela de login
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingLeft: 8,
    width: '80%',
  },
});

export default Register;

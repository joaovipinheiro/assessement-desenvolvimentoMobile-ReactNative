import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { getUsers } from '../data/MockData'; // Suponho que getUsers seja uma função que retorna um usuário

const Profile = ({ route, navigation }) => {
  // Acessando os dados do usuário passados via parâmetros
  const { user } = route.params || {};  // Garantir que route.params seja um objeto e user seja acessível

  // Se o usuário não for encontrado, busca um usuário fictício
  const currentUser = user || getUsers()[0]; // Suponho que getUsers() retorna uma lista de usuários, e pegamos o primeiro

  if (!currentUser) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Erro: Usuário não encontrado</Text>
      </View>
    );
  }

  const handleLogout = () => {
    // Redirecionar para a tela de login ao sair
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Image
        style={styles.avatar}
        source={{ uri: currentUser.avatar || 'https://placekitten.com/120/120' }} // Avatar fictício ou do usuário
      />
      <Text style={styles.info}>Nome: {currentUser.name}</Text>
      <Text style={styles.info}>E-mail: {currentUser.email}</Text>
      <Button title="Sair" onPress={handleLogout} />
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
  info: {
    fontSize: 18,
    marginBottom: 8,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
});

export default Profile;

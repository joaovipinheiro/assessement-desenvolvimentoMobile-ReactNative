import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { getUsers } from '../data/MockData'; 

const Profile = ({ route, navigation }) => {
  const { user } = route.params || {};  

  const currentUser = user || getUsers()[0]; 

  if (!currentUser) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Erro: Usuário não encontrado</Text>
      </View>
    );
  }

  const handleLogout = () => {
   
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Image
        style={styles.avatar}
        source={{ uri: currentUser.avatar || 'https://placekitten.com/120/120' }} 
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

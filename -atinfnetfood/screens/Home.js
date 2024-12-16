import React, { useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Text, Button } from 'react-native';
import { categories } from '../data/MockData';
import SearchBar from '../components/SearchBar';

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Products', { categoryId: item.id, categoryName: item.name })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  // Filtra as categorias com base na pesquisa
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>

      {/* Barra de pesquisa separada */}
       <Text style={styles.h1}>Buscar Categoria </Text>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

    <Text style={styles.h1}>Categorias </Text>

      {/* FlatList para categorias filtradas */}
      <FlatList
        data={filteredCategories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        contentContainerStyle={styles.list}
        horizontal={true} // Define o scroll horizontal
        showsHorizontalScrollIndicator={false} // Remove a barra de rolagem
      />

      
      <Button title="Ver Perfil" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  h1: {
    margintop: 16,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    width: 150, // Aumente a largura para melhor visualização
    height: 150, // Aumente a altura para o card ficar mais visível
    marginRight: 15, // Espaço entre os cards
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80, // Aumente o tamanho da imagem
    height: 80, // Aumente a altura da imagem
    borderRadius: 10, // Imagem arredondada
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Home;
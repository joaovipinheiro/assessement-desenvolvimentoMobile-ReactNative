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

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>

       <Text style={styles.h1}>Buscar Categoria </Text>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

    <Text style={styles.h1}>Categorias </Text>

      <FlatList
        data={filteredCategories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        contentContainerStyle={styles.list}
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
      />

      
      <Button title="Ver Mapa" onPress={() => navigation.navigate('Mapa')} />
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
    width: 150, 
    height: 150,
    marginRight: 15, 
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80, 
    height: 80, 
    borderRadius: 10, 
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Home;
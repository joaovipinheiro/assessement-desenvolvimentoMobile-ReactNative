import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { restaurantDetails } from '../data/MockData';

const Restaurant = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Índice atual do restaurante

  const restaurant = restaurantDetails[currentIndex];

  // Função para ir ao próximo restaurante
  const handleNext = () => {
    if (currentIndex < restaurantDetails.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Função para ir ao restaurante anterior
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Nome e Endereço do Restaurante */}
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.address}>{restaurant.address}</Text>

      {/* Lista de Menu */}
      <Text style={styles.sectionTitle}>Cardápio:</Text>
      <FlatList
        data={restaurant.menu}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuItemName}>{item.name}</Text>
            <Text style={styles.menuItemPrice}>R$ {item.price.toFixed(2)}</Text>
          </View>
        )}
      />

      {/* Botões de Navegação */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, currentIndex === 0 && styles.buttonDisabled]}
          onPress={handlePrevious}
          disabled={currentIndex === 0}
        >
          <Text style={styles.buttonText}>Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            currentIndex === restaurantDetails.length - 1 && styles.buttonDisabled,
          ]}
          onPress={handleNext}
          disabled={currentIndex === restaurantDetails.length - 1}
        >
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  address: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemName: {
    fontSize: 16,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonDisabled: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Restaurant;

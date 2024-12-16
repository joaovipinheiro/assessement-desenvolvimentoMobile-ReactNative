import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { products } from '../data/MockData';
import ProductCard from '../components/ProductCard';

const Products = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    Alert.alert('Adicionado ao Carrinho', `${product.name} foi adicionado ao carrinho.`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products[categoryId]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => handleAddToCart(item)} />
        )}
        contentContainerStyle={styles.list}
      />
      <Button
        title={`Ver Carrinho (${cart.length} itens)`}
        onPress={() => navigation.navigate('Cart', { cart })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 10,
  },
});

export default Products;

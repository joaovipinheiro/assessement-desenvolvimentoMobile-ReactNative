import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { orders } from '../data/MockData';


const Order = () => {
  
   const renderOrder = ({ item }) => (
    <View style={styles.orderCard}>
      <Text style={styles.item}>{item.item}</Text>
      <Text style={styles.details}>Data: {item.date}</Text>
      <Text style={styles.details}>Preço: {item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seus Pedidos</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrder}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  orderCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  item: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
});

export default Order;
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Animated } from 'react-native';
import * as Notifications from 'expo-notifications';

// Configuração das notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Checkout = ({ route, navigation }) => {
  const { cart = [] } = route.params || {};
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const buttonAnim = useRef(new Animated.Value(1)).current;

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  };

  const handleCheckout = async () => {
    if (cart.length === 0) {
      Alert.alert('Erro', 'O carrinho está vazio. Adicione itens antes de continuar.');
      return;
    }
    if (!address || !paymentMethod) {
      Alert.alert('Erro', 'Preencha todos os campos antes de finalizar o pedido.');
      return;
    }

    // Animação do botão
    Animated.sequence([
      Animated.timing(buttonAnim, { toValue: 0.9, duration: 100, useNativeDriver: true }),
      Animated.timing(buttonAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start(async () => {
      // Exibe a notificação
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Pedido Confirmado ✅',
          body: `Seu pedido no valor de R$ ${calculateTotal()} foi finalizado com sucesso!`,
        },
        trigger: null, // Notificação instantânea
      });

      // Navega para a tela inicial
      navigation.navigate('Home');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Revisar Pedido</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Itens do Pedido:</Text>
        {cart.map((item) => (
          <Text key={item.id}>- {item.name}: R$ {item.price.toFixed(2)}</Text>
        ))}
        <Text style={styles.total}>Total: R$ {calculateTotal()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Endereço de Entrega:</Text>
        <TextInput
          style={[styles.input, address && styles.inputFilled]}
          placeholder="Digite o endereço"
          value={address}
          onChangeText={setAddress}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Método de Pagamento:</Text>
        <TextInput
          style={[styles.input, paymentMethod && styles.inputFilled]}
          placeholder="Digite o método de pagamento"
          value={paymentMethod}
          onChangeText={setPaymentMethod}
        />
      </View>

      <Animated.View style={{ transform: [{ scale: buttonAnim }] }}>
        <TouchableOpacity style={styles.button} onPress={handleCheckout}>
          <Text style={styles.buttonText}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </Animated.View>
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
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default Checkout;

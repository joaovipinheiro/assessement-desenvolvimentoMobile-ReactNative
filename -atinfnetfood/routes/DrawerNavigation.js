import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Products from '../screens/Products';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import Order from '../screens/Order';
import Restaurant from '../screens/Restaurant';
import Checkout from '../screens/Checkout';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#6200ee', // Cor do cabeçalho
        },
        headerTintColor: '#fff', // Cor do texto no cabeçalho
        drawerStyle: {
          backgroundColor: '#f3f3f3', // Cor de fundo do menu lateral
        },
        drawerActiveTintColor: '#6200ee', // Cor do item ativo
        drawerInactiveTintColor: '#333', // Cor do item inativo
        drawerLabelStyle: {
          fontWeight: 'bold', // Deixa os rótulos dos itens em negrito
          fontSize: 16, // Tamanho da fonte do label
        },
        drawerIcon: ({ focused, color, size }) => {
          let iconName;

          // Ícones baseados no nome da rota
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Products':
              iconName = focused ? 'shirt' : 'shirt-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'Order':
              iconName = focused ? 'clipboard' : 'clipboard-outline';
              break;
            case 'Cart':
              iconName = focused ? 'cart' : 'cart-outline';
              break;
            case 'Restaurant':
              iconName = focused ? 'restaurant' : 'restaurant-outline';
              break;
            case 'Checkout':
              iconName = focused ? 'cash' : 'cash-outline';
              break;
            case 'Settings':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            default:
              iconName = 'help-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* Telas no Drawer */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Products" component={Products} />
      <Drawer.Screen name="Cart" component={Cart}  initialParams={{ cart: [] }}/>
      <Drawer.Screen name="Order" component={Order} />
      <Drawer.Screen name="Restaurant" component={Restaurant} />
      <Drawer.Screen name="Checkout" component={Checkout} initialParams={{ cart: [] }}/>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

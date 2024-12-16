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
import Map from '../screens/Map';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#6200ee',
        },
        headerTintColor: '#fff', 
        drawerStyle: {
          backgroundColor: '#f3f3f3', 
        },
        drawerActiveTintColor: '#6200ee', 
        drawerInactiveTintColor: '#333', 
        drawerLabelStyle: {
          fontWeight: 'bold', 
          fontSize: 16, 
        },
        drawerIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'Products':
              iconName = focused ? 'cube' : 'cube-outline';
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
            case 'Map':
              iconName = focused ? 'map' : 'map-outline';  
              break;
            default:
              iconName = 'help-circle'; 
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
   
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Products" component={Products} initialParams={{ cart: [1] }} />
      <Drawer.Screen name="Cart" component={Cart}  initialParams={{ cart: [] }}/>
      <Drawer.Screen name="Order" component={Order} />
      <Drawer.Screen name="Restaurant" component={Restaurant} />
      <Drawer.Screen name="Checkout" component={Checkout} initialParams={{ cart: [] }}/>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Map" component={Map} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

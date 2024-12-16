import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { restaurants } from '../data/MockData';


const Map = () => {
  // Coordenadas do centro do Rio de Janeiro
  const centerCoordinates = {
    latitude: -22.9068,
    longitude: -43.1729,
  };

  const navigation = useNavigation();

  // Função para lidar com o clique no restaurante
  const handleRestaurantClick = (restaurantId) => {
    navigation.navigate('Restaurant', { restaurantId });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: centerCoordinates.latitude,
          longitude: centerCoordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Marcadores para os restaurantes */}
        {restaurants.map((restaurant) => (
         <Marker
  key={restaurant.id}
  coordinate={{
    latitude: restaurant.latitude,
    longitude: restaurant.longitude,
  }}
  title={restaurant.name}
  description={`Localização do ${restaurant.name}`}
  onPress={() => handleRestaurantClick(restaurant.id)} // Passa o ID do restaurante
/>

        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;
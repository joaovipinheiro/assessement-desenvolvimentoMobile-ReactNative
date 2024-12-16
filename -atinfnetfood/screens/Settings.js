import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Settings = () => {
  // Estado para controlar se o tema é claro ou escuro
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Função para alternar entre temas
  const toggleTheme = () => {
    setIsDarkTheme(previousState => !previousState);
  };

  return (
    <View style={[styles.container, isDarkTheme ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.title, isDarkTheme ? styles.darkText : styles.lightText]}>Configurações</Text>

      {/* Switch para alternar o tema */}
      <View style={styles.themeSwitchContainer}>
        <Text style={[styles.label, isDarkTheme ? styles.darkText : styles.lightText]}>Tema Escuro</Text>
        <Switch
          value={isDarkTheme}
          onValueChange={toggleTheme}
        />
      </View>
    </View>
  );
};

// Estilos para tema claro e escuro
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
  themeSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});

export default Settings;

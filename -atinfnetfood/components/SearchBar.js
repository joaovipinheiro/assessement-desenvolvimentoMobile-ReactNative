// src/components/SearchBar.js

import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Pesquisar Categorias..."
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 35,
    fontSize: 16,
  },
});

export default SearchBar;

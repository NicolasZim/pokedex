import React, { createContext, useContext, useState } from 'react';

import { PokemonList } from '../types/pokemon';

interface FavoritesContextData {
  favorites: PokemonList[];
  updateFav: (poke: PokemonList) => void;
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData,
);

interface FavoitesProvider {
  children: React.ReactNode;
}

const FavoritesProvider: React.FC<FavoitesProvider> = ({ children }) => {
  const [favorites, setFavorites] = useState<PokemonList[]>(() => {
    const favStorage = localStorage.getItem('@Pokémon:Favorites');
    if (!favStorage) {
      localStorage.setItem('@Pokémon:Favorites', JSON.stringify([]));
      return [];
    }

    const parsedData = JSON.parse(favStorage);
    if (!parsedData || typeof parsedData !== 'object') {
      localStorage.setItem('@Pokémon:Favorites', JSON.stringify([]));
      return [];
    }
    if (Number.isNaN(parsedData[0])) {
      localStorage.setItem('@Pokémon:Favorites', JSON.stringify([]));
      return [];
    }

    return parsedData;
  });

  const updateFav = async (poke: PokemonList): Promise<void> => {
    const isInFavorites = favorites.find((item) => item.name === poke.name);
    let newFavorites;

    if (isInFavorites) {
      newFavorites = favorites.filter((item) => item.name !== poke.name);
    } else {
      newFavorites = [...favorites, poke];
    }

    setFavorites(newFavorites);
    localStorage.setItem('@Pokémon:Favorites', JSON.stringify(newFavorites));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, updateFav }}>
      {children}
    </FavoritesContext.Provider>
  );
};

function useFavorites(): FavoritesContextData {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
}

export { useFavorites, FavoritesProvider };

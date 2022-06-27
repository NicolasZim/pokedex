import React from 'react';
import { useHistory } from 'react-router-dom';
import { CgArrowLeftO } from 'react-icons/cg';

import { useFavorites } from '../../hooks/favorite';
import PokeCard from '../../components/PokeCard';
import { Container, PokemonList } from './styles';

const PokeFavorite: React.FC = () => {
  const history = useHistory();
  const { favorites } = useFavorites();

  const onPokeCardClick = (pokemon: string) => {
    history.push(`/pokemon/${pokemon}`);
  };

  return (
    <Container>
      <CgArrowLeftO onClick={() => history.push('/')} />

      <h1>Your favorites Pokémon's</h1>

      <PokemonList id="pokeList">
        {favorites &&
          favorites.length > 0 &&
          favorites.map((pokemon) => (
            <PokeCard
              key={pokemon.name}
              info={pokemon}
              onClick={() => onPokeCardClick(pokemon.name)}
            />
          ))}
      </PokemonList>
    </Container>
  );
};

export default PokeFavorite;

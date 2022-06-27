import React, { useMemo } from 'react';

import { PokemonList } from '../../types/pokemon';
import { Container } from './styles';

const prefixPokePic =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
interface PokemonCardProps {
  info: PokemonList;
  onClick: () => void;
}

const PokeCard: React.FC<PokemonCardProps> = ({ info, onClick }) => {
  const pokeImage = useMemo(() => {
    const pokeUrlArr = info.url.split('/');
    const pokeId = pokeUrlArr[pokeUrlArr.length - 2];

    return `${prefixPokePic}${pokeId}.png`;
  }, [info.url]);

  return (
    <Container className="pokeCard" onClick={onClick}>
      <img src={pokeImage} alt={info.name} />
      <strong>{info.name}</strong>
    </Container>
  );
};

export default PokeCard;

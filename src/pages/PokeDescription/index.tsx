import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Pokemon } from 'pokenode-ts';
import { GrFavorite } from 'react-icons/gr';
import { CgArrowLeftO } from 'react-icons/cg';

import { useFavorites } from '../../hooks/favorite';
import { api } from '../../services/api';
import {
  Container,
  StatSection,
  GroupSection,
  DescriptionSection,
} from './styles';

const PokeDescription: React.FC = () => {
  const { favorites, updateFav } = useFavorites();
  const { pokeName } = useParams<{ pokeName?: string }>();
  const history = useHistory();

  const [pokemon, setPokemon] = useState<Pokemon | undefined>();

  useEffect(() => {
    const getPokeData = async () => {
      try {
        const response = await api().get(`/pokemon/${pokeName}`);
        setPokemon(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (!pokeName) {
      history.push('/');
    } else {
      getPokeData();
    }
  }, []);

  const isFavoritePokemon = useMemo(() => {
    if (!favorites?.length || !pokemon) return false;
    const favoritesFiltered = favorites.filter(
      (item) => item.name === pokemon.name,
    );

    return favoritesFiltered.length > 0 ? true : false;
  }, [favorites, pokemon]);

  return (
    <Container>
      {!pokemon && <h1>Searching in the Pokédex</h1>}
      {pokemon && (
        <>
          <GrFavorite
            className={isFavoritePokemon ? 'isFavorite' : ''}
            onClick={() => {
              updateFav({
                name: pokemon.name,
                url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`,
              });
            }}
          />
          <CgArrowLeftO onClick={() => history.push('/')} />
          <img
            src={
              (pokemon.sprites as any).other['official-artwork'][
                'front_default'
              ]
            }
            alt={pokemon.name}
          />
          <h1>{pokemon.name}</h1>
          <DescriptionSection>
            <StatSection>
              <strong>Stats</strong>
              {pokemon.stats.map((stats) => (
                <div key={stats.stat.name}>
                  <strong>{stats.stat.name}:</strong>
                  <span>{stats.base_stat}</span>
                </div>
              ))}
              <div></div>
            </StatSection>

            <GroupSection>
              <div>
                <strong>Types</strong>
                {pokemon.types.map((type) => (
                  <span key={type.type.name}>{type.type.name}</span>
                ))}
              </div>

              <strong>Weight: {pokemon.weight} pounds</strong>
              <strong>Height: {pokemon.height} ft</strong>

              <strong>Base experience: {pokemon.base_experience} xp</strong>
            </GroupSection>
          </DescriptionSection>
        </>
      )}
    </Container>
  );
};

export default PokeDescription;

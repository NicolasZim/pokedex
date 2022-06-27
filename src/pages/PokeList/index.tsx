import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { requestPokemonList } from '../../services/api';

import PokeCard from '../../components/PokeCard';
import { Container, PokemonList } from './styles';
import reducer, { initialState } from './reducer';
import { ReactComponent as PuffSVG } from '../../assets/puff.svg';

const lastPokeCardSelector = '#pokeList > div:last-child';

const Home = () => {
  const history = useHistory();
  const [pokemons, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onPokeCardClick = (pokemon: string) => {
    history.push(`/pokemon/${pokemon}`);
  };

  // const requestMore = async (): Promise<void> => {
  const requestMore = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    console.log('RequestMore');

    const response = await requestPokemonList({ offset: pokemons.offset });
    if (response.isErrored) {
      setIsLoading(false);
      return;
    }

    dispatch({ type: 'INSERT_DATA', payload: response.result });
    setIsLoading(false);

    setTimeout(() => {
      let lastPokemon = document.querySelector(lastPokeCardSelector) as Element;

      // Observe the element, when he appears in the screen, request more again.
      const observer = new IntersectionObserver(
        async (entries, thisObserver): Promise<void> => {
          if (entries[0].isIntersecting) {
            const element = entries[0].target;
            if (element === lastPokemon) {
              if (isLoading) {
                console.log('Observer Trigger and the Reducer its loading');
                return;
              }
              console.log('FIXED!!!');
              requestMore();
              thisObserver.unobserve(lastPokemon);
            }
          }
        },
        {
          rootMargin: '0px 0px -200px 0px',
        },
      );

      observer.observe(lastPokemon);
    }, 250);
  }, [isLoading, pokemons.offset]);

  useEffect(() => {
    // Forcing that the useEffect will only call the function once.
    if (pokemons.data.length === 0 && isLoading === true) requestMore();

    // Removing any dependencies in the array force that useEffect run once.
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   let mounted = true;
  //   let lastPokemon = document.querySelector('#pokeList') as Element;
  //   // let lastPokemon = document.querySelector(lastPokeCardSelector) as Element;

  //   // Observe the element, when he appears in the screen, request more again.
  //   const observer = new IntersectionObserver(
  //     async (entries, thisObserver): Promise<void> => {
  //       if (entries[0].isIntersecting) {
  //         const element = entries[0].target;
  //         if (element === lastPokemon) {
  //           console.log('Observer Trigger', entries);
  //           if (!mounted || pokemons.isLoading) return;
  //           requestMore();
  //           thisObserver.observe(lastPokemon);
  //         }
  //       }
  //     },
  //     {
  //       root: document.querySelector('#container'),
  //       // root: document.querySelector('#pokeList'),
  //       rootMargin: '0px 0px -200px 0px',
  //       // threshold: [0.9, 1],
  //     },
  //   );

  //   observer.observe(lastPokemon);

  //   // cleanup function.
  //   return () => {
  //     mounted = false;
  //     observer.unobserve(lastPokemon);
  //   };
  // }, []);

  return (
    <Container id="container">
      <NavLink to="/favorites">Favorites</NavLink>

      <PokemonList id="pokeList">
        {pokemons.data.map((pokemon) => (
          <PokeCard
            key={pokemon.name}
            info={pokemon}
            onClick={() => onPokeCardClick(pokemon.name)}
          />
        ))}
      </PokemonList>

      {isLoading && <PuffSVG />}
    </Container>
  );
};

export default Home;

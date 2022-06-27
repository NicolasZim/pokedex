import styled from 'styled-components';
import { fadeIn } from '../../styles/global';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 18px;

  > h1 {
    font-size: 2rem;
    color: #000;
    text-transform: capitalize;
    margin-top: 8px;
    font-family: 'Lobster', sans-serif;
  }

  > svg {
    cursor: pointer;
    position: absolute;
    left: 50px;
    top: 50px;

    color: #000;
    transition: filter 0.25s ease;

    &:hover {
      filter: brightness(75%);
    }
  }
`;

export const PokemonList = styled.section`
  width: 100%;
  display: grid;

  margin-top: 32px;
  padding-bottom: 32px;
  grid-template-columns: repeat(auto-fill, 275px);
  row-gap: 16px;
  column-gap: 16px;

  grid-auto-flow: row;
  justify-content: center;

  animation: ${fadeIn} 0.25s ease forwards;
`;

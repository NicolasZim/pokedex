import styled from 'styled-components';
import { fadeIn } from '../../styles/global';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 18px;

  > a {
    cursor: pointer;
    border-radius: 8px;
    padding: 8px;
    border: 2px solid #bd322d;
    background-color: #eb3f39;
    color: #fff;

    transition: filter 0.25s ease;

    &:hover {
      filter: brightness(75%);
    }
  }

  > svg {
    width: 50px;
    height: 50px;
    animation: ${fadeIn} 0.25s ease forwards;
    margin: 0 auto;
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

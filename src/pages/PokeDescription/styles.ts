import styled from 'styled-components';
import { fadeIn } from '../../styles/global';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  animation: ${fadeIn} 0.25s ease forwards;

  > img {
    width: 100%;
    height: auto;
    max-width: 250px;
  }

  > h1 {
    font-size: 2rem;
    color: #000;
    text-transform: capitalize;
    margin-top: 8px;
    font-family: 'Lobster', sans-serif;
  }

  > svg:nth-of-type(1) {
    cursor: pointer;
    position: absolute;
    right: 50px;
    top: 50px;

    color: #000;
    transition: filter 0.25s ease;

    &.isFavorite {
      > path {
        fill: red;
      }
    }

    &:hover {
      filter: brightness(75%);
    }
  }

  > svg:nth-of-type(2) {
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

export const DescriptionSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  > * + * {
    margin-left: 32px;
  }
`;

export const StatSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 16px;

  > strong {
    font-weight: bold;
    font-size: 1.25rem;
    color: #000;
    margin-bottom: 8px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-items: flex-start;

    > strong {
      font-weight: italic;
      font-size: 1.1rem;
      color: #000;
      margin-right: 4px;
    }

    > span {
      font-size: 1rem;
      color: #000;
    }

    + div {
      margin-top: 8px;
    }
  }
`;

export const GroupSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 16px;

  > * + * {
    margin-top: 16px;
  }

  strong {
    font-weight: bold;
    font-size: 1.25rem;
    color: #000;
    margin-bottom: 8px;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span {
      font-size: 1.1rem;
      color: #000;
    }
  }
`;

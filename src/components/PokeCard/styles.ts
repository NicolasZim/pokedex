import styled from 'styled-components';
import { fadeIn } from '../../styles/global';

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #0075be;
  background-color: #e6e6e6;
  border-radius: 12px;
  padding: 16px 32px;

  animation: ${fadeIn} 0.25s ease forwards;

  transition: filter 0.25s ease;

  &:hover {
    filter: brightness(95%);
  }

  > img {
    width: 100%;
    height: auto;
    min-width: 100px;
  }

  > strong {
    font-weight: bold;
    font-size: 1.25rem;
    color: #000;
    text-transform: capitalize;
    margin-top: 8px;
  }
`;

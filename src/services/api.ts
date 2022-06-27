import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { PokemonList } from '../types/pokemon';
const baseUrl = 'https://pokeapi.co/api/v2';

export const api = (): AxiosInstance => {
  return axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
};

interface RequestPokemonProps {
  offset?: number | string;
  limit?: number | string;
}

type RequestPokemonResult =
  | {
      result: string;
      isErrored: true;
    }
  | { result: PokemonList[]; isErrored: false };

export const requestPokemonList = async ({
  limit = 30,
  offset = '',
}: RequestPokemonProps): Promise<RequestPokemonResult> => {
  try {
    const response = await api().request({
      url: `/pokemon?offset=${offset}&limit=${limit}`,
      method: 'GET',
    });

    return {
      result: response.data.results,
      isErrored: false,
    };
  } catch (err) {
    return {
      result: err as string,
      isErrored: true,
    };
  }
};

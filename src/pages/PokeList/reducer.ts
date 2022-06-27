import { PokemonList } from '../../types/pokemon';

interface InitialState {
  data: PokemonList[];
  offset: number;
  // isLoading: boolean;
}

enum ActionsEnum {
  insertData = 'INSERT_DATA',
  // updateLoading = 'UPDATE_LOADING',
}

type Actions = { type: 'INSERT_DATA'; payload: PokemonList[] };
// | { type: 'UPDATE_LOADING'; payload: boolean };

export const initialState: InitialState = {
  data: [],
  offset: 0,
  // isLoading: true,
};

type MyReducer<State, Action> = (state: State, action: Action) => State;

const reducer: MyReducer<InitialState, Actions> = (state, action) => {
  switch (action.type) {
    case ActionsEnum.insertData:
      const newData = [...state.data, ...action.payload];
      return {
        data: [...state.data, ...action.payload],
        offset: newData.length,
        isLoading: false,
      };

    // case ActionsEnum.updateLoading:
    //   return {
    //     ...state,
    //     isLoading: action.payload,
    //   };

    default:
      return state;
  }
};

export default reducer;

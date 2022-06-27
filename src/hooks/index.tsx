import React from 'react';

import { FavoritesProvider } from './favorite';

interface Props {
  children: React.ReactNode;
}
const AppProvider: React.FC<Props> = ({ children }) => {
  return <FavoritesProvider>{children}</FavoritesProvider>;
};

export default AppProvider;

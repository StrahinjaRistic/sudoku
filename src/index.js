import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { GameContextProvider } from 'context/game-context';

ReactDOM.render(
  <GameContextProvider>
    <App />
  </GameContextProvider>,
  document.getElementById('root')
);

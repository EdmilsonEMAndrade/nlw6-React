import { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './page/Home';
import { NewRoom } from './page/NewRoom';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path='/' component={Home} exact />
        <Route path='/rooms/new' component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

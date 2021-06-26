import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './page/Home';
import { NewRoom } from './page/NewRoom';
import { Room } from './page/Room';
import { AdminRoom } from './page/AdminRoom';

import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/rooms/new' component={NewRoom} exact/>
          <Route path='/rooms/:id' component={Room}/>
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

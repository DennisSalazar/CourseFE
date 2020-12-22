import React from 'react';
import './App.css';

import { UsersList } from './features/users/usersList';
import Login from './features/login/login';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/users" component={UsersList} />
        <Route path="/" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;

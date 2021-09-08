import React from 'react';
import { Switch,Route} from 'react-router-dom';
import Afficheur from './pages/Afficheur';
import ServiceClient from './pages/ServiceClient';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ServiceClient} ></Route>
      <Route exact path="/Afficheur" component={Afficheur} ></Route>

     
    </Switch>
  );
};

export default App;
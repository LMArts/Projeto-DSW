import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FormLogin from './components/login/login';
import Teste from './components/teste/teste';
import './styles.css';

class App extends Component{
  render(){
    return(
      <div className = "App" >
        <main>
          <Switch>
            <Route exact path="/" component={FormLogin} />
            <Route path="/page" component={Teste} />
          </Switch>
        </main>
      </div >
    )
  }
};
export default App;

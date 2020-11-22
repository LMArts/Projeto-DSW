import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FormLogin from './components/login/login';
import Menu from './components/menu/menu';
import Qrcode from './components/qrcode/qrcode';
import ViewChild from './components/viewChilds/viewChilds'
import CadResponsavel from './components/cadResponsavel/cadResponsavel';
import CadCrianca from './components/cadCrianca/cadCrianca';
import Teste from './components/teste/teste';
import './styles.css';

class App extends Component{
  render(){
    return(
      <div className = "App" >
        <main>
          <Switch>
            <Route exact path="/login" component={FormLogin} />
            <Route path="/menu" component={Menu} />
            <Route path="/qrcode" component={Qrcode} />
            <Route path="/child" component={ViewChild} />
            <Route path="/cadastro_responsavel" component={CadResponsavel} />
            <Route path="/cadastro_crianca" component={CadCrianca} />
            <Route path="/teste" component={Teste} />
          </Switch>
        </main>
      </div >
    )
  }
};
export default App;

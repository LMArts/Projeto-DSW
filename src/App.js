import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FormLogin from './components/login/login';
import Menu from './components/menu/menu';
import Qrcode from './components/qrcode/qrcode';
import ViewChild from './components/viewChilds/viewChilds'
import CadResponsavel from './components/cadResponsavel/cadResponsavel';
import CadCrianca from './components/cadCrianca/cadCrianca';
import PerfilResp from './components/perfilResponsavel/perfilResp';
import PerfilCrianca from './components/perfilCrianca/perfilCrianca'
import './styles.css';

class App extends Component{
  render(){
    return(
      <div className = "App" >
        <main>
          <Switch>
            <Route exact path="/" component={FormLogin} />
            <Route path="/menu" component={Menu} />
            <Route path="/qrcode" component={Qrcode} />
            <Route path="/child" component={ViewChild} />
            <Route path="/cadastro_responsavel" component={CadResponsavel} />
            <Route path="/cadastro_crianca" component={CadCrianca} />
            <Route path="/perfil_responsavel" component={PerfilResp} />
            <Route path="/perfil_crianca" component={PerfilCrianca} />
          </Switch>
        </main>
      </div >
    )
  }
};
export default App;

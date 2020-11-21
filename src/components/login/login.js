import './login.css';
import location from './location.png';
import { Link } from 'react-router-dom';

const FormLogin = () => (
    <div className="containerLogin">
        <img src={location} alt='logo'/>
        <input type="email" placeholder="Email" className="field" />
        <input type="password" placeholder="Senha" className="field" />
        <Link to='/page'><button className="btnLogin">Entrar</button></Link>
        <a href="#" className="linkLogin">Ainda não tenho cadastro!</a>
    </div>
);

export default FormLogin;


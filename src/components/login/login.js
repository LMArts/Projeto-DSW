import './login.css';
import location from '../../image/location.png';
import { Link } from 'react-router-dom';

const FormLogin = () => (
    <div className="containerLogin">
        <img src={location} alt='logo'/>
        <input type="email" placeholder="Email" className="field" />
        <input type="password" placeholder="Senha" className="field" />
        <Link to='/menu'><button className="btnLogin">Entrar</button></Link>
        <Link to='/cadastro_responsavel' className="linkLogin">Ainda não tenho cadastro!</Link>
    </div>
);

export default FormLogin;


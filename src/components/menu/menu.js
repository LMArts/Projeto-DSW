import './menu.css';
import close from '../../image/close.png';
import childs from '../../image/childs.png';
import users from '../../image/user.png';
import qrcode from '../../image/qrcode.png';


const Menu = () => (
    <div className="container_menu">
        <div className="block_headerMenu">
            <div class="block_welcomeMenu">
                <h1 className="welcomeMenu">Bem vindo(a)!</h1>
            </div>
            <div className="block_closeMenu">
                <a className="closeMenu" href="/"><img src={close} alt="close" /></a>
            </div>
        </div>
        <div className="content_menu">
            <a className="menuItem" href="/child">
                <div className="card_info">
                    <img src={childs} alt="criança" />
                    <h4>Criança</h4>
                </div>
            </a>
            <a className="menuItem" href="/perfil_responsavel">
                <div className="card_info">
                    <img src={users} alt="usuario" />
                    <h4>Perfil</h4>
                </div>
            </a>
            <a className="menuItem" href="/qrcode">
                <div className="card_info">
                    <img src={qrcode} alt="qrcode" />
                    <h4>QRcode</h4>
                </div>
            </a>
        </div>
    </div>
);

export default Menu;
import './qrcode.css';
import qrcode from '../../image/qrcode.png';
import voltar from '../../image/return.png';
const Qrcode = () => (
  <div className="container_general">
    <a className="returnQrcode" href="/menu"><img src={voltar} alt="voltar"/></a>
    <div class="container_qrcode">
      <img src={qrcode} alt="qrcode"/>
      <p>Nome: Gabriela Silva</p>
      <p>Sexo: Feminino</p>
      <p>Grau de Parentesco: Filha</p>
      <p>Cor do cabelo: Catanho claro</p>
      <p>Cor dos olhos: Catanho escuro</p>
      <p>Tom da pele: Branca</p>
      <button className="btnShare">Compartilhar</button>
    </div>
  </div>
);

export default Qrcode;


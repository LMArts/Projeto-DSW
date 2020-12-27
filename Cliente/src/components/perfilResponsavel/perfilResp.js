import './perfilResp.css';
import voltar from '../../image/return.png';
import { Link } from 'react-router-dom';


const PerfilResp = () => (
  <div class="container_perfilResp">
  <div class="block_return">
    <a href="/menu"><img src={voltar} alt="return"/></a>
    <span>Meu perfil</span>
  </div>
  <div class="content_perfilResp">
    <div class="form_controlResp">
      <div class="form_informationResp">
        <label className="labelResp">Nome:</label>
        <input type="text" className="inputResp" value='Julia Silva'/>
      </div>
      <div class="form_informationResp">
        <label className="labelResp">Telefone:</label>
        <input type="text" className="inputResp" value='(11)7070-7060'/>
      </div>
      <div class="form_informationResp">
        <label className="labelResp">Cidade:</label>
        <input type="text" className="inputResp" value='São Paulo'/>
      </div>
    </div>
    <div class="form_controlResp">
      <div class="form_informationResp">
        <label className="labelResp">E-mail:</label>
        <input type="email" className="inputResp" value='julia@gmail.com'/>
      </div>
      <div class="form_informationResp">
        <label className="labelResp">Estado:</label>
        <input type="text" className="inputResp" value='São Paulo'/>
      </div>
      <div class="form_informationResp">
        <label className="labelResp">Rua:</label>
        <input type="text" className="inputResp" value='Rua das Violetas'/>
      </div>
    </div>
    <div class="form_controlResp">
      <div class="form_informationResp">
        <label className="labelResp">Senha:</label>
        <input type="password" className="inputResp" value='ddddd'/>
      </div>
      <div class="form_informationResp">
        <label className="labelResp">Bairro:</label>
        <input type="text" className="inputResp" value='VIla Rosas'/>
      </div>
      <div class="form_informationResp">
        <label className="labelResp">Nº:</label>
        <input type="number" className="inputResp" value='1234'/>
      </div>
    </div>
    
  </div>
  <div className="btnContainer_Resp">
    <Link to='/menu'><button className="btnPerfilResp">Atualizar Cadastro</button></Link>
    <Link to='/menu'><button className="btnPerfilResp">Excluir cadastro</button></Link>

    </div>
</div>
);

export default PerfilResp;


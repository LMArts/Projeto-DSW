import './perfilCrianca.css';
import voltar from '../../image/return.png';
import { Link } from 'react-router-dom';


const PerfilCrianca = () => (
  <div class="container_perfilCrianca">
  <div class="block_return">
    <a href="/child"><img src={voltar} alt="return"/></a>
    <span>Meu perfil</span>
  </div>
  <div class="content_perfilCrianca">
    <div class="form_controlCrianca">
      <div class="form_informationCrianca">
        <label className="labelCrianca">Nome:</label>
        <input type="text" className="inputCrianca" value='Gabriela Silva'/>
      </div>
      <div class="form_informationCrianca">
        <label className="labelCrianca">Cor do cabelo:</label>
        <input type="text" className="inputCrianca" value='Castanho claro'/>
      </div>
    </div>
    <div class="form_controlCrianca">
      <div class="form_informationCrianca">
        <label className="labelCrianca">Sexo:</label>
        <input type="text" className="inputCrianca" value='Feminino'/>
      </div>
      <div class="form_informationCrianca">
        <label className="labelCrianca">Cor dos olhos:</label>
        <input type="text" className="inputCrianca" value='Castanho escuro'/>
      </div>
    </div>
    <div class="form_controlCrianca">
      <div class="form_informationCrianca">
        <label className="labelCrianca">Grau de parentesco:</label>
        <input type="text" className="inputCrianca" value='Filha'/>
      </div>
      <div class="form_informationCrianca">
        <label className="labelCrianca">Tom de pele:</label>
        <input type="text" className="inputCrianca" value='Branca'/>
      </div>
    </div>
    <div class="form_controlCrianca row_child">
      <div class="form_informationCrianca">
        <label className="labelCrianca">Descrição adicional:</label>
        <input type="text" className="inputCrianca rowInputChild" />
      </div>
    </div>
    
  </div>
  <div className="btnContainer_Crianca">
    <Link to='/menu'><button className="btnPerfilCrianca">Atualizar Cadastro</button></Link>
    <Link to='/menu'><button className="btnPerfilCrianca">Excluir cadastro</button></Link>

    </div>
</div>
);

export default PerfilCrianca;


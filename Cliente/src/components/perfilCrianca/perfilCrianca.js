import './perfilCrianca.css';
import voltar from '../../image/return.png';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function PerfilCrianca () {

  const [crianca, setCrianca] = useState([]);
  const [nome, setNome] = useState(null);
  const [dataNasc, setDataNasc] = useState(null);
  const [sexo, setSexo] = useState(null);
  const [grauParentesco, setGrauParentesco] = useState(null);
  const [corOlho, setCorOlho] = useState(null);
  const [corCabelo, setCorCabelo] = useState(null);
  const [tipoCabelo, setTipoCabelo] = useState(null);
  const [tomPele, setTomPele] = useState(null);
  const [observacao, setObservacao] = useState(null);
  const [qrcodeId, setQrcodeId] = useState(null);

  let {id} = useParams();

  useEffect(() => {
    selectCrianca();
  }, [])

  const selectCrianca = () => {
    Axios.post('http://localhost:3001/selectCrianca2', {
      id: id,
    }).then(response => {
      setCrianca(response.data[0]);
    })
  }


  const deleteCrianca = () => {
    Axios.post('http://localhost:3001/deleteCrianca', {
      id: id,
    }).then(() => {
      alert("Sucesso!");
    });
  };

  const updateCrianca = () => {
    Axios.post('http://localhost:3001/updateCrianca', {
      id: id,
      nome: nome,
      dataNasc: dataNasc,
      sexo: sexo,
      grauParentesco: grauParentesco,
      corOlho: corOlho,
      corCabelo: corCabelo,
      tipoCabelo: tipoCabelo,
      tomPele: tomPele,
      observacao: observacao
    }).then(() => {
      alert("Sucesso!");
    });
  };

  return(
    <div class="container_perfilCrianca">
      <div class="block_return">
        <a href="/child"><img src={voltar} alt="return" /></a>
        <span>Meu perfil</span>
      </div>

      <div class="content_perfilCrianca">

        <div class="form_controlCrianca">
          <div class="form_informationCrianca">
            <label className="labelCrianca">Nome: {crianca.nome}</label>
            <input type="text" className="inputCrianca" onChange={(e) => {
              setNome(e.target.value);
            }} />
          </div>
          <div class="form_informationCrianca">
            <label className="labelCrianca">Cor do cabelo: {crianca.corCabelo}</label>
            <input type="text" className="inputCrianca" onChange={(e) => {
              setCorCabelo(e.target.value);
            }} />
          </div>
        </div>

        <div class="form_controlCrianca">
          <div class="form_informationCrianca">
            <label className="labelCrianca">Sexo: {crianca.sexo}</label>
            <input type="text" className="inputCrianca" onChange={(e) => {
              setSexo(e.target.value);
            }} />
          </div>
          <div class="form_informationCrianca">
            <label className="labelCrianca">Cor dos olhos: {crianca.corOlho}</label>
            <input type="text" className="inputCrianca" onChange={(e) => {
              setCorOlho(e.target.value);
            }} />
          </div>
        </div>

        <div class="form_controlCrianca">
          <div class="form_informationCrianca">
            <label className="labelCrianca">Tipo de Cabelo: {crianca.tipoCabelo}</label>
            <input type="text" className="inputCrianca" onChange={(e) => {
              setTipoCabelo(e.target.value);
            }} />
          </div>
          <div class="form_informationCrianca">
            <label className="labelCrianca">Data de Nascimento: {crianca.dataNasc}</label>
            <input type="text" className="inputCrianca" onChange={(e) => {
              setDataNasc(e.target.value);
            }} />
          </div>
        </div>
        <div class="form_controlCrianca">
          <div class="form_informationCrianca">
            <label className="labelCrianca">Grau de parentesco: {crianca.grauParentesco}</label>
            <input type="text" className="inputCrianca" onChange={(e) => {
              setGrauParentesco(e.target.value);
            }} />
          </div>
          <div class="form_informationCrianca">
            <label className="labelCrianca">Tom de pele: {crianca.tomPele}</label>
            <input type="text" className="inputCrianca" onChange={(e) => {
              setTomPele(e.target.value);
            }} />
          </div>
        </div>
        <div class="form_controlCrianca row_child">
          <div class="form_informationCrianca">
            <label className="labelCrianca">Descrição adicional: {crianca.observacao}</label>
            <input type="text" className="inputCrianca rowInputChild" onChange={(e) => {
              setObservacao(e.target.value);
            }} />
          </div>
        </div>

      </div>
      <div className="btnContainer_Crianca">
        <Link to='/menu'><button onClick={updateCrianca} className="btnPerfilCrianca">Atualizar Cadastro</button></Link>
        <Link to='/menu'><button onClick={deleteCrianca}className="btnPerfilCrianca">Excluir cadastro</button></Link>

      </div>
    </div>
  )
};

export default PerfilCrianca;


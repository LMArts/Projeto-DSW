import './perfilResp.css';
import voltar from '../../image/return.png';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';



function PerfilResp () {

  const [usuario, setUsuario] = useState([]);
  const [nome, setNome] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [email, setEmail] = useState(null);
  const [cidade, setCidade] = useState(null);
  const [estado, setEstado] = useState(null);
  const [rua, setRua] = useState(null);
  const [bairro, setBairro] = useState(null);
  const [numero, setNumero] = useState(null);
  const [senha, setSenha] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:3001/select')
      .then(response => {
        setUsuario(response.data[0])
      })
  }, [])

  const deleteResp = () => {
    Axios.post('http://localhost:3001/delete', {
       id: usuario.id,
    }).then(() => {
      alert("Sucesso!");
    });
  };

  const updateResp = () => {
    Axios.post('http://localhost:3001/update', {
      id: usuario.id,
      nome: nome,
      telefone: telefone,
      email: email,
      cidade: cidade,
      estado: estado,
      rua: rua,
      bairro: bairro,
      numero: numero,
      senha: senha
    }).then(() => {
       alert("Sucesso!");
    });
  };

  return(
    <div class="container_perfilResp">

      <div class="block_return">
        <a href="/menu"><img src={voltar} alt="return" /></a>
        <span>Meu perfil</span>
      </div>

      <div class="content_perfilResp">

        <div class="form_controlResp">
          <div class="form_informationResp">
            <label className="labelResp">Nome: {usuario.nome}</label>
            <input type="text" className="inputResp" onChange={(e) => {
              setNome(e.target.value);
            }} />
          </div>
          <div class="form_informationResp">
            <label className="labelResp">Telefone: {usuario.telefone}</label>
            <input type="text" className="inputResp" onChange={(e) => {
              setTelefone(e.target.value);
            }} />
          </div>
          <div class="form_informationResp">
            <label className="labelResp">Email: {usuario.email}</label>
            <input type="text" className="inputResp" onChange={(e) => {
              setEmail(e.target.value);
            }} />
          </div>
        </div>

        <div class="form_controlResp">
          <div class="form_informationResp">
            <label className="labelResp">Estado: {usuario.estado}</label>
            <input type="email" className="inputResp" onChange={(e) => {
              setEstado(e.target.value);
            }} />
          </div>
          <div class="form_informationResp">
            <label className="labelResp">Cidade: {usuario.cidade}</label>
            <input type="text" className="inputResp" onChange={(e) => {
              setCidade(e.target.value);
            }} />
          </div>
          <div class="form_informationResp">
            <label className="labelResp">Rua: {usuario.rua}</label>
            <input type="text" className="inputResp" onChange={(e) => {
              setRua(e.target.value);
            }} />
          </div>
        </div>

        <div class="form_controlResp">
          <div class="form_informationResp">
            <label className="labelResp">Bairro: {usuario.bairro}</label>
            <input type="text" className="inputResp" onChange={(e) => {
              setBairro(e.target.value);
            }} />
          </div>
          <div class="form_informationResp">
            <label className="labelResp">Nº: {usuario.numero}</label>
            <input type="text" className="inputResp" onChange={(e) => {
              setNumero(e.target.value);
            }} />
          </div>
          <div class="form_informationResp">
            <label className="labelResp">Senha: {usuario.senha}</label>
            <input type="text" className="inputResp" onChange={(e) => {
              setSenha(e.target.value);
            }} />
          </div>
        </div>

      </div>
      
      <div className="btnContainer_Resp">
        <Link to='/menu'><button onClick={updateResp} className="btnPerfilResp">Atualizar Cadastro</button></Link>
        <Link to='/'><button onClick={deleteResp} className="btnPerfilResp">Excluir cadastro</button></Link>
      </div>

    </div>
  )
  
};

export default PerfilResp;


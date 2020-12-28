import './perfilResp.css';
import voltar from '../../image/return.png';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';



function PerfilResp () {

  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/select')
      .then(response => {
        setUsuario(response.data[0])
      })
  }, [])

  return(
    <div class="container_perfilResp">

      <div class="block_return">
        <a href="/menu"><img src={voltar} alt="return" /></a>
        <span>Meu perfil</span>
      </div>

      <div class="content_perfilResp">

        <div class="form_controlResp">
          <div class="form_informationResp">
            <label className="labelResp">Nome:</label>
            <input type="text" className="inputResp" value={usuario.nome} />
          </div>
          <div class="form_informationResp">
            <label className="labelResp">Telefone:</label>
            <input type="text" className="inputResp" value={usuario.telefone} />
          </div>
          <div class="form_informationResp">
            <label className="labelResp">Email:</label>
            <input type="text" className="inputResp" value={usuario.email} />
          </div>
        </div>

        <div class="form_controlResp">
          <div class="form_informationResp">
            <label className="labelResp">Estado:</label>
            <input type="email" className="inputResp" value={usuario.estado} />
          </div>
          <div class="form_informationResp">
            <label className="labelResp">Cidade:</label>
            <input type="text" className="inputResp" value={usuario.cidade} />
          </div>
          <div class="form_informationResp">
            <label className="labelResp">Rua:</label>
            <input type="text" className="inputResp" value={usuario.rua} />
          </div>
        </div>

        <div class="form_controlResp">
          <div class="form_informationResp">
            <label className="labelResp">Bairro:</label>
            <input type="text" className="inputResp" value={usuario.bairro} />
          </div>
          <div class="form_informationResp">
            <label className="labelResp">Nº:</label>
            <input type="number" className="inputResp" value={usuario.numero} />
          </div>
          <div class="form_informationResp">
            <label className="labelResp">Senha:</label>
            <input type="text" className="inputResp" value={usuario.senha} />
          </div>
        </div>

      </div>
      
      <div className="btnContainer_Resp">
        <Link to='/menu'><button className="btnPerfilResp">Atualizar Cadastro</button></Link>
        <Link to='/'><button className="btnPerfilResp">Excluir cadastro</button></Link>
      </div>

    </div>
  )
  
};

export default PerfilResp;


import './viewChilds.css';
import { Link } from 'react-router-dom';
import add from '../../image/add.png';
import voltar from '../../image/return.png';
import React, { useEffect, useState } from 'react';
import Axios from 'axios'

function ViewChild () {

  const [crianca, setCrianca] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/selectCrianca')
      .then((response) => {
        setCrianca(response.data);
      })
  }, [])

  return (
    <div className="container_viewChild">
      <div className="block_return">
        <a href="/menu"><img src={voltar} alt="return" /></a>
        <span>Crianças</span>
      </div>
      <div className="content_cardChilds">
        {crianca.map((item) => {
          return (
            <Link className="row_cardChilds" to={'/perfil_crianca'}>
              <div className="cardChilds">
                <h4>{item.nome}</h4>
              </div>
            </Link>  
          )
        })}
      </div>
      <div className="blockAddChild">
        <a href="/cadastro_crianca"><img src={add} alt="add" /></a>
      </div>
    </div>
  )
        
};

export default ViewChild;


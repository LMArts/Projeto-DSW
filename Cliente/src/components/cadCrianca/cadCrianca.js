import { Link } from 'react-router-dom';
import location from '../../image/location.png';
import './cadCrianca.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';


function CadCrianca () {

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

        const enviar = () => {
            Axios.post('http://localhost:3001/insertCrianca', {
                nome: nome,
                dataNasc: dataNasc,
                sexo: sexo,
                grauParentesco: grauParentesco,
                corOlho: corOlho,
                corCabelo: corCabelo,
                tipoCabelo: tipoCabelo,
                tomPele: tomPele,
                observacao: observacao,
                qrcodeId: qrcodeId
            }).then(() => {
                alert("Sucesso!");
            });
        };

        return (

            <form className='principal'>
                <img src={location} alt='logo' />
                <div className='box'>
                    <div>
                        <label>Nome</label>
                        <input type="text" className='field' onChange={(e) => {
                            setNome(e.target.value);
                        }}/>
                    </div>
                    <div className='form-control'>
                        <label>Data Nascimento</label>
                        <input type="text" className='field' onChange={(e) => {
                            setDataNasc(e.target.value);
                        }} />
                    </div>
                    <div className='form-row'>
                        <div className='form-control'>
                            <label>Sexo</label>
                            <input type="text" className='field' onChange={(e) => {
                                setSexo(e.target.value);
                            }}/>
                        </div>
                        <div className='form-control'>
                            <label>Grau de Parentesco</label>
                            <input type="text" className='field' onChange={(e) => {
                                setGrauParentesco(e.target.value);
                            }}/>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-control'>
                            <label>Cor do Cabelo</label>
                            <input type="text" className='field' onChange={(e) => {
                                setCorCabelo(e.target.value);
                            }}/>
                        </div>
                        <div className='form-control'>
                            <label>Cor dos Olhos</label>
                            <input type="text" className='field' onChange={(e) => {
                                setCorOlho(e.target.value);
                            }}/>
                        </div>
                    </div>
                    <div>
                        <label>Tipo de Cabelo</label>
                        <input type="text" className='field' onChange={(e) => {
                            setTipoCabelo(e.target.value);
                        }} />
                    </div>
                    <div>
                        <label>Tom da Pele</label>
                        <input type="text" className='field' onChange={(e) => {
                            setTomPele(e.target.value);
                        }}/>
                    </div>
                    <div>
                        <label>Descrição Adicional</label>
                        <textarea className="field" rows="10" onChange={(e) => {
                            setObservacao(e.target.value);
                        }}/>
                    </div>
                    <div>
                        <label>ID Qrcode</label>
                        <textarea className="field" type="text" onChange={(e) => {
                            setQrcodeId(e.target.value);
                        }} />
                    </div>

                    <Link to="/menu"><button onClick={enviar} className="btn">Finalizar Cadastro</button></Link>
                    <Link to="/child"><button className="btn">Cancelar</button></Link>
                </div>
            </form>

        );

};

export default CadCrianca;
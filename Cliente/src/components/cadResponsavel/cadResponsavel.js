import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import location from '../../image/location.png';
import './cadResponsavel.css';
import Axios from 'axios';

function CadResponsavel () {

    const [nome, setNome] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [email, setEmail] = useState(null);
    const [cidade, setCidade] = useState(null);
    const [estado, setEstado] = useState(null);
    const [rua, setRua] = useState(null);
    const [bairro, setBairro] = useState(null);
    const [numero, setNumero] = useState(null);
    const [senha, setSenha] = useState(null);

    const enviar = () => {
        Axios.post('http://localhost:3001/insert', {
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
        <form className='principal'>
            <img src={location} alt='logo' />
            <div className='box'>
                <div>
                    <label>Nome</label>
                    <input type="text" className='field' onChange={(e) => {
                        setNome(e.target.value);
                    }} />
                </div>
                <div className='form-row'>
                    <div className='form-control'>
                        <label>E-mail</label>
                        <input type="email" className='field' onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                    <div className='form-control'>
                        <label>Senha</label>
                        <input type="password" className='field' onChange={(e) => {
                            setSenha(e.target.value);
                        }} />
                    </div>
                </div>
                <div>
                    <label>Telefone</label>
                    <input type="text" className='field' onChange={(e) => {
                        setTelefone(e.target.value);
                    }} />
                </div>
                <div className='form-row'>
                    <div className='form-control'>
                        <label>Estado</label>
                        <input type="text" className='field' onChange={(e) => {
                            setEstado(e.target.value);
                        }} />
                    </div>
                    <div className='form-control'>
                        <label>Cidade</label>
                        <input type="text" className='field' onChange={(e) => {
                            setCidade(e.target.value);
                        }} />
                    </div>
                </div>
                <div>
                    <label>Bairro</label>
                    <input type="text" className='field' onChange={(e) => {
                        setBairro(e.target.value);
                    }} />
                </div>
                <div className='form-row'>
                    <div className='form-control'>
                        <label>Rua</label>
                        <input type="text" className='field' onChange={(e) => {
                            setRua(e.target.value);
                        }} />
                    </div>
                    <div className='form-control'>
                        <label>N°</label>
                        <input type="text" className='field' onChange={(e) => {
                            setNumero(e.target.value);
                        }} />
                    </div>
                </div>
                <button className="btn" onClick={enviar}>Finalizar Cadastro</button>
                <Link to="/"><button className="btn">Cancelar</button></Link>
            </div>
        </form>
    )
    
    
};

export default CadResponsavel;
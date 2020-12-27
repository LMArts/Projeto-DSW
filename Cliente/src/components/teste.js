import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Teste(){

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
        }).then(()=>{
            alert("Sucesso!");
        });
    };

    return(
        <div>
            <input 
                type="text" 
                placeholder="Nome"
                onChange={(e)=>{ 
                    setNome(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Telefone"
                onChange={(e) => {
                    setTelefone(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Cidade"
                onChange={(e) => {
                    setCidade(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Estado"
                onChange={(e) => {
                    setEstado(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Rua"
                onChange={(e) => {
                    setRua(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Bairro"
                onChange={(e) => {
                    setBairro(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Número"
                onChange={(e) => {
                    setNumero(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Senha"
                onChange={(e) => {
                    setSenha(e.target.value);
                }}
            />
            <button onClick={enviar}>Enviar</button>
        </div>
    )

}

export default Teste;
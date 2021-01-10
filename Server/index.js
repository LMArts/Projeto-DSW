const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'trabalhodsw'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post("/insert", (req, res)=>{

    const nome = req.body.nome
    const telefone = req.body.telefone
    const email = req.body.email
    const cidade = req.body.cidade
    const estado = req.body.estado
    const rua = req.body.rua
    const bairro = req.body.bairro
    const numero = req.body.numero
    const senha = req.body.senha

    const insert = "INSERT INTO usuarios (nome, telefone, email, cidade, estado, rua, bairro, numero, senha) VALUES (?,?,?,?,?,?,?,?,?)"
    connection.query(insert, [nome, telefone, email, cidade, estado, rua, bairro, numero, senha], (error, ressults) =>{
        console.log(ressults);
    })
})

app.post("/insertCrianca", (req, res) => {

    const nome = req.body.nome
    const dataNasc = req.body.dataNasc
    const sexo = req.body.sexo
    const grauParentesco = req.body.grauParentesco
    const corOlho = req.body.corOlho
    const corCabelo = req.body.corCabelo
    const tipoCabelo = req.body.tipoCabelo
    const tomPele = req.body.tomPele
    const observacao = req.body.observacao
    const qrcodeId = req.body.qrcodeId

    const insert = "INSERT INTO criancas (nome, dataNasc, sexo, grauParentesco, corOlho, corCabelo, tipoCabelo, tomPele, observacao, qrcodeId) VALUES (?,?,?,?,?,?,?,?,?,?)"
    connection.query(insert, [nome, dataNasc, sexo, grauParentesco, corOlho, corCabelo, tipoCabelo, tomPele, observacao, qrcodeId], (error, ressults) => {
        console.log(ressults);
    })
})


app.get("/select", (req, res) =>{
    const select = "SELECT * FROM usuarios";
    connection.query(select, (error, result)=>{
        res.send(result);
    })
})

app.post("/selectCrianca2", (req, res) => {
    const id = req.body.id;
    const select = "SELECT * FROM criancas WHERE id = ?";
    connection.query(select, id, (error, result) => {
        res.send(result);
    })
})

app.get("/selectCrianca", (req, res) => {
    const select = "SELECT * FROM criancas";
    connection.query(select, (error, result) => {
        res.send(result);
    })
})

app.post("/delete", (req, res) =>{
    const id = req.body.id;
    const sqlDelete = "DELETE FROM usuarios WHERE id = ?";
    connection.query(sqlDelete, id, (error, result) =>{
        if(error) console.log(error);
    })
})

app.post("/deleteCrianca", (req, res) => {
    const id = req.body.id;
    const sqlDelete = "DELETE FROM criancas WHERE id = ?";
    connection.query(sqlDelete, id, (error, result) => {
        if (error) console.log(error);
    })
})

app.post("/update", (req, res) => {

    const id = req.body.id;
    const nome = req.body.nome
    const telefone = req.body.telefone
    const email = req.body.email
    const cidade = req.body.cidade
    const estado = req.body.estado
    const rua = req.body.rua
    const bairro = req.body.bairro
    const numero = req.body.numero
    const senha = req.body.senha

    const sqlUpdate = "UPDATE usuarios SET nome = ?, telefone = ?, email = ?, cidade = ?, estado = ?, rua = ?, bairro = ?, numero = ?, senha = ?  WHERE id = ?";
    connection.query(sqlUpdate, [nome, telefone, email, cidade, estado, rua, bairro, numero, senha, id], (error, result) => {
        if (error) console.log(error);
    })
})

app.post("/updateCrianca", (req, res) => {

    const id = req.body.id;
    const nome = req.body.nome
    const dataNasc = req.body.dataNasc
    const sexo = req.body.sexo
    const grauParentesco = req.body.grauParentesco
    const corOlho = req.body.corOlho
    const corCabelo = req.body.corCabelo
    const tipoCabelo = req.body.tipoCabelo
    const tomPele = req.body.tomPele
    const observacao = req.body.observacao
    const qrcodeId = req.body.qrcodeId

    const sqlUpdate = "UPDATE criancas SET nome = ?, dataNasc = ?, sexo = ?, grauParentesco = ?, corOlho = ?, corCabelo = ?, tipoCabelo = ?, tomPele = ?, observacao = ?  WHERE id = ?";
    connection.query(sqlUpdate, [nome, dataNasc, sexo, grauParentesco, corOlho, corCabelo, tipoCabelo, tomPele, observacao, id], (error, result) => {
        if (error) console.log(error);
    })
})

app.listen(3001, ()=>{
    console.log("Servidor rodando!");
})
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

{/**app.get("/", (req, res) =>{
    const select = "SELECT * FROM criancas";
    connection.query(select, (error, result)=>{
        res.send(result);
    })
})**/}

app.listen(3001, ()=>{
    console.log("Servidor rodando!");
})
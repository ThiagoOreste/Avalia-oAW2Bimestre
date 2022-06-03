const express = require("express")
const app = express();
const port = '8000'

app.get('/', (req, res) => {
    res.send('Rota acessada')
})

app.get('/segundarota', (req, res) =>{
    res.send('<h1>Avaliação AW</h1> <br> <h2>Thiago Oreste dos Santos 3 ETIM Info</h2> <br> <p>Hello World</p> <br> <input type="text"/> <br> <br> <button type="button">Me da MB Edson</button>')
})

app.listen(port, () =>{
    console.log("Servidor Rodando")
})
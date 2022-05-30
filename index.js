//config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()



app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas da api
const pessoasRoutes = require('./routes/pessoasRoutes')
app.use('/pessoas',pessoasRoutes)


//rota inicial ==> endpoint
app.get('/',(req,res)=>{
    //mostrar requisição
    res.json({
        message:'Oi express!!!'
    })
})

//entregar uma porta
const DB_USER = 'anderson'
const DB_PASSWORD = encodeURIComponent('NdJHZSba9LthaU79')
mongoose
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.4xzky.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
)
.then(()=>{
    console.log('Conectamos ao DB na Nuvem!')
    app.listen(3000)
})
.catch((err)=>{
    console.log(err)
})




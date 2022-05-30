const router = require('express').Router()
const Pessoas = require('../models/Pessoas')

//rotas da API - Aula 02
router.post('/', async(req,res)=>{
    const {nome,salario,aprovado} = req.body
    if(!nome){
        res.status(422).json({error:'Nome é obrigatório!'})
    }
    const pessoas = {
        nome,
        salario,
        aprovado
    }
    try {
        await Pessoas.create(pessoas)
        res.status(201).json({message:'Pessoa inserida com sucesso!'})
    } catch (error) {
        res.status(500).json({error:error})
    }
})

// leitura de todos os dados
router.get('/',async(req,res)=>{
    try {
        const pessoas = await Pessoas.find()
        res.status(200).json(pessoas)
    } catch (error) {
        res.status(500).json({error:error})
    }

})

module.exports = router
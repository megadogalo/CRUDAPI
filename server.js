const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
//routes

app.get('/',  (req, res) => {
    res.send('oi aqui eh o hulk')
})

app.get('/GALO', (req, res) => {
    res.send('AQUI EH GALO')

})

app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

})

app.get('/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }

})

// atualize as informacoes da venda
app.put('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // Nao achou o livro no DB
        if(!product){
            return res.status(404).json({message: 'Desculpe nao foi encontrado nenhum livro com o ID fornecido ${id}'})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a sua venda
app.delete('/products/:id', async(req, res ) => {
    try {
        const{id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: 'Nao conseguimos encontrar nenhum livro com o ID fornecido ${id}'})
        }
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.post('/product', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

mongoose.connect('mongodb+srv://cybercrud:galogoat2k24@crudapi.brexdir.mongodb.net/CRUDAPI?retryWrites=true&w=majority&appName=CRUDAPI')
.then(() =>{
app.listen(3000, () => {
    console.log('a API esta rodando na porta 3000')
})
    console.log('conectada com o mongoDB')     
}).catch(() => {
    console.log(error)
})
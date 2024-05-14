const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "Por favor insira o nome do livro que deseja vender"]
        },
        quantidade: {
            type: Number,
            required: true,
            deafult: 0
        },
        preco: {
            type: Number,
            required: true,
        },
        imagem: {
            type: String,
            rquired: false,
        }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product',productSchema );

module.exports = Product;
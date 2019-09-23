// iremos mapear o objeto para o documento do mongo
// iremos utilizar a API do mongoose
// utilizaremos a API do node rest-ful para facilidades

const restful = require('node-restful')
const mongoose = restful.mongoose // o node rest-ful cria algo parecido como uma casca sobre o mongoose
// assim temos uma API rest praticamente pronta


// a configuração abaixo independe se estamos usando o rest-ful ou diretamente o mongoose

const todoSchema = new mongoose.Schema({
    description: { type: String, require: true },
    done: { type: Boolean, require: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema)
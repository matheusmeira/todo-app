const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete']) // Aqui criamos uma API rest padrão
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo
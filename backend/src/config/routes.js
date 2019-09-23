const express = require('express') // o express aqui é um singleton. Isto significa que a referência é sempre a mesma
// uma maneira no node de receber um parametro é exportando uma função

module.exports = function (server) {
    // API routes
    const router = express.Router()
    server.use('/api', router) // middware para urls que começam com /api

    // TODO routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}
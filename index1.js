const express = require('express')

const app = express()
const listenedPort = '8088'

app.get('/', (req, res) => res.send(`端口是${listenedPort}`))

app.listen(listenedPort,() => console.log(`success:${listenedPort}`))
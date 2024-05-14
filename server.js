const express = require('express')
const.mongoose
const app = express()

//routes

app.get('/',  (req, res) => {
    res.send('Oii aqui eh a mi')
})

app.get('/GALO', (req, res) => {
    res.send('AQUI EH GALO')

})

app.listen(3000, () => {
    console.log('Node API app is running on port 3000')

})
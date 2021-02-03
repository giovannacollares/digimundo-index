const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const searchName = require('./src/functions/searchName')
const searchLevel = require('./src/functions/searchLevel')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.get('/', (req, res) => {
    res.render('index')
})


app.post('/search-by-name', async (req, res) => {
  const { name } = req.body
  
  const resultado = await searchName(name)
      
  res.render('resultado', {dado: resultado})
  console.log(resultado)
})

app.post('/search-by-level', async (req, res) => {
  const { level } = req.body
  
  const resultado = await searchLevel(level)
      
  res.render('resultado', {dado: resultado})
  console.log(resultado)
})

app.listen(3333)
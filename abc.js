require('dotenv').config()

const express = require('express')
const app = express()
// const port;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send('Welcome Mr. Keshav dev')
})
app.get('/abc',(req,res)=>{
    res.send('<h1>Hey Man How are you doning</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})


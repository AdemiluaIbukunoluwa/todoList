const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello world')
  })

const port = 5000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
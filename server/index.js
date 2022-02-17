const express = require('express')
const app = express()
const port = 3000

app
.get('/', (req, res) => {
  res.send('Heyy, you are on the homepage')
})
.get('/about', (req, res)=> {
  res.send('You re on about');
})
.get('/contact', (req, res)=> {
  res.send({
    email: 'kakkasr1@newpaltz.edu',
    phone: '123-456-7890',
    twitter:'shivangikakkar',
    instagram: 'shivangikakkar'
  });
})
app.listen(port, () => {
  console.log(`Example app listening at port http://localhost:${port}`)
})
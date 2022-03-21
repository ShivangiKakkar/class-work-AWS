const express = require('express') //common JS
const usersController = require('./controllers/users');
const app = express() //pipeline message comes in -> begining of express-> goes through some stuff then gives bac to client
const port = 3000

app

.get('/', (req, res) => {
  res.send('Heyy, you are on the homepage')
})
.use('/users', usersController) //mouting that controller at ths path


app.listen(port, () => {
  console.log(`Example app listening at port http://localhost:${port}`)
})
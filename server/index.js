const express = require('express') //common JS

const usersController = require('./controllers/users');

//pipeline message comes in -> begining of express-> goes through some stuff then gives bac to client
const app = express() 
const port = 3000

app
    .use('/', express.static(__dirname + '/public/'))
    .use(express.json())
    //.use(express.urlencoded({ extended: true }))

    .get('/api/', (req, res) => {
       res.send('Heyy, you are on the homepage');
    })
    .use('/api/users', usersController) //mouting that controller at thus path


app.listen(port, () => {
  console.log(`Example app listening at port http://localhost:${port}`)
})

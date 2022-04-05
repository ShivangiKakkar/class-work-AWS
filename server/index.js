
require('dotenv').config();
const express = require('express') //common JS
const userModel = require('./models/user');

const usersController = require('./controllers/users');
const postsController = require('./controllers/posts');
const {requireAuth} = require('./models/auth');


//pipeline message comes in -> begining of express-> goes through some stuff then gives bac to client
const app = express() 
const port = process.env.PORT || 3000;
//console.log(process.env);

app
    .use('/', express.static(__dirname + '/public/'))
    .use(express.json())
    //.use(express.urlencoded({ extended: true }))
    .use((req,res, next) => {
      const auth = req.headers.authorization;
        if(auth){
          const token = auth.split(' ')[1];
          userModel.fromToken(token)
          .then(user => {
            req.user = user;
            next();
          }).catch(next);
        }else{
          next();
        }
        //if dont call next herer every req will keep on hanging
        //cant pass anything into next other than error
    })

    .get('/api/', (req, res) => {
       res.send('You are at the root of the API. For the best class ever - ' + process.env.BEST_CLASS_EVER);
    })
    .use('/api/users', usersController)
    .use('/api/posts', requireAuth, postsController) //mouting that controller at thus path

    //error handling
    .use((err, req, res, next) => {
      console.error(err);
      res.status(err.statusCode || 500)
        .send({ errors: [err.message ?? 'Internal server error' ]});
    })


app.listen(port, () => {
  console.log(`Example app listening at port http://localhost:${port}`)
})

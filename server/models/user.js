


const bcrypt = require('bcrypt');


let highestId = 3;

const list = [
{
    firstname: 'Shivangi',
    lastname: 'Kakkar',
    handle: 'shivangikakkar',
    password: 'coffeee',
    email: 'shivangikakkar15@gmail.com',
    pic: 'https://randomuser.me/api/portraits/women/21.jpg',
    id: 1,
},
{
    firstname: 'Vladimir',
    lastname: 'Putin',
    handle: 'russian_dictator',
    password: 'long table',
    email: 'vladimirputin.com',
    pic:'https://randomuser.me/api/portraits/men/8.jpg',
    id: 2,
},
{
    firstname: 'Joe',
    lastname: 'Biden',
    handle: 'joebiden',
    password: 'birdsinging',
    email: 'joebiden.com',
    pic:'https://randomuser.me/api/portraits/men/76.jpg',
    id: 3,
},
];
function get(id){
    return {...list.find(user => user.id === parseInt(id)), password: undefined};
}

function remove(id){
    const index = list.findIndex(user => user.id === parseInt(id));
    const user = list.splice(index,1);
    
    return {...user[0], password: undefined} ;
}

async function update(id, newUser){
    const index = list.findIndex(user => user.id === parseInt(id));
    const oldUser = list[index];
    newUser.password = await bcrypt.hash(newUser.password,10);

    newUser = list[index] = {...oldUser, ...newUser };
    return {...newUser, password: undefined} ;
}

//asynchronous programming -> you do it, tell me when you are done. I am not waiting for you to be done. Until then other things keep on going
//dont return variables, return is a function
// PROMISE function -> return value -> not return -> because its done done running yet -> you get a promise -> it will come back, saying successful or not.
// then and catch ->when you call .then on a promise -> only gets executed when prev function done running and result are in

//async await -> put infront of func you are defining -> that func will always return a promise ->async it will convert into promise after that -> after await ->body of then func

module.exports = {
    async create(user){
        user.id = ++highestId;
        user.password = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS);
        console.log(user);
        throw {message: "fake error"};
        list.push(user);
        return {...user, password: undefined};
    },
    remove,
    update,
    get list(){
        return list.map(x=> ({...x, password: undefined}) );
    }
}
//getter -> every part of program 

// one option -> module.exports.list = ()=>list.map(x=>({...x, password: undefined}) );
module.exports.get = get;






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
    return list.find(user => user.id === id);
}

module.exports.list = list;
module.exports.get = get;
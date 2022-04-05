

const userModel = require('./user');
let highestId = 3;

const list = [
{
    src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-1120x560,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg',
    caption: 'Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two',
    owner: 1,
    likes: [],
    comments: [],
    isPublic: true,
    id: 1,
},
{
    src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-1120x560,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg',
    caption: 'Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two',
    owner: 1,
    likes: [],
    comments: [],
    isPublic: true,
    id: 2,
},
{
    src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-1120x560,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg',
    caption: 'Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two',
    owner: 2,
    likes: [],
    comments: [],
    isPublic: true,
    id: 3,
},

];

const includeUser = post => ({ ...post, user: userModel.get(post.owner) });

function get(id){
    const post = list.find(x => x.id === parseInt(id));
    if(!post){
        throw { status: 404, message: 'Post not found' };
    }
    return includeUser(post);
}

function remove(id){
    const index = list.findIndex(x => x.id === parseInt(id));
    const post = list.splice(index,1);
    
    return includeUser(post[0]);
}

function update(id, newPost){
    const index = list.findIndex(x => x.id === parseInt(id));
    const oldPost = list[index];
    newPost = list[index] = {...oldPost, ...newPost };
    return includeUser(newPost);
}

module.exports = {
    create(post){
        post.id = ++highestId;
        list.push(post);
        return includeUser(post);
    },
    remove,
    update,
    get list(){
        return list.map(x => includeUser(x));
    }
}
//getter -> every part of program 

// one option -> module.exports.list = ()=>list.map(x=>({...x, password: undefined}) );
module.exports.get = get;
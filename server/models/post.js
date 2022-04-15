
const { db, ObjectId } = require('./mongo');
const userModel = require('./user');

const collection = db.db("journal").collection("posts");

let highestId = 3;

const list = [
{
    src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-1120x560,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg',
    caption: 'Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two',
    owner: 'shivangikakkar',
    likes: [],
    comments: [],
    isPublic: true,
    id: 1,
},
{
    src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-1120x560,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg',
    caption: 'Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two',
    owner: 'vp',
    likes: [],
    comments: [],
    isPublic: true,
    id: 2,
},
{
    src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-1120x560,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg',
    caption: 'Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two',
    owner: 'russian_dictator',
    likes: [],
    comments: [],
    isPublic: true,
    id: 3,
},

];

const includeUser = async post => ({ ...post, user: await userModel.getByHandle(post.owner) });

async function get(id){
    const post = await collection.findOne({_id: new ObjectId(id)});
    if(!post){
        throw { status: 404, message: 'Post not found' };
    }
    return includeUser(post);
}
async function getWall(handle){
    const posts = await collection.find({ owner: handle }).toArray();

    return Promise.all( posts.map(x=> includeUser(x) ) );
}

async function remove(id){
    const post = await collection.findOneAndDelete({ _id: new ObjectId(id)});
    
    return includeUser(post.value);
}

async function update(id, newPost){
    newPost = await collection.findOneAndUpdate(
        { _id: new ObjectId(id)}, 
        { $set: newPost }, 
        { returnDocument: 'after' });
    return includeUser(newPost);
}
function seed(){
    return collection.insertMany(list);
}


module.exports = {
    async create(post){
        post.id = ++highestId;

        const result = await collection.insertOne(post);
        post = await get(result.insertedId);

        return includeUser(post);
    },
    remove,
    update,
    async getList(){
        const posts = await collection.find({}).toArray();

        return Promise.all( posts.map(x => includeUser(x)));
        
        //promise all means you want all of these promises to happen
    },
    getWall,
    seed,
}
//getter -> every part of program 

// one option -> module.exports.list = ()=>list.map(x=>({...x, password: undefined}) );
module.exports.get = get;
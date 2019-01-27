const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server')
    }
    console.log('Connected to MongoDB Server')
    
    const db = client.db(dbName)

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //        return console.log('unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Users').insertOne({
    //     name: 'Gede Yandi',
    //     age: 32,
    //     location: 'Denpasar'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('unable to insert user', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    client.close()
})
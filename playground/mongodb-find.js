const { MongoClient, ObjectID } = require('mongodb')

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server')
    }
    console.log('Connected to MongoDB Server')
    
    const db = client.db(dbName)

    db.collection('Todos').find({
        _id: new ObjectID('5c4df201d2412e11348daa6b'),
        //completed: false
    }).toArray().then((docs) => {
        console.log('Todos')
        console.log(JSON.stringify(docs, undefined, 2))
    },(err) => {
        console.log('unable to fetch todos', err)
    })

    //client.close()
})
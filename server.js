const MongoClient = require('mongodb').MongoClient;
const io = require('socket.io').listen(4000);

let url = "mongodb://127.0.0.1/socketchat";

//Connect to MongoDB

MongoClient.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }, function (err, db){
    if(err) throw err;
    console.log('Connected to MongoDB');

    //Set db constants
    const socketchat = db.db('socketchat');
    const users = socketchat.collection('users');
    const messages = socketchat.collection('messages');
    
    // Connect to Socket.io
    io.on('connection', function(socket){
       console.log('Connected to socket.io, ID: ' + socket.id); 

       //handle chat and log on
       socket.on('username', function (username) {
           console.log(usrname);
       })
    });
});
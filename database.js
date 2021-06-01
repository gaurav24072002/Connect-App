const mongoose = require('mongoose')

class Database{

    constructor(){
        this.connect();
    }

    connect(){
        mongoose.connect("mongodb+srv://admin:adminpassword@connectcluster.2rc7g.mongodb.net/ConnectDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        .then(()=>{
            console.log("Database connection succeddful...");
        })
        .catch((err)=>{
            console.log("Database connection error : " + err)
        })
    }
}

module.exports = new Database();

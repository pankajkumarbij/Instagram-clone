const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {mongourl} = require('./keys');

mongoose.connect(mongourl, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo");
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting problem",err);
})

//mongoose.set('useFindAndModify', false);

require('./models/user');
require('./models/post');

app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/post'));

app.get('/',(req,res)=>{
    res.send("Hello guys");
})

app.listen(5000,()=>{
    console.log("server is running on port=5000");
})
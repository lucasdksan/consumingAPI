const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(cors());
app.get('/',async (req, res)=>{
    try{
        const { data } = await axios('https://jsonplaceholder.typicode.com/users');
        return res.json(data);
    }catch(err){
        console.error(err);
    }
    
});

app.listen(3007);

const express= require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "static")));

const data = ["swimming", "football", "basketball", "cricket"];

app.get('/todos', (req, res)=>{
    res.json(data);
})

app.patch('/todos',(req, res)=>{
    let newTo = req.body.value;
    data.push(newTo);
    res.send({
        "success":true
    })


})

app.listen(3030, ()=>{
    console.log(`server is running at port 3030`)
})
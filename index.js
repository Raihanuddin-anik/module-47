const express = require('express');
// var bodyParser = require('body-parser');
// const cors = require('cors');

const app = express();
 
// app.use(cors());
// app.use(bodyParser.json())
// const rootCall = (req, res) =>{
//     res.send('Thank you very much')
// }

// const user =["Raihan", "anik","karima",]

app.get('/',(req, res ) =>{

    const fruit ={
        product: 'piyaj',
        price:34
    }
    res.send(fruit)
})

// app.get('/users/:id',(req, res)=>{
//     const Id = req.params.id;
//     const name = user[Id]
//     res.send({Id,name})
// })

// app.get('/fruit',(req,res) =>{
//     res.send({product: 'banana', quantity: 20, price: 200});
// })

// // post

// app.post('/adduser', (req, res)=>{
//     res.send(req.body);
// })


app.listen(3000,()=>console.log('Node ami onek pari'))
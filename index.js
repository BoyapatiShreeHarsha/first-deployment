const express= require("express");
const path=require("path");
const app=express();
const port=80;
// app.get('/getRequest/:name',(req,res)=>{
//     res.send("Hello "+req.params.name);
// })

//for serving the static file
app.use('/static',express.static('static'));

//set the template engine as pug
app.set('view engine','pug');

//set the view directory
app.set('views', path.join(__dirname, 'views'));
//using the pug file
app.get('/',(req,res)=>{
    res.status(200).render('demp.pug', {title:'hi SHB' ,msg :'Thanks for teaching me'})
})
app.post('/postRequest',(req,res)=>{
    res.send(`Hello `+req.body.name+` welcome to class `);
})
app.listen(port,()=>{
    console.log(`This is sunning on ${port}`);
})
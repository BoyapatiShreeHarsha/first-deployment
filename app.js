const express= require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const port=85;


//For Express commands
 //for serving the static file
app.use('/static1',express.static("static1"));
//to extract the data from the website to app.js
app.use(express.urlencoded({extended:true}));

//Pug commands
app.set('view engine','pug');//set the template engine as pug
//app.set('flod', path.join(__dirname, 'fold'));//set the fold directory  //this is doubt
//app.set('views', path.join(__dirname, 'flod'));//this is correct
app.set('views', path.join(__dirname, 'views'));

//End points
app.get('/',(req,res)=>{
    const con='This is the best content so far';
    const params={'title':'Pubg is the best game','content':con};  //this is a object
    res.status(200).render('demo.pug',params)
});

app.post('/',(req,res)=>{
    let str=`The name of the person is ${req.body.name} , ${req.body.age} .He/She lives at ${req.body.address} and ${req.body.more} is more about him/her.`
    fs.writeFileSync('output.txt',str);
    const params={'title':'Thank You','content':'Your form is submitted succfully'}
})

//listening
app.listen(port,()=>{
    console.log(`This is sunning on ${port}`);
})
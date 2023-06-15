const express = require('express');
const app = express();

const port = 8000;

// set the views
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/home',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/projects',(req,res)=>{
    res.render('projects')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/*',(req,res)=>{
    res.status(404).send('404 Page Not Found');
})

app.listen(port,(err)=> console.log(`Listening to port ${port} .... `))
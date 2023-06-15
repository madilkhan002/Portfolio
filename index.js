const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

// set the views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/.netlify/functions/views'))
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.get('/home',(req,res)=>{
    res.render('index.ejs')
})

app.get('/about',(req,res)=>{
    res.render('about.ejs')
})

app.get('/projects',(req,res)=>{
    res.render('projects.ejs')
})

app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})

app.get('/*',(req,res)=>{
    res.status(404).send('404 Page Not Found');
})

app.listen(port,(err)=> console.log(`Listening to port ${port} .... `))

const express = require('express');
const app = express();

const port = 8000;

// set the views
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})


app.listen(port,(err)=> console.log(`Listening to port ${port} .... `))
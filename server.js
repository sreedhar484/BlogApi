const express = require('express')
const cors = require('cors')
const User = require('./controllers/userController.js')
const Post = require('./controllers/postController.js')



const app = express()

// middleware

app.use(express.json())


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    next();
  });

app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.send("Welcome")
})

app.post("/login",User.login)

app.post('/register',User.addUser)

app.post('/write',Post.addPost)

app.put('/update',Post.updatePost)

app.get('/history',Post.updateHistory)

app.delete('/delete/:id',Post.deletePost)

app.post('/posts',Post.getAllPosts)

app.post('/approve',Post.approvePost)

app.get('/sort',Post.getPostByTime)

app.get('/user/:usr',Post.getPostByUser)



//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

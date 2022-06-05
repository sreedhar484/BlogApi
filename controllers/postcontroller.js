const db = require('../models')

// image Upload
const multer = require('multer')
const path = require('path')


// create main Model
const Post = db.post
const User = db.user
const PostUpdate = db.posttrack



// main work

// 1. create product

const addPost = async (req, res) => {

    console.log('----->>>>>>>>')
    console.log(req.body)
    console.log('----->>>>>>>>')

    let info = {
        author: req.body.username,
        title: req.body.title,
        info: req.body.info,        
        titlenew: req.body.title,
        infonew: req.body.info,
        createdAt: Date(),
        updatedAt: false,
        approve: false,
        isupdate: false
    }

    const product = await Post.create(info)
    res.status(200).send(product)
    console.log(product)

}



// 2. get all products

const getAllPosts = async (req, res) => {
    console.log('---==========')
    console.log(req.body)
    console.log('<<<<<<<<<<<....')
    let posts = await Post.findAll({})
    console.log(posts)
    posts.sort((a,b)=>{
        return new Date(b.createdAt) - new Date(a.createdAt)
    })
    
    if(req.body.acctype=='user'){
        let filtered = posts.filter((post)=> post.approve==true)
        res.status(200).send(filtered) 
    }
    else if(req.body.acctype=='admin'){
        let filtered = {
            other: posts.filter((post)=> post.author!=req.body.username),
            myposts: posts.filter((post)=> post.author==req.body.username),
            
        } 
        res.status(200).send(posts) 
    }
    else if(req.body.acctype=='superadmin'){
        let reviewed = posts.filter((post)=> post.approve==true)
        let not_reviewed = posts.filter((post)=> post.approve==false)
        let filtered = {
            reviewed: reviewed,
            not_reviewed: not_reviewed
        }
        res.status(200).send(posts) 
    }
    else
        res.status(200).send("Invalid user request")


}

const getPostByTime = async (req, res) => {

    let posts = await Post.findAll({})
    posts.sort((a,b)=>{
        return new Date(b.createdAt) - new Date(a.createdAt)
    })
    let filtered = posts.filter((post)=> post.approve==true)
    res.status(200).send(filtered)

}

const getPostByUser = async (req, res) => {
    console.log('---==========')
    console.log(req.params.usr)
    console.log('---==========')
    let posts = await Post.findAll({})
    posts.sort((a,b)=>{
        return new Date(b.createdAt) - new Date(a.createdAt)
    })
    let filtered = posts.filter((post)=> post.author==req.params.usr)

    res.status(200).send(filtered)

}

const updateHistory = async (req, res) => {
    console.log('---==========')
    
    console.log('---==========')
    let posts = await PostUpdate.findAll({})
    console.log(posts)
    posts.sort((a,b)=>{
        return new Date(b.updatedAt) - new Date(a.updatedAt)
    })

    

    res.status(200).send(posts)

}


// 3. update Post

const updatePost = async (req, res) => {

    let id = req.body.id
    console.log(req.body)

    const getPost = await Post.findOne({ where: { id: id }})
    console.log(getPost,'--->>>>>>>>>>>>>>>==')
    let data = {
        title: getPost.titlenew,
        info: getPost.infonew,
        titlenew: req.body.title,
        infonew: req.body.info,
        updatedAt: new Date(),
        isupdate: false
    }
    const updatedPost = await Post.update(data, { where: { id: id }})

    let updatedData = {
        author: req.body.username,
        postId: id,
        updatedtitle: req.body.title,
        updatedinfo: req.body.info,
        updatedAt: new Date()
    }
    const posttrack = await PostUpdate.create(updatedData)    
    res.status(200).send("Post updated")
   

}

const approvePost = async (req, res) => {

    let id = req.body.id

    console.log(req.body)
    let data = {
        approve : 1,
        isupdate: 1,
        title: req.body.title,
        info: req.body.info,
    }
    const updatedPost = await Post.update(data, { where: { id: id }})

    res.status(200).send(updatedPost)
   

}

// 5. delete product by id

const deletePost = async (req, res) => {

    let id = req.params.id
    console.log(req.params)
    
    await Post.destroy({ where: { id: id }} )

    res.status(200).send('Post is deleted !')

}


module.exports = {
    addPost,
    getAllPosts,
    getPostByTime,
    getPostByUser,

    updatePost,
    deletePost,
    approvePost,
    updateHistory
}

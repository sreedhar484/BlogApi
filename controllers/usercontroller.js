const db = require('../models')

const User = db.user

const addUser = async (req, res) => {
    
    console.log("============")
    console.log(req.body)
    console.log("============")
    console.log(User)
    

    let data = {
        acctype: req.body.acctype,
        username: req.body.username,
        password: req.body.password,
        securityQuestion: req.body.question,
        answer: req.body.answer,
    }
    try{
        const review = await User.create(data)
        res.status(200).send(review)
    }
    catch{
        res.status(200).send("Username Already Exist")
    }

}
const login = async (req, res) => {
    
    console.log("============")
    console.log(req.body)
    console.log("============")
    console.log(User)
    

    
    if(req.body.answer){
        const review = await User.findOne({ where: { id: req.body.id, answer: req.body.answer }})
        console.log(review)
        if (review){
            let response = {
                userId : review.id,
                userName: review.username,
                accType: review.acctype
            }
    
            res.status(200).send(response)            
        }
        else
            res.status(200).send("Invalid Answer")
    }
    else{
        const review = await User.findOne({ where: { username: req.body.username, password: req.body.password }})
        console.log(review)
        if(review){
            let response = {
                id : review.id,
                question: review.securityQuestion
            }
            res.status(200).send(response)
            
        }
        else
            res.status(200).send("Invalid Credentials")

    }
}

// 2. Get All Reviews

const getAllReviews = async (req, res) => {

    const reviews = await User.findAll({})
    res.status(200).send(reviews)

}

module.exports = {
    addUser,
    login,
    getAllReviews
}
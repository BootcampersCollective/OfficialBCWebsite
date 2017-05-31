var Auth = require('../models/auth.schema.js'),
    bcrypt = require('bcryptjs'),
    colors = require('colors');

module.exports = {
    registerUser : (req,res)=>{
        console.log(req.body, 'req.body'.red)
        var newUser = new Auth(req.body);
        newUser.save(function(err,user){
        if(err){
            console.log(err)
            res.status(403).send(err)
        }else{
            console.log('register success'.blue);
            req.session.uid = user._id;
            res.status(200).send(user)
        }
        })
    },

    loginUser : (req,res)=>{
        Auth.findOne({email:req.body.email}, function(err,user){
        if(err){

        }else if(!user){
            res.status(403).send('User not found!');
        }else {

            bcrypt.compare(req.body.password, user.password, function(bcryptErr, matched){

            if(bcryptErr){
                res.status(500).send('mongodb error');
            } else if(!matched){
                res.status(403).send('Incorrect Password!');
            }
            else {
<<<<<<< Updated upstream
                console.log('id -'.red, user._id)
                req.session.uid=user._id;
                console.log(req.session.uid)
=======
                req.session.uid=user._id;
>>>>>>> Stashed changes
                res.send(user)
            };
            });
        };
        });
    },

    me : (req,res)=>{
        Auth.findOne({_id : req.session.uid}, function(err, user){
        res.send(user)
        });
    },
};
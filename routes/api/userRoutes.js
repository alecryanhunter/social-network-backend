const router = require('express').Router();
const { User, Thought } = require('../../models')

// USER ROUTES
// GET ROUTE - ALL
router.get('/',(req,res)=>{
    User.find()
    .then(users => {
        res.json(users);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
    // res.json("GET all users")
});
// GET ROUTE - SINGULAR BY ID, WITH FRIENDS
router.get('/:id',(req,res)=>{
    User.find(
        { 
            _id: req.params.id,
            // TODO: Use aggregate to include friends and thoughts?
        }
    )
    .then(user=>{
        res.json(user);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
});
// POST ROUTE
router.post('/',(req,res)=>{
    User.create(
        {
            username: req.body.username,
            email: req.body.email
        }
    )
    .then(newUser => {
        res.json(newUser);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
});
// PUT ROUTE
router.put('/:id',(req,res)=>{
    User.findByIdAndUpdate(
        req.params.id,
        { 
            username: req.body.username,
            email: req.body.email
        }
    ).then(updUser => {
        res.json(updUser);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
});
// DELETE ROUTE
router.delete('/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(delUser=>{
        Thought.deleteMany(
            {username: delUser.username}
        ).catch(err =>{
            console.log(err);
            res.status(500).json({msg:"error occurred",err})
        })
        res.json(delUser);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
});

// FRIENDS ROUTES
// POST ROUTE
router.post('/:id/friends/:fId',(req,res)=>{
    User.findByIdAndUpdate(
        req.params.id,
        { $push: { friends: req.params.fId }}
    )
    .then(newFriend=>{
        res.json(newFriend);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
});
// DELETE ROUTE
router.delete('/:id/friends/:fId',(req,res)=>{
    User.findByIdAndUpdate(
        req.params.id,
        { $pull: { friends: req.params.fId }}
    ).then(delFriend=>{
        res.json(delFriend);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
});

module.exports = router;
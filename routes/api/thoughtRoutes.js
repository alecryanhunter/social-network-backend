const router = require('express').Router();
const { User, Thought } = require('../../models')

// THOUGHT ROUTES
// GET ROUTE - ALL
router.get('/',(req,res)=>{
    Thought.find()
    .then(thoughts=>{
        res.json(thoughts);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
});
// GET ROUTE - SINGULAR BY ID
router.get('/:id',(req,res)=>{
    res.json(`GET thought ${req.params.id}`)
});
// POST ROUTE
router.post('/',(req,res)=>{
    Thought.create(
        {
            thoughtText: req.body.text,
            username: req.body.username
        }
    )
    .then(newThought => {
        // Adds thought's id to user's thoughts array
        User.findOneAndUpdate(
            {username: req.body.username},
            {$push: { thoughts: newThought._id }}
        ).catch(err =>{
            console.log(err);
            res.status(500).json({msg:"error occurred",err})
        })
        res.json(newThought);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
});
// PUT ROUTE BY ID
router.put('/:id',(req,res)=>{
    res.json(`UPDATE thought ${req.params.id}`)
});
// DELETE ROUTE BY ID
router.delete('/:id',(req,res)=>{
    res.json(`DELETE thought ${req.params.id}`)
});

// REACTION ROUTES
// POST ROUTE
router.post('/:id/reactions',(req,res)=>{
    res.json(`POST a reaction on thought ${req.params.id}`)
});
// DELETE ROUTE
router.delete('/:id/reactions/:rId',(req,res)=>{
    res.json(`DELETE reaction ${req.params.rId} on thought ${req.params.id}`)
});

module.exports = router
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
    Thought.findById(req.params.id)
    .then(thought=>{
        res.json(thought);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
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
    Thought.findByIdAndUpdate(
        req.params.id,
        {
            thoughtText: req.body.text            
        }
    )
    .then(updThought=>{
        res.json(updThought);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
});
// DELETE ROUTE BY ID
router.delete('/:id',(req,res)=>{
    Thought.findByIdAndDelete(req.params.id)
    .then(delThought=>{
        res.json(delThought);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
});

// REACTION ROUTES
// POST ROUTE
router.post('/:id/reactions',(req,res)=>{
    Thought.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { reactions: {
            reactionBody: req.body.reactionBody,
            username: req.body.username
        }}}
    )
    .then(reaction=>{
        res.json(reaction);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
});
// DELETE ROUTE
router.delete('/:id/reactions/:rId',(req,res)=>{
    Thought.findByIdAndUpdate(
        req.params.id,
        { $pull: { reactions: { reactionId: req.params.rId }}}
    )
    .then(delReaction=>{
        res.json(delReaction);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
});

module.exports = router
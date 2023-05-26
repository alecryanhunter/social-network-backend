const router = require('express').Router();

// THOUGHT ROUTES
// GET ROUTE - ALL
router.get('/',(req,res)=>{
    res.json("GET all thoughts")
});
// GET ROUTE - SINGULAR BY ID
router.get('/:id',(req,res)=>{
    res.json(`GET thought ${req.params.id}`)
});
// POST ROUTE
router.post('/',(req,res)=>{
    res.json('POST a thought')
});
// PUT ROUTE BY ID
router.post('/:id',(req,res)=>{
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
const router = require('express').Router();

// USER ROUTES
// GET ROUTE - ALL
router.get('/',(req,res)=>{
    res.json("GET all users")
});
// GET ROUTE - SINGULAR BY ID, WITH FRIENDS
router.get('/:id',(req,res)=>{
    res.json(`GET user ${req.params.id} and their friends`)
});
// POST ROUTE
router.post('/',(req,res)=>{
    res.json(`POST a new user`)
});
// PUT ROUTE
router.put('/:id',(req,res)=>{
    res.json(`UPDATE user ${req.params.id}`)
});
// DELETE ROUTE
router.delete('/:id',(req,res)=>{
    res.json(`DELETE user ${req.params.id}`)
});

// FRIENDS ROUTES
// POST ROUTE
router.post('/:id/friends/:fId',(req,res)=>{
    res.json(`POST friend ${req.params.fId} to user ${req.params.id}`)
});
// DELETE ROUTE
router.delete('/:id/friends/:fId',(req,res)=>{
    res.json(`DELETE friend ${req.params.fId} from user ${req.params.id}`)
});

module.exports = router;
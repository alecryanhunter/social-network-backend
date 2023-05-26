const router = require('express').Router();

// '/' GET all users
// '/:id' GET user by id and their friends
// '/' POST a new user
// '/:id' PUT an updated user by id
// '/:id' DELETE a user by id, including thoughts

// '/:id/friends/:fId' POST a new friend to a user's friends list
// '/:id/friends/:fId' DELETE a friend from a user's friends list

module.exports = router;
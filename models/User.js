const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        // unique?
        // trimmed?
    },
    email: {
        type: String,
        required: true,
        // unique?
        // email validation?
    },
    thoughts: {
        // array of Thought _id values?
    },
    friends: {
        // array of User _id values?
    }
});

// Returns length of given user's friends array
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = mongoose.model('User',userSchema);

module.exports = User
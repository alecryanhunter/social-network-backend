const mongoose = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value) {
                return /\b\w+@\w+\.\w{1,4}\b/gi.test(value);
            }
        }
    },
    thoughts: [],
    friends: []
});

// Returns length of given user's friends array
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = mongoose.model('User',userSchema);

module.exports = User
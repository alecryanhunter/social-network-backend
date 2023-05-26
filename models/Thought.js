const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        // length between 1 and 280 characters?
    },
    createdAt: {
        type: Date,
        // default value is current time?
        // getter method to format timestamp?
    },
    username: {
        type: String,
        required: true
    },
    reactions: {
        // array of nested documents with reactionSchema?
    }
});

// Returns length of reactions array
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const reactionSchema = new mongoose.Schema({
    reactionId: {
        // use mongooses' ObjectId data type?
        // default value is new ObjectId?
    },
    reactionBody: {
        type: String,
        required: true,
        // 280 character maximum?
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        // set default value to current time?
        // getter method to format timestamp?
    }
});

const Thought = mongoose.model('Thought',thoughtSchema);

module.exports = Thought
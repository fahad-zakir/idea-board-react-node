const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
// so it's available every where

const IdeaSchema = new Schema({

    title: {
        type: String,
    },
    description: {
        type: String,
    },
    createddate: {
        type: Number,
    }
}, {
    timestamps: {}
    })

const UserSchema = new Schema({

    name: {
        type: String,
    },
    password: {
        type: String,
    },
    ideas: [IdeaSchema]
}, {
    timestamps: {},
    userPushEach: true
    })

    module.exports = {
        UserSchema,
        IdeaSchema
    }

// User has name, password(string), and ideas.
// Idea has title, description, and created(Date)
// Make sure the default value for title and description is something similar to "New Title" and "New Description"

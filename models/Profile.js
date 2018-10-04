const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    skills: {
        type: [String],
        required: true
    },
    interests: {
        type: [String],
        required: true
    },
    badges: {
        type: [String],
    },
    bio: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    social: {
        youtube: {
            type: String
        },
        linkedin: {
            type: String
        },
        facebook: {
            type: String
        },
        instagram: {
            type: String
        },
        twitter: {
            type:String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema); 
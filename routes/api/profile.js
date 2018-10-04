const express = require("express");
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();

// load validation
const validateProfileInput =  require('../../validation/profile');

const Profile = require('../../models/Profile');
const User = require('../../models/User');


//*** The reason models are loaded before router ***
//*** has to do with an acquired error:          ***
//*** TypeError: Cannot read property 'name' of undefined
//*** my research of this error suggests this to be the best solution ***

//@route  GET request to api/posts/test
//@desc   Tests profile route
//@access Public
router.get('/test', (req, res) => res.json({msg: "Profile Works"})
);

//@route  POST request to api/posts/profile
//@desc   Create user's profile
//@access Private
router.post('/', passport.authenticate('jwt', { session: false}), (req, res) => {
const { errors, isValid } = validateProfileInput(req.body);

//check validation
if(!isValid) {
    //return errors
    return res.status(400).json(errors);
}
    //get fields
    const profileFields = {};
        profileFields.user = req.user.id;
        if(req.body.handle) profileFields.handle = req.body.handle;
        if(req.body.location) profileFields.location = req.body.location;
        if(req.body.bio) profileFields.bio = req.body.bio;
       
        //Social Networks
        profileFields.social = {};

        if(req.body.facebook) profileFields.facebook = req.body.facebook;
        if(req.body.twitter) profileFields.twitter = req.body.twitter;
        if(req.body.instagram) profileFields.instagram = req.body.instagram;
        if(req.body.youtube) profileFields.youtube = req.body.youtube;
        if(req.body.linkedin) profileFields.linkedin = req.body.linkedin;
       
        //Skills and Interests are split into array
        if(typeof req.body.skills !== 'undefined') {
          profileFields.skills = req.body.skills .split(',');
        } 
        if(typeof req.body.interests !== 'undefined') {
            profileFields.interests = req.body.interests .split(',');
          } 

        //Badges
        if(typeof req.body.badges !== 'undefined') {
        profileFields.badges = req.body.badges.split(','); 
        }

        Profile.findOne({ user: req.user.id })
            .then(profile => {
                if(profile) {
                    //update
                    Profile.findOneAndUpdate(
                        { user: req.user.id }, 
                        { $set: profileFields }, 
                        { new: true }
                    ).then(profile => res.json(profile))
                } else {
                    //Create
                    

                    //Check if handles exists
                    Profile.findOne({ handle: profileFields.handle }).then(profile => {
                        if(profile) {
                            errors.handle = 'That handle already exists';
                            res.status(400).json(errors);
                        }
                        //Save Profile
                        new Profile(profileFields).save().then(profile => res.json(profile));
                    })
                }
            })
    // //fetching the current user's profile
    // Profile.findOne({ user: req.user.id })
    //     .then(profile => {
    //         if(!profile) {
    //             errors.noprofile = 'There is no profile for this user';
    //             return res.status(404).json(errors);
    //         }
    //     })
    //    .catch(err => res.status(404).json(err)) 
    // }
});
module.exports = router;
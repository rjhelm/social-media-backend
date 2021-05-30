const { User } = require('../models');
const { db } = require('../models/Thought');

const userController = {
    getAllUsers(req, res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        }).select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        }).populate({
            path: 'friends',
            select: '-__v'
        }).then(dbUserData => res.json(dbUserData))
        
    }
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _userModel = _interopRequireDefault(require("../models/userModel"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/createadmin', async (req, res) => {
    try {
        const user = new _userModel.default({
            name: 'Leon',
            email: 'le.o.n@outlook.com',
            password: '123',
            isAdmin: true,
        })
        const newUser = await user.save();
        res.send(user);
    }catch(error){
        res.send({msg: error.message});
    }
});

//handles user sign in requests
router.post('/signin', async (req, res) => {
    try{
        // Query db to see if user exists
        const signinUser = await _userModel.default.findOne({
            email: req.body.email,
            password: req.body.password,
        });

        if(signinUser){
            res.send({
                _id: signinUser._id,
                name: signinUser.name,
                email: signinUser.email,
                isAdmin: signinUser.isAdmin,
                token: (0, _util.getToken)(signinUser),
            });
        }else{
            res.status(401).send({msg: 'Invalid Email or Password'});
        }

    }catch(error){
        res.send({msg: error.message});
    }
});


// Handles request to create a new user
router.post('/register', async (req, res) => {
    const user = new _userModel.default({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    const newUser = await user.save();
    if (newUser){
        res.send({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
        });
    }else{
        res.status(401).send({msg: 'Invalid user data. Account not created'});
    }
})

var _default = router;
exports.default = _default;
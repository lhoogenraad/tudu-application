import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.get('/createadmin', async (req, res) => {
    try {
        const user = new User({
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

router.post('/signin', async (req, res) => {
    try{
        // Query db to see if user exists
        const signinUser = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        });

        if(signinUser){
            res.send({
                _id: signinUser._id,
                name: signinUser.name,
                email: signinUser.email,
                isAdmin: signinUser.isAdmin,
                token: getToken(signinUser),
            });
        }else{
            res.status(401).send({msg: 'Invalid Email or Password'});
        }

    }catch(error){
        res.send({msg: error.message});
    }
});

export default router;
import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../model/userModels.js'
import bcrypt from 'bcryptjs'
import { generatedToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler( async (req, res) => {
    //await User.remove({})
    const createdUser = User.insertMany(data.users)
    res.send({ createdUser });
}) 
);

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        }
    }
    res.status(401).send({ message: 'Invalid email or password verification' });
}));

userRouter.post('/register', expressAsyncHandler(async (req, res) => {
    const user = new User({ name: req.body.name, email: req.body.email, password: bcrypt.hashSync(req.body.password, 8) });
    const createdUser = await user.save();
    res.json({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generatedToken(createdUser)
    });
}))

export default userRouter;
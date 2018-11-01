const user = require('../model/user');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');

authRouter.post('signup', (req, res) => {
    user.findOne({username: req.body.username}, (err, existingUser) => {
        if (err) return res.status(500).send({success: false, err});
        if (existingUser !== null) {
            return res.status(400).send({success: false, err: "That username is currently unavailable"});
        }
        const newUser = new user(req.body);
        newUser.save((err, user) => {
            if (err) return res.status(500).send({success: false, err});
            const token = jwt.sign(user.toObject(), process.env.SECRET);
            return res.status(201).send({success: true, user: user.toObject(), token});
        });
    });
});

authRouter.post("/login", (req, res) => {
    user.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user || user.password !== req.body.password) {
            return res.status(403).send({success: false, err: "The email did not match the password.  Keep your head up and try again"});
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET);
        return res.send({token: token, user: user.toObject(), success: true})
    });
});
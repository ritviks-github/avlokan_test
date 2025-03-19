const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secretKey = "my_secret_key";

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        } else {
            const compare = await bcrypt.compare(password, user.password);
            if (!compare) {
                return res.status(401).json({ success: false, message: "Invalid credentials" });
            } else {
                const token = await jwt.sign({ id: user._id }, secretKey);
                return res.json({ success: true, authToken: token });
            }
        }
    } catch (e) {
        console.error(e);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});

module.exports = router;

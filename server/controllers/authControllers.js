import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userschema.js';

const JWT_SECRET= process.env.JWT_SECRET

const signup = async (req, res) => {
    const { username, displayname, dob, mail, password } = req.body;

    try {
        const existingUser = await User.findOne({ mail });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        const user = new User({ username, displayname, dob, mail, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Login Controller
const login = async (req, res) => {
    const { mail, password } = req.body;

    try {
        const user = await User.findOne({ mail });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.cookie('authToken', token, { httpOnly: true, maxAge: 3600000 });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Logout Controller
const logout = (req, res) => {
    res.clearCookie('authToken');
    res.status(200).json({ message: 'Logged out successfully' });
};

export{signup,login,logout}
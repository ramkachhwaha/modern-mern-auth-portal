import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import { generateToken } from '../config/jwt.config.js';
import ServerResponse from '../response/pattern.js';

// Login User
export async function loginUser(req, res) {
    try {
        const { login_user, password } = req.body;

        const query = isNaN(login_user)
            ? { email: login_user }
            : { phone: login_user };

        let user = await User.findOne(query);

        if (!user) {
            return res.status(404).json(new ServerResponse(false, null, "User not found", null));
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json(new ServerResponse(false, null, "password Invalid", null));
        }

        let userData = user.toObject();
        delete userData.password;
        delete userData.__v
        user = userData;

        let token = generateToken({ id: user._id, email: user.email });

        user.token = token; // Attach token to user object

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'development' ? false : true,
            maxAge: 24 * 60 * 60 * 1000 * 24 * 30 // 30 days
        });

        return res.status(200).json(new ServerResponse(true, user, "User login successfully", null));

    } catch (error) {
        return res.status(500).json(new ServerResponse(false, null, error.message, error));
    }
}

// Register User
export async function addUser(req, res) {
    try {
        const { user_name, email, phone, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            user_name,
            email,
            phone,
            password: hashedPassword,
        });

        return res.status(201).json(new ServerResponse(true, user, "User registered successfully", null));

    } catch (error) {
        return res.status(500).json(new ServerResponse(false, null, error.message, error));
    }
}

// Get User
export async function getUser(req, res) {
    try {
        let users = await User.findById(req.user.id).select("-password -__v");
        if (!users) {
            return res.status(404).json(new ServerResponse(false, null, "User not found", null));
        }
        return res.status(200).json(new ServerResponse(true, users, "Successfully fetched users", null));
    } catch (error) {
        return res.status(500).json(new ServerResponse(false, null, error.message, error));
    }
}
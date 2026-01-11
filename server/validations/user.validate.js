import { body } from "express-validator";

export const registerUserValidator = [
    body("user_name")
        .trim()
        .notEmpty()
        .withMessage("User Name is required")
        .isLength({ min: 2, max: 32 })
        .withMessage("User Name must be 2-32 characters"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format"),

    body("phone")
        .notEmpty().withMessage("Phone number is required")
        .matches(/^(\+91[\-\s]?)?[0]?(91)?[6-9]\d{9}$/)
        .withMessage("Invalid Indian phone number"),

    body("password")
        .notEmpty().withMessage("Password is required")
        .isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
];

export const loginUserValidator = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format"),

    body("password")
        .notEmpty().withMessage("Password is required")
];
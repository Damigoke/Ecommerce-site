const express = require('express');
const { options } = require('joi');
const bcrypt = require('bcrypt');
const registerUserSchema = require('../utills/utill');
const userModel = require('./db/Database');

export async function registerUser(req,res){
try { const {
        firstname,
        lastname,
        email,
        country,
        yearOfExp,
        course,
        password, 
        confirm_pessword } = req.body;
    
    // Validate User Input
       const userValidation = registerUserSchema.validate(req.body, options);
       
       if(userValidation.error){
        res.status(400).json({Error:userValidation.error.details[0].messages})
       }

       const hashPassword = await bcrypt.hash(password, 8)
       
    
    return res.status(200).send("SignUp Successful")
} catch(error){
    res.status(500).send("Kindly Sign up as a User")
    }
}

import Joi from 'joi';

export const registerUserSchema = Joi.Object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().trim().lowercase().required(),
    country: Joi.string().required(),
    yearOfExp: Joi.string().required(),
    course: Joi.string(),
    password: Joi.string().regex(/^[A-Za-z0-9]{3,30}$/).required(),
    confirm_password: Joi.any().equal(Joi.ref('password')).required().label('confirm password')
})

const options = {
    abortEarly: false,
    errors: {
        wrap:{
            labe: ''
        }
    }
}
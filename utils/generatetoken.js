import jwt from 'jsonwebtoken';

export const generateUserToken = (email, role) => {
   const token = jwt.sign({ email:email, role: role }, process.env.JWT_SECRET_KEY);
   return token;
    };

    
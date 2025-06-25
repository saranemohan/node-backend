import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
export const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN;

export const hashText = async (text) => {
    return await bcrypt.hash(text, 10);
}

export const isHashMatch = async (text, hash) =>{
    return await bcrypt.compare(text, hash);
}

export const generateAccessToken = async (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export const generateRefreshToken = async (payload) => {
    return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: JWT_REFRESH_EXPIRES_IN });
}

export const verifyAccessToken = async (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

export const verifyRefreshToken = async (token) => {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
}
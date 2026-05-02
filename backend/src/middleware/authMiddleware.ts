import {Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


interface AuthRequest extends Request {
    user?: any;
}

export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer " )) {
            return res.status(401).json({message: "Not authorized" });
        }

        const token = authHeader.split(" ")[1];
        console.log("TOKEN:", token);

        if (!token) {
            return res.status(401).json({ message: "No token "});

        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload & { id: string };
        console.log("DECODED:" , decoded);

        req.user = decoded.id;

        next();
    }   catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};
import { Request, Response, NextFunction } from "express";
import { generateAccessToken, registerUserToken } from "../auth/auth";
import { doesUserExist, registerUser } from "../database/user";

export const login = async (req: Request, res: Response, next: NextFunction) =>{
    let username: string = req.body.username
    res.setHeader('Content-Type', 'text/plain');
    if(username !== undefined){
        username = username.trim();
        if(username.length > 1){
            let result:boolean = await doesUserExist(username);
            if(result === false){
                await registerUser(username);
            }

            const token = generateAccessToken(username);
            registerUserToken(username, token);
                
            return res.send(token).status(200);
        }
    }
    return res.sendStatus(400);
}
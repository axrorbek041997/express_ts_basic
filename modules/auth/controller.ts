import { Request, Response } from "express";

export async function login(req: Request, res: Response) {
    res.send({message: 'success login'})
}

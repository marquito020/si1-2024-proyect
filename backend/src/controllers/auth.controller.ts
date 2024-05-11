import { Request, Response } from "express";
import authService from "../services/auth.service";

const login = async (req: Request, res: Response) => {
    console.log(req.body);
    try {
        const user = await authService.login(req.body);
        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

export default {
    login
}
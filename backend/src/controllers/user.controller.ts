import { Request, Response } from "express";
import userService from "../services/user.service";

const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getUsers();
        return res.status(200).json(users);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await userService.getUserById(req.params.id);
        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

const createUser = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const user = await userService.createUser(req.body);
        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

export default {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
import { Request, Response } from "express";
import roleService from "../services/role.service";

const getRoles = async (req: Request, res: Response) => {
    try {
        const roles = await roleService.getRoles();
        return res.status(200).json(roles);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

const getRoleById = async (req: Request, res: Response) => {
    try {
        const role = await roleService.getRoleById(req.params.id);
        return res.status(200).json(role);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

const createRole = async (req: Request, res: Response) => {
    try {
        const role = await roleService.createRole(req.body);
        return res.status(200).json(role);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

const updateRole = async (req: Request, res: Response) => {
    try {
        const role = await roleService.updateRole(req.params.id, req.body);
        return res.status(200).json(role);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

const deleteRole = async (req: Request, res: Response) => {
    try {
        const role = await roleService.deleteRole(req.params.id);
        return res.status(200).json(role);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

export default {
    getRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
}

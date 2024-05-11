import roleModel from "../models/role.model";
import { Role } from "../interface/role.interface";

const getRoles = async () => {
    return await roleModel.find();
}

const getRoleById = async (id: string) => {
    return await roleModel.findById(id);
}

const createRole = async (role: Role) => {
    const roleFound = await roleModel.findOne({ nombre: role.nombre });
    if (roleFound) {
        throw new Error('Role already exists');
    }
    const newRole = new roleModel(role);
    return await newRole.save();
}

const updateRole = async (id: string, role: Role) => {
    return await roleModel.findByIdAndUpdate(id, role, { new: true });
}

const deleteRole = async (id: string) => {
    return await roleModel.findByIdAndDelete(id);
}

export default {
    getRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
}


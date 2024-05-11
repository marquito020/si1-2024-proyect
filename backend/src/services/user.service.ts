import userModel from "../models/user.model";
import { User } from "../interface/user.interface";
import { encrypt } from "../utils/bcrypt.utils";

const getUsers = async () => {
    return await userModel.find().populate('idRol').populate('idPersona');
}

const getUserById = async (id: string) => {
    return await userModel.findById(id).populate('idRol').populate('idPersona');
}

const createUser = async (user: User) => {
    const passwordHash = await encrypt(user.password);
    /* Search User */
    const userFound = await userModel.findOne({ userName: user.userName });
    if (userFound) {
        throw new Error('UserName already exists');
    }
    const newUser = new userModel({ ...user, password: passwordHash });
    return await newUser.save();
}

const updateUser = async (id: string, user: User) => {
    return await userModel.findByIdAndUpdate(id, user, { new: true });
}

const deleteUser = async (id: string) => {
    return await userModel.findByIdAndDelete(id);
}

export default {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
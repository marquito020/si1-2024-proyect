import { Auth } from "../interface/auth.interface";
import userModel from "../models/user.model";
import { verify } from "../utils/bcrypt.utils";
import jsonwebtoken from "jsonwebtoken";

const login = async (auth: Auth) => {
    if (!auth.userName || !auth.password) {
        throw new Error("Email and password are required");
    }

    const userFound = await userModel.findOne({ userName: auth.userName }).populate('idRol idPersona');
    if (!userFound) {
        throw new Error("User not found");
    }

    const isMatch = await verify(auth.password, userFound.password);
    if (!isMatch) {
        throw new Error("Invalid password");
    }

    const token = jsonwebtoken.sign({ id: userFound._id }, process.env.JWT_SECRET_KEY || "secret", {
        expiresIn: 86400
    });

    return { token, _id: userFound._id, userName: userFound.userName, idRol: userFound.idRol, idPersona: userFound.idPersona };
}

export default { login };
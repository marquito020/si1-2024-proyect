import { Schema, model } from "mongoose";
import { Role } from "../interface/role.interface";

const roleSchema = new Schema<Role>({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

export default model<Role>('Rol', roleSchema);

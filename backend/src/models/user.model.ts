import { Schema, model } from 'mongoose';
import { User } from '../interface/user.interface';

const userSchema = new Schema<User>({
    ci: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    },
    idRol: {
        type: Schema.Types.ObjectId,
        ref: 'Rol',
        required: true
    },
    idPersona: {
        type: Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

export default model<User>('User', userSchema);
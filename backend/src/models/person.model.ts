import { Schema, model } from "mongoose";
import { Person } from "../interface/person.interface";

const personSchema = new Schema<Person>({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    ci: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: false
    },
    telefono: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: false,
    },
    direccion: {
        type: String,
        required: false
    },
    tipo: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

export default model<Person>('Person', personSchema);
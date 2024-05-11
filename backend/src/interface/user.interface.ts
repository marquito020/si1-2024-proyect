import { Role } from './role.interface';
import { Person } from './person.interface';
export interface User {
    _id?: string;
    ci: string;
    userName: string;
    password: string;
    estado: boolean;
    idRol: Role;
    idPersona: Person;
}

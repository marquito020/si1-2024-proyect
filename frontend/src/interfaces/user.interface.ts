import { Auth } from "../../../backend/src/interface/auth.interface";
import { Role } from "./rol.interface";

interface UserBase {
  id?: number;
  name: string;
  userName: string;
}

export interface User {
  _id?: string;
  ci: string;
  userName: string;
  estado: boolean;
  idRol: Role;
  idPersona: Person;
}

export interface Person {
  _id?: string;
  nombre: string;
  apellido: string;
  ci: string;
  telefono: string;
  tipo: string;
  correo?: string;
  fechaNacimiento?: Date;
  direccion?: string;
}

export interface PersonElements extends HTMLFormControlsCollection {
  nombre: HTMLInputElement;
  apellido: HTMLInputElement;
  ci: HTMLInputElement;
  telefono: HTMLInputElement;
  tipo: HTMLInputElement;
  correo: HTMLInputElement;
  fechaNacimiento: HTMLInputElement;
  direccion: HTMLInputElement;
}

export interface PersonFormElement extends HTMLFormElement {
  readonly elements: PersonElements;
}

export interface UserInfo extends UserBase {
  token: string;
  idRol: Role;
  idPersona: Person;
}

export interface NewUser extends Auth {
  name: string;
  phone?: string;
  address?: string;
}

export interface UserElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  phone: HTMLInputElement;
  address: HTMLInputElement;
}

export interface UserCustomForm extends HTMLFormElement {
  readonly elements: UserElements;
}

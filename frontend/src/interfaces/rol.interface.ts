export interface Role {
  _id?: string;
  nombre: string;
  descripcion: string;
}

export interface RoleElements extends HTMLFormControlsCollection {
  nombre: HTMLInputElement;
  descripcion: HTMLInputElement;
}

export interface RoleFormElement extends HTMLFormElement {
  readonly elements: RoleElements;
}

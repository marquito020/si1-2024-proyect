export interface Auth {
  userName: string;
  password: string;
}

interface LoginElements extends HTMLFormControlsCollection {
  userName: HTMLInputElement;
  password: HTMLInputElement;
}

export interface LoginCustomForm extends HTMLFormElement {
  readonly elements: LoginElements;
}

export interface RegisterElements extends LoginElements {
  name: HTMLInputElement;
  //fotografo
  type: HTMLOptionElement;
  rate: HTMLInputElement;
  //organizador
  webSite: HTMLInputElement;
}

export interface RegisterCustomForm extends HTMLFormElement {
  readonly elements: RegisterElements;
}



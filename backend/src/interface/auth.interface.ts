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
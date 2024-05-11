import { baseUrl } from "../constants/routes";
import { Person } from "../interfaces/user.interface";

export const empleadoUrl = baseUrl + "api/persons";

const getAllEmpleados = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getEmpleadoById = async (url: string, id: string) => {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  return data;
};

const createEmpleado = async (url: string, { arg }: { arg: Person }) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  });
  const data = await response.json();
  return data;
};

const updateEmpleado = async (url: string, id: string, empleado: Person) => {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(empleado),
  });
  const data = await response.json();
  return data;
};

const deleteEmpleado = async (url: string, id: string) => {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

export {
    getAllEmpleados,
    getEmpleadoById,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado

}
import { baseUrl } from "../constants/routes";
import { Role } from "../interfaces/rol.interface";

export const roleUrl = baseUrl + "api/roles";

const getAllRoles = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const getRoleById = async (url: string, id: string) => {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
};

const createRole = async (url: string, { arg }: { arg: Role }) => {
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg),
    });
    const data = await response.json();
    return data;
};

const updateRole = async (url: string, id: string, role: Role) => {
    const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(role),
    });
    const data = await response.json();
    return data;
};

const deleteRole = async (url: string, id: string) => {
    const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
    });
    const data = await response.json();
    return data;
};

export {
    getAllRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
}
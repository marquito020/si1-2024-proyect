import { baseUrl } from "../constants/routes";

export const userUrl = baseUrl + "api/users";

const getAllUsers = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export {
    getAllUsers
}
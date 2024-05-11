import useSWR from "swr";
import { Role } from "../interfaces/rol.interface";
import useSWRMutation from "swr/mutation";
import { getAllRoles, roleUrl, createRole } from "../services/role.service";

const useAllRoles = () => {
    const { data, isLoading, error } = useSWR<Role[]>(roleUrl, getAllRoles);
    return { roles: data, isLoading, error };
};

const useAddRole = () => {
    const { trigger, isMutating, error } = useSWRMutation<
        Role,
        string,
        string,
        Role
    >(roleUrl, createRole);

    return { addRole: trigger, isMutating, error };
};

export {
    useAllRoles,
    useAddRole
}
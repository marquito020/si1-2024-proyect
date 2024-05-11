import useSWR from "swr";
import { User } from "../interfaces/user.interface";
import { getAllUsers, userUrl } from "../services/user.service";

const useAllUsers = () => {
    const { data, isLoading, error } = useSWR<User[]>(userUrl, getAllUsers);
    return { users: data, isLoading, error };
};

export {
    useAllUsers
}
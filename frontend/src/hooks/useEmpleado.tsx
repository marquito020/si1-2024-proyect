import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { Person } from "../interfaces/user.interface";
import { getAllEmpleados, empleadoUrl, createEmpleado } from "../services/empleado.service";

const useAllEmpleados = () => {
    const { data, isLoading, error } = useSWR<Person[]>(empleadoUrl, getAllEmpleados);
    return { empleados: data, isLoading, error };
};

const useAddEmpleado = () => {
    const { trigger, isMutating, error } = useSWRMutation<
        Person,
        string,
        string,
        Person
    >(empleadoUrl, createEmpleado);

    return { addEmpleado: trigger, isMutating, error };
};

export {
    useAllEmpleados,
    useAddEmpleado
}
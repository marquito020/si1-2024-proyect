import { useAllUsers } from "../../../hooks/useUser";

function User() {
    const { users, isLoading, error } = useAllUsers();
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Usuarios
            </h4>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {users && (
                <div className="max-w-full overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">CI</th>
                                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Nombre</th>
                                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">UserName</th>
                                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Rol</th>
                                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id}>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{user.ci}</td>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{user.idPersona.nombre}</td>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{user.userName}</td>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{user.idRol.nombre}</td>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        {user.estado === true ? "Activo" : "Inactivo"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default User;
import { useNavigate } from "react-router-dom";
import { useAllRoles } from "../../../hooks/useRole";
import { PrivateRoutes } from "../../../constants/routes";

function Roles() {
    const navigate = useNavigate();
    const { roles, isLoading, error } = useAllRoles();
    console.log(roles);
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Roles
            </h4>
            {/* Button Crear */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-primary rounded-md"
                        onClick={() => {
                            navigate(PrivateRoutes.ROLECREATE);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            />
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Crear
                    </button>
                </div>
            </div>
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Nombre
                            </th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                Descripción
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles?.map((role) => (
                            <tr key={role._id} className="text-black dark:text-white">
                                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                    {role.nombre}
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    {role.descripcion}
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Roles;
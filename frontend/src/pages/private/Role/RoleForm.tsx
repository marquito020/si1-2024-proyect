import { FormEvent } from "react";
import { useAddRole } from "../../../hooks/useRole";
import { RoleFormElement } from "../../../interfaces/rol.interface";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../../constants/routes";

function RoleForm() {
    const { addRole } = useAddRole();
    const navigate = useNavigate();
    const handleSubmit = async (e: FormEvent<RoleFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const nombre = form.elements.nombre.value;
        const descripcion = form.elements.descripcion.value;
        const response = await addRole({ nombre, descripcion });
        console.log(response);
        /* form.reset(); */
        if (response._id) {
            navigate(PrivateRoutes.ROLES);
        } else {
            alert("Error al crear el rol");
        }
    }

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Role
            </h4>
            <form onSubmit={handleSubmit} id="role-form" className="form">
                <div className="form-group mb-6">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="descripcion">Descripción</label>
                    <input type="text" id="descripcion" name="descripcion" required
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                </div>
                <button type="submit"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-primary rounded-md"
                >Crear</button>
            </form>
        </div>
    )
}

export default RoleForm;
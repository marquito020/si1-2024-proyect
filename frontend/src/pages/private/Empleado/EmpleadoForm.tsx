import { FormEvent } from "react";
import { useAddEmpleado } from "../../../hooks/useEmpleado";
import { PersonFormElement } from "../../../interfaces/user.interface";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../../constants/routes";

function EmpleadoForm() {
    const { addEmpleado } = useAddEmpleado();
    const navigate = useNavigate();
    const handleSubmit = async (e: FormEvent<PersonFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const nombre = form.elements.nombre.value;
        const apellido = form.elements.apellido.value;
        const correo = form.elements.correo.value;
        const ci = form.elements.ci.value;
        const tipo = form.elements.tipo.value;
        const telefono = form.elements.telefono.value;
        const response = await addEmpleado({ nombre, apellido, correo, ci, tipo, telefono });
        console.log(response);
        /* form.reset(); */
        if (response._id) {
            navigate(PrivateRoutes.EMPLEADOS);
        } else {
            alert("Error al crear el empleado");
        }
    }

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Empleado
            </h4>
            <form onSubmit={handleSubmit} id="empleado-form" className="form">
                <div className="form-group mb-6">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" required
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="correo">Correo</label>
                    <input type="email" id="correo" name="correo" required
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="ci">CI</label>
                    <input type="text" id="ci" name="ci" required
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="tipo">Tipo</label>
                    <input type="text" id="tipo" name="tipo" required
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" id="telefono" name="telefono" required
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

export default EmpleadoForm;

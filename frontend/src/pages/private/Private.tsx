import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../../layout/DefaultLayout";
import ECommerce from "../Dashboard/ECommerce";
import { lazy } from "react";
import { PrivateRoutes } from "../../constants/routes";
import routes from './../../routes';
import { Suspense } from "react";
import Loader from "../../common/Loader";
const Empleados = lazy(() => import("./Empleado/Empleados"));
const EmpleadoForm = lazy(() => import("./Empleado/EmpleadoForm"));
const Roles = lazy(() => import("./Role/Role"));
const RoleForm = lazy(() => import("./Role/RoleForm"));
const Usuarios = lazy(() => import("./User/User"));

function Private() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                {/* Empleados */}
                <Route path={PrivateRoutes.EMPLEADOS} element={
                    <Suspense fallback={<Loader />}>
                        <Empleados />
                    </Suspense>
                } />

                {/* Crear Empleado */}
                <Route path={PrivateRoutes.EMPLEADOCREATE} element={
                    <Suspense fallback={<Loader />}>
                        <EmpleadoForm />
                    </Suspense>
                } />

                {/* Roles */}
                <Route path={PrivateRoutes.ROLES} element={
                    <Suspense fallback={<Loader />}>
                        <Roles />
                    </Suspense>
                } />

                {/* Crear Rol */}
                <Route path={PrivateRoutes.ROLECREATE} element={
                    <Suspense fallback={<Loader />}>
                        <RoleForm />
                    </Suspense>
                } />

                {/* Usuarios */}
                <Route path={PrivateRoutes.USERS} element={
                    <Suspense fallback={<Loader />}>
                        <Usuarios />
                    </Suspense>
                } />
                <Route index element={<ECommerce />} />
                {routes.map((routes, index) => {
                    const { path, component: Component } = routes;
                    return (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Suspense fallback={<Loader />}>
                                    <Component />
                                </Suspense>
                            }
                        />
                    );
                })}

            </Route>
        </Routes>
    );
}

export default Private;
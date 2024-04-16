import { Navigate, Outlet } from "react-router-dom"
import React from "react";

const ProtectedRouter = () =>{
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};
export default ProtectedRouter
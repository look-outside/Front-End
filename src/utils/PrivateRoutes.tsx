import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import authStore from "../store/authStore";

const PrivateRoute = () => {
	const { userProfile, token } = authStore();
	const { pathname } = useLocation();

	if (!token) {
		return <Navigate to="/login" />;
	}
	if(token && userProfile.type === "USER" && pathname === "/admin") {
		return <Navigate to="/" />
	}
	return <Outlet />;
};

export default PrivateRoute;

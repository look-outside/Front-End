import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SnsLogin = () => {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const token = params.get("token");
		console.log(token, jwtDecode(token));
		// navigate("/")
	}, []);
	return <></>;
};

export default SnsLogin;

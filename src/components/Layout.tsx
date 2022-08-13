import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
	return (
		<>
			<Header />
			<Sidebar />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
};

export default Layout;

// 나중에 설정? 공통부분

const Main = styled.main`
	/* min-height: 100vh;
	padding: 0 2em;
	@media screen and (min-width: 1160px) {
		max-width: 1160px;
		margin: 0 auto;
	} */
	flex: 1;
	
margin-bottom: 50px;
`;

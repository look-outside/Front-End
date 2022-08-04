import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Clothes from "./pages/clothes/Clothes";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Meeting from "./pages/meeting/Meeting";
import Sky from "./pages/sky/Sky";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="today_clothes" element={<Clothes />} />

					<Route path="today_sky" element={<Sky />} />
					<Route path="today_meeting" element={<Meeting />}/>
					<Route path="login" element={<Login/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

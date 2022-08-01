import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Clothes from "./pages/Clothes/Clothes";
import DetailPost from "./pages/DetailPost/DetailPost";
import Home from "./pages/Home/Home";
import Meeting from "./pages/Meeting/Meeting";
import Sky from "./pages/Sky/Sky";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/today_clothes" element={<Clothes />}>
						{/* /daily , /:id */}
						{/* /free, /:id */}
					</Route>
					<Route path="/today_sky" element={<Sky />}>
						<Route path=":id" element={<DetailPost />} />
					</Route>
					<Route path="/today_meeting" element={<Meeting />}>
						<Route path=":id" element={<DetailPost />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

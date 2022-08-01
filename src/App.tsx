import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clothes from "./pages/clothes/Clothes";
import Home from "./pages/home/Home";
import Meeting from "./pages/meeting/Meeting";
import Sky from "./pages/sky/Sky";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/today_clothes" element={<Clothes />}>
					{/* <Route path="/daily" element={}>
						<Route path=":id" element={}/>
					</Route>
					<Route path="/free" element={}>
						<Route path=":id" element={}/>
					</Route> */}
				</Route>
				<Route path="/today_sky" element={<Sky />}>
					{/* <Route path=":id" element={<DetailPost />} /> */}
				</Route>
				<Route path="/today_meeting" element={<Meeting />}>
					{/* <Route path=":id" element={<DetailPost />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

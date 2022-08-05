import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Comments from "./components/myPage/Comments";
import Delete from "./components/myPage/Delete";
import Info from "./components/myPage/Info";
import Posts from "./components/myPage/Posts";
import Clothes from "./pages/clothes/Clothes";

import Home from "./pages/home/Home";
import Join from "./pages/Join/Join";
import Login from "./pages/login/Login";
import Meeting from "./pages/meeting/Meeting";
import MyPage from "./pages/myPage/MyPage";
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
					<Route path="join" element={<Join/>}/>

					<Route path="my_page" element={<MyPage />}>
						<Route path='info' element={<Info />} />
						<Route path='posts' element={<Posts/>} />
						<Route path='comments' element={<Comments/>} />
						<Route path='delete' element={<Delete/>} />
					</Route>

				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

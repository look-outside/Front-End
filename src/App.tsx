import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import Clothes from "./pages/clothes/Clothes";
import FindId from "./pages/find_id/FindId";
import FindPassword from "./pages/find_password/FindPassword";
import NewPassword from "./pages/find_password/NewPassword";


import Home from "./pages/home/Home";
import Join from "./pages/Join/Join";
import Login from "./pages/login/Login";
import Meeting from "./pages/meeting/Meeting";
import MyPage from "./pages/myPage/MyPage";
import Sky from "./pages/sky/Sky";
import UploadPost from "./pages/upload_post/UploadPost";
import GlobalStyles from "./styles/GlobalStyles";
import Info from "./pages/myPage/Info";
import Posts from "./pages/myPage/Posts";
import Delete from "./pages/myPage/Delete";
import Comments from "./pages/myPage/Comments";
import Admin from "./pages/admins/Admin";
import Users from "./pages/admins/Users";
import Board from "./pages/admins/Board";
import DailyLook from "./pages/clothes/DailyLook";
import Free from "./pages/clothes/Free";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="today_clothes">
						<Route path="main" element={<Clothes />} />
						<Route path="dailylook" element={<DailyLook />} />
						<Route path="free" element={<Free />} />
					</Route>
					<Route path="today_sky" element={<Sky />} />
					<Route path="today_meeting" element={<Meeting />}/>
					<Route path="login" element={<Login/>}/>
					<Route path="join" element={<Join/>}/>
					<Route path="upload_post" element={<UploadPost/>}/>	
					<Route path="find">
						<Route path="id" element={<FindId/>}/>
						<Route path="password" element={<FindPassword/>}/>
					</Route>
					<Route path="edit_password" element={<NewPassword/>}/>
					<Route path="my_page" element={<MyPage />}>
						<Route path='info' element={<Info />} />
						<Route path='posts' element={<Posts/>} />
						<Route path='comments' element={<Comments/>} />
						<Route path='delete' element={<Delete/>} />
					</Route>
					<Route path="admin" element={<Admin/>}>
						<Route path="users" element={<Users/>} />
						<Route path="board" element={<Board/>} />
					</Route>

				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

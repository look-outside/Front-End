import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import PwCheck from "./pages/myPage/PwCheck";
import Info from "./pages/myPage/Info";
import Posts from "./pages/myPage/Posts";
import Delete from "./pages/myPage/Delete";
import Comments from "./pages/myPage/Comments";
import Admin from "./pages/admins/Admin";
import Users from "./pages/admins/Users";
import Board from "./pages/admins/Board";
import DailyLook from "./pages/clothes/DailyLook";
import Free from "./pages/clothes/Free";
import DetailPost from "./pages/detail_post/DetailPost";
import SnsLogin from "./pages/SnsLogin";
import Weather from "./components/Weather";
import SnsInfo from "./pages/myPage/SnsInfo";
import { onSilentRefresh } from "./services/user";
import authStore from "./store/authStore";
import axios from "axios";
import PrivateRoute from "./utils/PrivateRoutes";
import PublicRoutes from "./utils/PublicRoutes";

function App() {
	const { token } = authStore();
	useEffect(() => {
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		onSilentRefresh();
	}, [token]);

	return (
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* public routes */}
					<Route index element={<Home />} />
					<Route path="today_clothes">
						<Route path="main" element={<Clothes />} />
						<Route path="dailylook" element={<DailyLook />} />
						<Route path="dailylook/:id" element={<DetailPost />} />
						<Route path="free" element={<Free />} />
						<Route path="free/:id" element={<DetailPost />} />
					</Route>
					<Route path="today_sky" element={<Sky />} />
					<Route path="today_sky/:id" element={<DetailPost />} />

					<Route path="today_meeting" element={<Meeting />} />
					<Route path="today_meeting/:id" element={<DetailPost />} />

					<Route path="find">
						<Route path="id" element={<FindId />} />
						<Route path="password" element={<FindPassword />} />
					</Route>
					<Route path="edit_password" element={<NewPassword />} />
					<Route element={<PublicRoutes />}>
						<Route path="login" element={<Login />} />
						<Route path="join" element={<Join />} />
						<Route path="/oauth/redirect" element={<SnsLogin />} />
					</Route>
					{/* protect */}
					<Route element={<PrivateRoute />}>
						<Route path="upload_post" element={<UploadPost />} />
						<Route path="my" element={<MyPage />}>
							<Route path="info" element={<PwCheck />} />
							<Route path="info/update" element={<Info />} />
							<Route path="snsInfo" element={<SnsInfo />} />
							<Route path="posts" element={<Posts />} />
							<Route path="comments" element={<Comments />} />
							<Route path="delete" element={<Delete />} />
						</Route>
						<Route path="admin" element={<Admin />}>
							<Route path="users" element={<Users />} />
							<Route path="board" element={<Board />} />
						</Route>
						<Route path="Weather" element={<Weather />} />
					</Route>
					<Route path="*" element={<Navigate to="/" replace />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

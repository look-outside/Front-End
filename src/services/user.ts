import axios from "axios";
import jwtDecode from "jwt-decode";
import authStore from "../store/authStore";
const JWT_EXPIRY_TIME = 1800 * 1000;

interface UserInfo {
	useName?: string;
	useNick?: string;
	useId: string;
	usePw: string;
	useGender?: string;
	useEmail?: string;
}

interface Token {
	useId: string;
	role: string;
	useNick: string;
	useNo: number;
}

export const signUp = async (userInfo: UserInfo) => {
	try {
		const res = await axios.post("/user/sign-up", userInfo);
		return res;
	} catch (error: any) {
		return error;
	}
};

export const checkId = async (userId: string) => {
	const res = await axios.get(`/user/Id/${userId}`);
	return res.data;
};

export const checkNickName = async (userNickName: string) => {
	const res = await axios.get(`/user/Nickname/${userNickName}`);
	return res.data;
};

export const findId = async (email: string) => {
	try {
		const res = await axios.get(`/user/Email/${email}`);
		return res;
	} catch (error: any) {
		return error;
	}
};
export const findPassword = async (userId: string, userName: string) => {
	try {
		const res = await axios.get(`/user/${userId}/${userName}`);
		return res;
	} catch (error: any) {
		return error;
	}
};

export const login = async (userInfo: UserInfo, addUser: any) => {
	try {
		const res = await axios.post("/user/sign-in", userInfo, {
			withCredentials: true,
		});
		const token = res.data.body.token;
		const { useId, role, useNick, useNo }: Token = jwtDecode(
			token
		);
		const user = {
			id: useId,
			type: role === "ROLE_USER" ? "USER" : "ADMIN",
			nickname: useNick,
			no: useNo,
			sns: false,
		};
		onLoginSuccess(token);
		addUser(user, token);
		return res;
	} catch (error: any) {
		return error;
	}
};

export const onSilentRefresh = () => {
	axios
		.get("/user/refresh")
		.then((res) => res.data.body && onLoginSuccess(res.data.body.token));
};
export const onLoginSuccess = (token: any) => {
	axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
};

// 임시 닉네임만
export const infoEdit = async (
	useNo: number,
	nickname: string,
	gender: string
) => {
	try {
		const res = await axios.put("/user", {
			useNo: useNo,
			useNick: nickname,
			useGender: gender,
		});
		return res.data;
	} catch (error: any) {
		return error.response;
	}
};

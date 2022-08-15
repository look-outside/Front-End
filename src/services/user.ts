import axios from "axios";
import jwtDecode from "jwt-decode";




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
	useRole: string;
	useNick: string;
	useNo : number;
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

export const logout = async (removeUser: any) => {
	await axios.put(`/user/sign-out`);
	removeUser();
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
		const token = res.data.jwtToken
		const { useId, useRole, useNick, useNo }: Token = jwtDecode(token);
		const user = {
			id: useId,
			type: useRole,
			nickname: useNick,
			no : useNo
		};
		onLoginSuccess(token);
		addUser(user,token);
		return res;
	} catch (error: any) {
		return error;
	}
};

// const onSilentRefresh = () => {
//     axios.post('/silent-refresh', data)
//         .then(onLoginSuccess)
//         .catch(error => {
// 			console.log(error)
//             // ... 로그인 실패 처리
//         });
// }

const onLoginSuccess = (token:string) => {
	// accessToken 설정
	axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

	// accessToken 만료하기 1분 전에 로그인 연장 , 요건 나중에 해보자
	// setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
};


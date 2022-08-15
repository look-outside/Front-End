import create from "zustand";
import { persist, devtools } from "zustand/middleware";

interface User {
	id: string;
	type: string;
	nickname: string;
	no : number;
}

interface UserState {
	userProfile: null | User;
	token: string | null;
	addUser: (user: User, token: string) => void;
	removeUser: () => void;
}


// 따로 타입 지정은 나중에

const authStore = create<UserState>()(
	devtools(
		persist((set) => ({
			userProfile: null,
			token: null,
			addUser: (user: User, token: string) =>
				set({ userProfile: user, token }),
			removeUser: () => set({ userProfile: null, token: null }),
		}),{name : "user"})
	)
	
);


export default authStore;

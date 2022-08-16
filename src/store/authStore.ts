import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export interface User {
	no: number;
	id: string;
	type: string;
	nickname: string;
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

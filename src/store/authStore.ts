import create from "zustand";
import { persist, devtools } from "zustand/middleware";

const authStore = (set: any) => ({
	userProfile: null,
	token : null,
	addUser: (user: any, token: string) => set({ userProfile: user ,token}),
	removeUser: () => set({ userProfile: null ,token:null}),
});

const useAuthStore = create(
	devtools(
		persist(authStore, {
			name: "user",
		})
	)
);

export default useAuthStore;

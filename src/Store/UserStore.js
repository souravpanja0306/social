import { create } from 'zustand';
import { getUserDetails } from '../Services/UserService.js';

export const useUserStore = create((set, get) => ({
    user: [],
    isLoading: false,
    fetchUserDetails: async ({
        token = "",
    }) => {
        set({ isLoading: true });
        try {
            const user = await getUserDetails({ token: token });
            set({ user: user.body.data });
        } catch (error) {
            console.error('Failed to fetch user details:', error);
        } finally {
            set({ isLoading: false });
        };
    },
}));

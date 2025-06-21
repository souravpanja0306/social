import { create } from 'zustand';
import { getAllPost, likePost } from '../Services/PostService.js';

export const usePostStore = create((set, get) => ({
    posts: [],
    isLoading: false,

    fetchPosts: async () => {
        set({ isLoading: true });
        try {
            const posts = await getAllPost();
            set({ posts: posts.body.data });
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        } finally {
            set({ isLoading: false });
        }
    },

    likePost: async ({
        postId = "",
    }) => {
        try {
            const updatedPost = await likePost({ postId });
            if (updatedPost) {
                set((state) => ({
                    posts: state.posts.map((post) =>
                        post._id === updatedPost._id ? updatedPost : post
                    ),
                }));
            }
        } catch (error) {
            console.error('Like failed:', error);
        };
    },
}));

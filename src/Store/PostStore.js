import { create } from 'zustand';
import { getAllPost, getSinglePost, likePost } from '../Services/PostService.js';

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

    fetchSinglePosts: async ({
        postId = "",
    }) => {
        set({ isLoading: true });
        try {
            const posts = await getSinglePost({ postId: postId });
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
                    posts: state.posts.map((post) => {
                        if (post._id === postId) {
                            return { ...post, like: post.like ? false : true, likeCount: updatedPost.body.likes };
                        }
                        return post;
                    })
                }));
            }
        } catch (error) {
            console.error('Like failed:', error);
        };
    },
}));

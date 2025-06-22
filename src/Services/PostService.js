import axios from "axios";

export const getAllPost = async () => {
    try {
        let result = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_BASE_URL}post/all-post`,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token_new")}`
            }
        });
        if (result.data.status === 200) {
            return result.data
        };
    } catch (error) {
        console.log(`Something went wrong : services : getAllPost : ${error}`);
    };
};


export const getSinglePost = async ({
    postId = "",
}) => {
    try {
        let result = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_BASE_URL}post/single-post/${postId}`,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token_new")}`
            }
        });
        if (result.data.status === 200) {
            return result.data
        };
    } catch (error) {
        console.log(`Something went wrong : services : getSinglePost : ${error}`);
    };
};

export const likePost = async ({
    postId = "",
}) => {
    try {
        let result = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_BASE_URL}post/like-post?postId=${postId}`,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token_new")}`
            }
        });
        if (result.data.status === 200) {
            return result.data;
        };
    } catch (error) {
        console.log(`Something went wrong : services : likePost : ${error}`);
    };
};
import axios from "axios";

export const getUserDetails = async ({
    token = "",
}) => {
    try {
        let result = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_BASE_URL}auth/get-user-details`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (result.data.status === 200) {
            return result.data
        };
    } catch (error) {
        console.log(`Something went wrong : services : getUserDetails : ${error}`);
    };
};


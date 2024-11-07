import axios from 'axios';

export const verifyToken = async () => {
    console.log('verify token function called');
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/token/verify`,
            {
                withCredentials: true
            }
        );
        console.log('verify token function response', response);
        return response.data;
    } catch (error: any) {
        console.log('verify token function error', error.message);
        return error.message;
    }
};

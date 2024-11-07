import axios from 'axios';

export const verifyToken = async (token: string) => {
    try {
        console.log('PUblic endpoint', process.env.NEXT_PUBLIC_API_ENDPOINT);
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/token/verify`
        );
        console.log('verify token function response', response);
        return response.data;
    } catch (error: any) {
        console.log('verify token function error', error.message);
        return error.message;
    }
};

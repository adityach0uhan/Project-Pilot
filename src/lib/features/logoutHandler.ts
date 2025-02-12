import { useDispatch } from 'react-redux';
import { logout } from './userDataSlice';
import { persistor } from '../store';

const logoutHandler = (dispatch: any) => async () => {
    try {
        document.cookie =
            'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        dispatch(logout());
        try {
            await persistor.purge();
        } catch (purgeError) {
            console.error('Purge failed:', purgeError);
        }

        window.location.href = '/';
    } catch (error) {
        console.log('Logout failed:', error);
    }
};

export default logoutHandler;

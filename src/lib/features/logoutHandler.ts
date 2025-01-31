import { useDispatch } from 'react-redux';
import { logout } from './userDataSlice';
import { persistor } from '../store';

const logoutHandler = async () => {
    try {
        document.cookie =
            'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        const dispatch = useDispatch();
        dispatch(logout());
        await persistor.purge();
        window.location.href = '/';
    } catch (error) {
        console.log('Logout failed:', error);
    }
};

export default logoutHandler;

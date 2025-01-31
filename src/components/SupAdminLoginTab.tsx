'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { useSelector, useDispatch } from 'react-redux';
import { addCurrentUserData } from '@/lib/features/userDataSlice';
type Props = {};

const SupAdminLoginTab = (props: Props) => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const [loading, setloading] = useState(false);

    const handelSubmit = async () => {
        try {
            setloading(true);
            const response = await axios.post(
                'http://localhost:4000/api/v1/auth/super-admin/login',
                {
                    email,
                    password
                },
                { withCredentials: true }
            );

            if (response.data.success) {
                dispatch(
                    addCurrentUserData({
                        _id: response.data.data._id,
                        name: response.data.data.name,
                        email: response.data.data.email,
                        profilePic: response.data.data.profilePic,
                        role: response.data.data.role
                    })
                );
                toast.success('Login Successful , redirecting to admin page');
                router.push('/dashboard/superadmin');
            } else {
                toast.error('Login Failed');
            }
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setEmail('');
            setPassword('');
            setloading(false);
        }
    };

    return (
        <Card className='min-h-80'>
            <CardTitle className='px-6 pt-6 pb-3'>SuperAdmin Login</CardTitle>
            <CardDescription className='mx-6'>
                Login with Right credentials
            </CardDescription>
            <CardContent className=''>
                <div className=''>
                    <Label htmlFor='admin-email'>Email</Label>
                    <Input
                        id='admin-email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                    />
                </div>
                <div className=''>
                    <Label htmlFor='admin-password'>Password</Label>
                    <Input
                        id='admin-password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                    />
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    disabled={loading}
                    onClick={handelSubmit}
                    type='button'
                    aria-label='Login'>
                    {loading ? 'Wait....' : 'Login'}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default SupAdminLoginTab;
function dispatch(arg0: {
    payload: import('@/lib/features/userDataSlice').userSlice;
    type: 'user/addCurrentUserData';
}) {
    throw new Error('Function not implemented.');
}

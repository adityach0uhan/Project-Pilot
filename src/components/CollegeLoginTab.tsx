'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { InputOTP, InputOTPSlot } from '@/components/ui/input-otp';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'sonner';
import { useSelector, useDispatch } from 'react-redux';
import { addCurrentUserData } from '@/lib/features/userDataSlice';
import StudentLoginTab from '@/components/StudentLoginTab';
import { group } from 'console';
type Props = {};

const CollegeLoginTab = (props: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passkey, setPasskey] = useState('');
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const handelSubmit = async () => {
        try {
            const resp = await axios.post(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/college/login`,
                {
                    email,
                    password,
                    passkey
                },
                {
                    withCredentials: true
                }
            );
            if (resp.data.success) {
                toast.success(resp.data.message);
                await dispatch(
                    addCurrentUserData({
                        _id: resp.data.data._id,
                        name: resp.data.data.collegeName,
                        email: resp.data.data.email,
                        role: resp.data.data.role,
                        collegeId: resp.data.data.collegeId,
                        collegeLocation: resp.data.data.collegeLocation
                    })
                );
            }
            router.push('/dashboard/college');
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className='min-h-80'>
            <CardTitle className='px-6 pt-6 pb-3'>College</CardTitle>
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
                <div className=''>
                    <Label htmlFor='admin-passkey'>Passkey</Label>
                    <Input
                        id='admin-passkey'
                        value={passkey}
                        onChange={(e) => setPasskey(e.target.value)}
                        type='password'
                    />
                </div>
            </CardContent>
            <CardFooter>
                <Button type='button' onClick={handelSubmit} aria-label='Login'>
                    {loading ? 'Loading...' : 'Login'}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CollegeLoginTab;

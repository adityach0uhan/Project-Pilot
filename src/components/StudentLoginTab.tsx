'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { addCurrentUserData } from '@/lib/features/userDataSlice';
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { Button } from './ui/button';
type Props = {};

const StudentLoginTab = (props: Props) => {
    const router = useRouter();
    const [studentEmail, setStudentEmail] = useState('');
    const [studentPassword, setstudentPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const handleStudentLogin: any = async (): Promise<void> => {
        try {
            setLoading(true);
            const response: AxiosResponse<any> = await axios.post(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/student/login`,
                {
                    email: studentEmail,
                    password: studentPassword
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
                        semester: response.data.data.semester,
                        role: response.data.data.role,
                        collegeId: response.data.data.collegeId,
                        section: response.data.data.section,
                        branch: response.data.data.branch,
                        gender: response.data.data.gender,
                        classRollNumber: response.data.data.classRollNumber,
                        groupNumber: response.data.data.groupNumber
                    })
                );
                toast.success('Login successful', {
                    position: 'bottom-center',
                    duration: 2000
                });
                router.push('/dashboard/student');
            }
            console.log('Login successful:', response.data);
            setLoading(false);
            setstudentPassword('');
            setStudentEmail('');
        } catch (error: any) {
            toast.error('Login failed', {
                description: 'Invalid email or password',
                position: 'bottom-center',
                duration: 3000
            });
            setLoading(false);
            setstudentPassword('');
            setStudentEmail('');
            if (axios.isAxiosError(error)) {
                console.log(
                    'Error with the request:',
                    error.response?.data || error.message
                );
            } else {
                console.log('Unexpected error:', error.message);
            }
        }
    };

    return (
        <Card className='min-h-80  '>
            <CardHeader>
                <CardTitle>Student Login</CardTitle>
                <CardDescription>
                    Login with your student credentials.
                </CardDescription>
            </CardHeader>
            <CardContent className=''>
                <div className=''>
                    <Label htmlFor='student-email'>Email</Label>
                    <Input
                        id='student-email'
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                        type='email'
                    />
                </div>
                <div className=''>
                    <Label htmlFor='student-password'>Password</Label>
                    <Input
                        id='student-password'
                        value={studentPassword}
                        onChange={(e) => setstudentPassword(e.target.value)}
                    />
                </div>
                <Link
                    className='text-sm mt-1 text-blue-600 underline underline-offset-4 '
                    href={'/forgot-password'}>
                    forgot password ?
                </Link>
            </CardContent>
            <CardFooter>
                <Button
                    type='button'
                    onClick={handleStudentLogin}
                    aria-label='Login'
                    disabled={loading}>
                    {loading ? 'Wait...' : 'Login '}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default StudentLoginTab;

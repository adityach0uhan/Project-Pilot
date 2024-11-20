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

export default function page() {
    const router = useRouter();
    const [studentEmail, setStudentEmail] = useState('');
    const [studentPassword, setstudentPassword] = useState('');
    const [teacherEmail, setTeacherEmail] = useState('');
    const [teacherPassword, setTeacherPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [teacherSecret, setTeacherSecret] = useState('');
    const [secretError, setSecretError] = useState('');

    const dispatch = useDispatch();

    const handleStudentLogin: any = async (): Promise<void> => {
        try {
            const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT || '';
            setLoading(true);
            const response: AxiosResponse<any> = await axios.post(
                `${apiEndpoint}/auth/student/login`,
                {
                    email: studentEmail,
                    password: studentPassword
                },
                { withCredentials: true }
            );

            if (response.data.success && response.data.status == 200) {
                dispatch(
                    addCurrentUserData({
                        _id: response.data.data._id,
                        name: response.data.data.name,
                        email: response.data.data.email,
                        profilePic: response.data.data.profilePic,
                        department: response.data.data.department,
                        semester: response.data.data.semester,
                        role: response.data.data.role
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

    const handelTeacherLogin: any = async (): Promise<void> => {
        const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
        const teacherSecretCode = process.env.NEXT_PUBLIC_TEACHER_SECRET;
        try {
            setLoading(true);
            if (teacherSecret != teacherSecretCode) {
                toast.error('Invalid Secret Code');
                setSecretError('Wrong Secret Code');
                setTeacherSecret('');
                setLoading(false);
                return;
            }
            setSecretError('Right Secret Code');
            const response = await axios.post(
                `${apiEndpoint}/auth/teacher/login`,
                {
                    email: teacherEmail,
                    password: teacherPassword
                },
                { withCredentials: true }
            );
            console.log(response);
            if (response.data.success && response.data.status == 200) {
                toast.success('Login successful', {
                    position: 'bottom-center',
                    duration: 2000
                });
                router.push('/dashboard/teacher');
            }
            setLoading(false);
            setTeacherEmail('');
            setTeacherPassword('');
        } catch (error: any) {
            setLoading(false);
            setTeacherEmail('');
            setTeacherPassword('');
            toast.error('Login failed', {
                description: 'Invalid email or password',
                position: 'bottom-center',
                duration: 3000
            });
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
        <>
            <div className='flex md:mt-1 w-full my-auto md:gap-20 md:flex-row flex-col items-center justify-evenly gap-0 '>
                <Image
                    className='block md:hidden'
                    height={250}
                    width={250}
                    src={'/login1.svg'}
                    alt='Image'
                />
                <Image
                    className='hidden md:block'
                    height={400}
                    width={450}
                    src={'/login1.svg'}
                    alt='Image'
                />
                <Tabs
                    defaultValue='student'
                    className='w-[350px] my-auto mx-2 '>
                    <TabsList className='grid w-full grid-cols-2 '>
                        <TabsTrigger value='student'>Student </TabsTrigger>
                        <TabsTrigger value='teacher'>Teacher </TabsTrigger>
                    </TabsList>
                    <TabsContent value='student'>
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
                                        onChange={(e) =>
                                            setStudentEmail(e.target.value)
                                        }
                                        type='email'
                                    />
                                </div>
                                <div className=''>
                                    <Label htmlFor='student-password'>
                                        Password
                                    </Label>
                                    <Input
                                        id='student-password'
                                        value={studentPassword}
                                        onChange={(e) =>
                                            setstudentPassword(e.target.value)
                                        }
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
                    </TabsContent>
                    <TabsContent value='teacher'>
                        <Card className='min-h-80'>
                            <CardTitle className='px-6 pt-6 pb-3'>
                                Teacher Login
                            </CardTitle>
                            <CardContent className=''>
                                <div className='flex items-center justify-between  my-1'>
                                    <p className='text-sm'>
                                        Teacher Secret Code
                                    </p>
                                    {secretError && (
                                        <span className='text-xs text-red-500 gap-1 flex items-center '>
                                            <Image
                                                src={'/wrong.svg'}
                                                alt='Error'
                                                width={15}
                                                height={15}
                                            />
                                            {secretError}
                                        </span>
                                    )}
                                </div>
                                <InputOTP
                                    maxLength={6}
                                    value={teacherSecret}
                                    onChange={(value) => {
                                        setTeacherSecret(value);
                                    }}>
                                    <InputOTPSlot
                                        className='rounded-md '
                                        index={0}
                                    />
                                    <InputOTPSlot
                                        className='rounded-md '
                                        index={1}
                                    />
                                    <InputOTPSlot
                                        className='rounded-md '
                                        index={2}
                                    />
                                    <InputOTPSlot
                                        className='rounded-md '
                                        index={3}
                                    />
                                    <InputOTPSlot
                                        className='rounded-md '
                                        index={4}
                                    />
                                    <InputOTPSlot
                                        className='rounded-md '
                                        index={5}
                                    />
                                </InputOTP>
                                <div className=''>
                                    <Label htmlFor='teacher-email'>Email</Label>
                                    <Input
                                        value={teacherEmail}
                                        onChange={(e) =>
                                            setTeacherEmail(e.target.value)
                                        }
                                        id='teacher-email'
                                        type='email'
                                    />
                                </div>
                                <div className=''>
                                    <Label htmlFor='teacher-password'>
                                        Password
                                    </Label>
                                    <Input
                                        id='teacher-password'
                                        value={teacherPassword}
                                        onChange={(e) =>
                                            setTeacherPassword(e.target.value)
                                        }
                                        type='password'
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    type='button'
                                    onClick={handelTeacherLogin}
                                    aria-label='Login'
                                    disabled={loading}>
                                    {loading ? 'Wait...' : 'Login '}
                                </Button>
                                <Link
                                    className='text-sm ml-8 text-blue-600 underline underline-offset-4 '
                                    href={'/forgot-password'}>
                                    frogot password ?
                                </Link>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    );
}

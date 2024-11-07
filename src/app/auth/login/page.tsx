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
import { set } from 'zod';

export default function page() {
    const router = useRouter();
    const [studentEmail, setStudentEmail] = useState('');
    const [studentPassword, setstudentPassword] = useState('');
    const [teacherEmail, setTeacherEmail] = useState('');
    const [teacherPassword, setTeacherPassword] = useState('');
    const [loading, setLoading] = useState(false);

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

            console.log('Login successful:', response.data);
            if (response.data.success && response.data.status == 200) {
                router.push('/dashboard/student');
            }
            setLoading(false);

            setstudentPassword('');
            setStudentEmail('');
        } catch (error: any) {
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
        const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT || '';
        try {
            setLoading(true);
            const response = await axios.post(
                `${apiEndpoint}/auth/teacher/login`,
                {
                    email: teacherEmail,
                    password: teacherPassword
                },
                { withCredentials: true }
            );
            setLoading(false);
            console.log('Teacher login successful:', response.data);
            if (response.data.success && response.data.status === 200) {
                router.push('/dashboard/teacher');
            }
            setTeacherEmail('');
            setTeacherPassword('');
        } catch (error: any) {
            setLoading(false);
            setTeacherEmail('');
            setTeacherPassword('');
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
        <Tabs
            defaultValue='student'
            className='w-[400px] my-auto mx-4 md:mt-6 mt-20'>
            <TabsList className='grid w-full grid-cols-2'>
                <TabsTrigger value='student'>Student </TabsTrigger>
                <TabsTrigger value='teacher'>Teacher </TabsTrigger>
            </TabsList>
            <TabsContent value='student'>
                <Card>
                    <CardHeader>
                        <CardTitle>Student Login</CardTitle>
                        <CardDescription>
                            Login with your student credentials.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                        <div className='space-y-1'>
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
                        <div className='space-y-1'>
                            <Label htmlFor='student-password'>Password</Label>
                            <Input
                                id='student-password'
                                value={studentPassword}
                                onChange={(e) =>
                                    setstudentPassword(e.target.value)
                                }
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            type='button'
                            onClick={handleStudentLogin}
                            aria-label='Login'
                            disabled={loading}>
                            {loading ? 'Wait...' : 'Login Kar'}
                        </Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value='teacher'>
                <Card>
                    <CardHeader>
                        <CardTitle>Teacher Login</CardTitle>
                        <CardDescription>
                            Do not attempt to login if you are not a teacher.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                        <div className='space-y-1'>
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
                        <div className='space-y-1'>
                            <Label htmlFor='teacher-password'>Password</Label>
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
                        </Button>{' '}
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    );
}

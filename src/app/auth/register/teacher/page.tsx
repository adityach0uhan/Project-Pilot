'use client';
import { Button } from '@/components/ui/button';
import { teacherSchema } from '@/zod/teacher.schema';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Inputs = {
    name: string;
    email: string;
    profilePic: string;
    password: string;
    department: string;
    designation: string;
    semester: number;
    employeeId: string;
    confirmPassword: string;
};

const TeacherRegistrationPage = () => {
    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>({ resolver: zodResolver(teacherSchema) });

    const registerTeacher = async (data: Inputs) => {
        setLoading(true);
        if (data.password !== data.confirmPassword) {
            toast.error('Passwords do not match');
            setLoading(false);
            return;
        }

        const { confirmPassword, ...userData } = data;
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/teacher/register`,
                userData
            );
            if (response.data.success) {
                console.log('Success ', response.data);
                setLoading(false);
                toast.success('Teacher registered successfully', {
                    description: 'Login with your credentials'
                });
                router.push('/auth/login');
            } else {
                console.log('Error ', response.data);
                setLoading(false);
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Internal server error');
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <div className='w-screen min-h-auto flex bg-white flex-col items-center justify-center p-2'>
            <h1 className='w-full text-center text-3xl my-3'>
                Teacher Registration
            </h1>
            <form
                className='w-auto py-2 shadow-2xl rounded-2xl justify-center flex gap-y-2 gap-x-6 h-full items-start flex-wrap'
                onSubmit={handleSubmit(registerTeacher)}>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='name'>Name</Label>
                    <Input {...register('name')} />
                    <p className='text-sm text-red-600'>
                        {errors.name?.message}
                    </p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='email'>Email</Label>
                    <Input {...register('email')} />
                    <p className='text-sm text-red-600'>
                        {errors.email?.message}
                    </p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='profilePic'>Profile Picture</Label>
                    <Input type='text' {...register('profilePic')} />
                    <p className='text-sm text-red-600'>
                        {errors.profilePic?.message}
                    </p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='password'>Password</Label>
                    <Input type='password' {...register('password')} />
                    <p className='text-sm text-red-600'>
                        {errors.password?.message}
                    </p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='confirmPassword'>Confirm Password</Label>
                    <Input type='password' {...register('confirmPassword')} />
                    <p className='text-sm text-red-600'>
                        {errors.confirmPassword?.message}
                    </p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='department'>Department</Label>
                    <Input {...register('department')} />
                    <p className='text-sm text-red-600'>
                        {errors.department?.message}
                    </p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='designation'>Designation</Label>
                    <Input {...register('designation')} />
                    <p className='text-sm text-red-600'>
                        {errors.designation?.message}
                    </p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='semester'>Semester</Label>
                    <Input type='number' {...register('semester')} />
                    <p className='text-sm text-red-600'>
                        {errors.semester?.message}
                    </p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='employeeId'>Employee ID</Label>
                    <Input {...register('employeeId')} />
                    <p className='text-sm text-red-600'>
                        {errors.employeeId?.message}
                    </p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Button
                        type='submit'
                        className='bg-[#3C71E2] w-full text-black hover:bg-[#98b3ee]'
                        variant='secondary'>
                        {loading ? 'Wait...' : 'Register'}
                    </Button>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor=''>Already have an account?</Label>
                    <Link href='/auth/login'>
                        <Button
                            className='border-2 text-sm text-[#3C71E2]'
                            variant='link'>
                            Login
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default TeacherRegistrationPage;

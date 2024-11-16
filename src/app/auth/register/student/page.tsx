'use client';
import { Button } from '@/components/ui/button';
import { studentSchema } from '@/zod/student.schema';
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
    profilePic: string;
    email: string;
    department: string;
    password: string;
    semester: number;
    classRollNumber: string;
    enrollmentNumber: string;
    universityRollNumber: string;
    confirmPassword: string;
};
const page = () => {
    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>({ resolver: zodResolver(studentSchema) });

    const registerUser = async (data: Inputs) => {
        setLoading(true);
        if (data.password !== data.confirmPassword) {
            toast.error('Passwords do not match');
            setLoading(false);
            return;
        }
        const { confirmPassword, ...userData } = data;
        try {
            const response = await axios.post(
                `${apiEndpoint}/auth/student/register`,
                userData
            );
            if (response.data.success) {
                setLoading(false);
                toast.success('Student registered successfully', {
                    description: 'Login with your credentials'
                });
                router.push('/auth/login');
            } else {
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
        <div className='w-screen min-h-auto flex bg-white flex-col items-center  justify-center p-2'>
            <h1 className='  w-full text-center text-3xl my-3'>
                Student Registration
            </h1>
            <form
                className='w-auto py-2  shadow-2xl rounded-2xl  justify-center flex gap-y-2 gap-x-6  h-full items-start flex-wrap '
                onSubmit={handleSubmit(registerUser)}>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='name'>Name</Label>
                    <Input {...register('name')} />
                    <p className='text-sm text-red-600'>
                        {errors.name?.message}
                    </p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='profilePic'>Profile Picture</Label>
                    <Input {...register('profilePic')} />
                    <p className='text-sm  text-red-600'>
                        {errors.profilePic?.message}
                    </p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='email'>Email</Label>
                    <Input {...register('email')} />
                    <p className='text-sm text-red-600'>
                        {' '}
                        {errors.email?.message}
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
                        {errors.confirmPassword?.message}{' '}
                    </p>
                </div>

                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='semester'>Semester</Label>
                    <Input type='text' {...register('semester')} />
                    <p className='text-sm text-red-600'>
                        {errors.semester?.message}
                    </p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='classRollNumber'>Class Roll Number</Label>
                    <Input {...register('classRollNumber')} />
                    <p className='text-sm text-red-600'>
                        {errors.classRollNumber?.message}
                    </p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='enrollmentNumber'>Enrollment Number</Label>
                    <Input {...register('enrollmentNumber')} />
                    <p className='text-sm text-red-600'>
                        {errors.enrollmentNumber?.message}
                    </p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='universityRollNumber'>
                        University Roll Number
                    </Label>
                    <Input {...register('universityRollNumber')} />
                    <p className='text-sm text-red-600'>
                        {errors.universityRollNumber?.message}
                    </p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor=''>Make sure the info is right</Label>
                    <Button
                        type='submit'
                        className='bg-[#3C71E2] w-full text-black hover:bg-[#98b3ee]'
                        variant={'secondary'}>
                        {loading ? 'wait...' : 'Register'}
                    </Button>
                    <p className='text-sm  text-red-600'></p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor=''> Already have an account? </Label>
                    <Link href='/auth/login'>
                        <Button
                            className=' border-2 text-sm text-[#3C71E2]'
                            variant={'link'}>
                            Login
                        </Button>
                    </Link>
                    <p className='text-sm  text-red-600'></p>
                </div>
            </form>
        </div>
    );
};

export default page;

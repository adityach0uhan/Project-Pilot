'use client';
import { Button } from '@/components/ui/button';
import { studentSchema } from '@/zod/student.schema';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>({ resolver: zodResolver(studentSchema) });

    const registerUser = async (data: Inputs) => {
        const { confirmPassword, ...userData } = data;
        console.log(userData);
    };

    return (
        <div className='w-screen min-h-screen flex flex-col  justify-center p-2'>
            <h1 className='w-full text-center text-3xl my-3'>
                Student Registration{' '}
            </h1>
            <form
                className='w-full p-2 md:mx-10 py-8 bg-white shadow-2xl rounded-2xl  justify-center flex gap-8 h-full items-start flex-wrap'
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
                        Register
                    </Button>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor=''> Already have an account? </Label>
                    <Button className='text-sm text-[#3C71E2]' variant={'link'}>
                        click here to go to Login
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default page;

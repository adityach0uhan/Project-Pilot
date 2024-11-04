'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm, SubmitHandler } from 'react-hook-form';

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
};
const page = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>();

    const registerUser = async (data: Inputs) => {
        console.log(data);
    };

    return (
        <div className='w-screen min-h-screen flex  justify-center p-2'>
            <form
                className='w-full p-2 md:mx-10 bg-white shadow-2xl rounded-2xl  justify-center flex gap-8 h-full items-start flex-wrap'
                onSubmit={handleSubmit(registerUser)}>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='name'>Name</Label>
                    <Input {...register('name')} />
                    <p className='text-sm text-red-600'>error</p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='profilePic'>Profile Picture</Label>
                    <Input {...register('profilePic')} />
                    <p className='text-sm text-red-600'>error</p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='email'>Email</Label>
                    <Input {...register('email')} />
                    <p className='text-sm text-red-600'>error</p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='department'>Department</Label>
                    <Input {...register('department')} />
                    <p className='text-sm text-red-600'>error</p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='password'>Password</Label>
                    <Input {...register('password')} />
                    <p className='text-sm text-red-600'>error</p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='semester'>Semester</Label>
                    <Input {...register('semester')} />
                    <p className='text-sm text-red-600'>error</p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='classRollNumber'>Class Roll Number</Label>
                    <Input {...register('classRollNumber')} />
                    <p className='text-sm text-red-600'>error</p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='enrollmentNumber'>Enrollment Number</Label>
                    <Input {...register('enrollmentNumber')} />
                    <p className='text-sm text-red-600'>error</p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Label htmlFor='universityRollNumber'>
                        University Roll Number
                    </Label>
                    <Input {...register('universityRollNumber')} />
                    <p className='text-sm text-red-600'>error</p>
                </div>
                <div className='w-72 h-20 flex justify-evenly flex-col'>
                    <Button
                        type='submit'
                        className='bg-[#3C71E2] w-full text-black hover:bg-[#98b3ee]'
                        variant={'secondary'}>
                        Register
                    </Button>
                    <Button className='text-sm text-[#3C71E2]' variant={'link'}>
                        already have an accont? login here
                    </Button>
                    <p className='text-sm text-red-600'>error</p>
                </div>
            </form>
        </div>
    );
};

export default page;

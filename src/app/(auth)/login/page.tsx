import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='w-screen min-h-96 flex items-center justify-center p-2 '>
            <div className='flex flex-col items-center rounded-xl md:p-6 justify- shadow-2xl bg-white  md:min-w-96 min-w-full p-2 gap-6'>
                <h1 className='w-full text-center text-2xl'>Login</h1>
                <div className='flex flex-col gap-2 items-center justify-start w-full'>
                    <Label className='w-full  text-start' htmlFor='email'>
                        Email
                    </Label>
                    <Input
                        className='w-full  text-start'
                        type='email'
                        id='email'
                    />
                </div>
                <div className='flex flex-col gap-2 items-center justify-start w-full'>
                    <Label className='w-full  text-start' htmlFor='password'>
                        Password
                    </Label>
                    <Input
                        className='w-full  text-start'
                        type='password'
                        id='password'
                    />
                </div>
                <div className='flex flex-col  items-center justify-start w-full'>
                    <Button className='w-full bg-black'>Login</Button>{' '}
                    <div className='p-1 mt-2 text-sm flex flex- gap-7  w-full items-center justify-between'>
                        <Link
                            className=' text-blue-700  text-start'
                            href={'/forgot-password'}>
                            forgot-password...?
                        </Link>
                        <Link
                            className=' text-blue-700  text-start'
                            href='/register'>
                            new ? register here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;

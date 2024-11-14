import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='w-screen f-auto p-6 flex items-center md:flex-row flex-col md:gap-10 gap-3 justify-center'>
            <div className='w-72 min-h-64  bg-white border-2 flex-col overflow-hidden p-1 px-4 flex items-center justify-between rounded-lg gap-1'>
                <Image
                    src='/student.svg'
                    alt='Student Registration Page'
                    width={230}
                    height={240}
                />
                <Link
                    href='/auth/register/student'
                    className=' border-2 rounded-lg w-full h-10 flex items-center justify-center'>
                    Student Registration
                </Link>
            </div>
            <div className='w-72 min-h-64  bg-white border-2 flex-col overflow-hidden p-1 px-4 flex items-center justify-between rounded-lg gap-1'>
                <Image
                    className='mt-9'
                    src='/teacher.svg'
                    alt='Student Registration Page'
                    width={290}
                    height={240}
                />
                <Link
                    className=' border-2 rounded-lg w-full h-10 flex items-center justify-center'
                    href='/auth/register/teacher'>
                    Teacher Registration
                </Link>
            </div>
        </div>
    );
};

export default page;

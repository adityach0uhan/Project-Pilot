import React from 'react';
import Image from 'next/image';
const ToolsUsed = () => {
    return (
        <div className='w-full flex md:flex-row flex-col gap-3 items-center justify-center '>
            <div className=' flex justify-center flex-col bg-white p-4 items-center rounded-lg md:w-1/2 w-full'>
                <h1 className=' w-full text-center text-xl my-3'>Frontend</h1>
                <ul className=' flex flex-wrap gap-6 items-start justify-center'>
                    <li className='flex items-center'>
                        <Image
                            src='/tools/nextjs.svg'
                            alt='Next.js Logo'
                            width={40}
                            height={40}
                        />
                    </li>
                    <li className='flex items-center'>
                        <Image
                            src='/tools/react.svg'
                            alt='React Logo'
                            width={40}
                            height={40}
                        />
                    </li>
                    <li className='flex items-center'>
                        <Image
                            src='/tools/reacthookform.svg'
                            alt='React Hook Form Logo'
                            width={40}
                            height={40}
                        />
                    </li>
                    <li className='flex items-center'>
                        <Image
                            src='/tools/zod.svg'
                            alt='Zod Logo'
                            width={40}
                            height={40}
                        />
                    </li>
                    <li className='flex items-center'>
                        <Image
                            src='/tools/tailwind.svg'
                            alt='Tailwind CSS Logo'
                            width={40}
                            height={40}
                        />
                    </li>
                    <li className='flex items-center'>
                        <Image
                            src='/tools/typescript.svg'
                            alt='TypeScript Logo'
                            width={40}
                            height={40}
                        />
                    </li>
                </ul>
            </div>
            <div className=' flex justify-center flex-col bg-white p-4 items-center rounded-lg md:w-1/2 w-full'>
                {' '}
                <h1 className=' w-full text-center text-xl my-3'>Backend</h1>
                <ul className=' flex flex-wrap gap-6 items-start justify-center'>
                    <li className='flex items-center'>
                        <Image
                            src='/tools/expressjs.svg'
                            alt='Express.js Logo'
                            width={90}
                            height={40}
                        />
                    </li>

                    <li className='flex items-center'>
                        <Image
                            src='/tools/jwt.svg'
                            alt='JWT Logo'
                            width={90}
                            height={40}
                        />
                    </li>
                    <li className='flex items-center'>
                        <Image
                            src='/tools/mongodb.svg'
                            alt='MongoDB Logo'
                            width={90}
                            height={40}
                        />
                    </li>
                    <li className='flex items-center'>
                        <Image
                            src='/tools/nodemailer.png'
                            alt='Nodemailer Logo'
                            width={60}
                            height={40}
                        />
                    </li>
                    <li className='flex items-center'>
                        <Image
                            src='/tools/socket.io.svg'
                            alt='Socket.io Logo'
                            width={90}
                            height={40}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ToolsUsed;

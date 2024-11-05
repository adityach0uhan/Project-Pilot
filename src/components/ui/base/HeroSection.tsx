import Image from 'next/image';
import { Button } from '../button';
import Link from 'next/link';
import Features from './Features';
import ToolsUsed from './ToolsUsed';
const HeroSection = () => {
    return (
        <div className='w-screen p-2 '>
            <div className='w-full flex items-center justify-center flex-col gap-2'>
                <Image
                    src='HeroSection.svg'
                    alt='Student Project Manager '
                    width={370}
                    height={370}
                />
                <h1 className='md:text-4xl text-2xl'>
                    Student Project Manager
                </h1>
                <p> A student project manager tool for teacher </p>
                <span className='flex gap-3'>
                    <Link href='/register'>
                        <Button
                            className='w-28 text-white bg-[#3C71E2]'
                            variant={'outline'}>
                            Register
                        </Button>
                    </Link>
                    <Link href='/login'>
                        <Button
                            className='w-28 text-white bg-[#3C71E2]'
                            variant={'outline'}>
                            Login
                        </Button>
                    </Link>
                </span>
            </div>{' '}
            <h1 className='my-6 py-2 w-full  text-center md:text-start  text-3xl md:pl-20 '>
                Features
            </h1>
            <Features />
            <h1 className='my-6 py-2 w-full  text-center md:text-start  text-3xl md:pl-20 '>
                Tools & Technologies Used
            </h1>
            <ToolsUsed />
        </div>
    );
};

export default HeroSection;

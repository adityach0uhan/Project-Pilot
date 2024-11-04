import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';
import Image from 'next/image';
import Footer from './Footer';

const Navbar = () => {
    const imageStyle: any = {
        scale: 2.5,
        objectFit: 'contain'
    };
    return (
        <div className='w-screen h-16 flex items-center justify-between md:px-8 px-2 py-1  bg-white overflow-hidden'>
            <div className='flex items-center hover:cursor-pointer'>
                <Image
                    className='ml-20 mt-5'
                    height={50}
                    width={120}
                    style={imageStyle}
                    alt='SPM'
                    src={'/LOGO.gif'}
                />
            </div>
            <div className='md:flex hidden  items-center gap-3 text-lg hover:cursor-pointer'>
                <Link href='/'>Home</Link>
                <Link href='/login'>Login</Link>
                <Link href='/register'>Register</Link>
            </div>
            <div className='md:hidden text-right'>
                <Sheet>
                    <SheetTrigger>
                        <Image
                            src={'/hamburger.svg'}
                            height={40}
                            width={40}
                            alt='Menu'
                        />
                    </SheetTrigger>
                    <SheetContent side={'left'}>
                        <SheetHeader>
                            <SheetTitle className='my-6 text-2xl'>
                                Student Project Manager
                            </SheetTitle>
                            <SheetDescription>
                                <span className='flex h-96 w-full flex-col justify-between  '>
                                    <span className='flex flex-col items-center gap-3 text-lg hover:cursor-pointer'>
                                        <Link
                                            className='text-start  w-full'
                                            href='/'>
                                            Home
                                        </Link>
                                        <Link
                                            className='text-start  w-full'
                                            href='/login'>
                                            Login
                                        </Link>
                                        <Link
                                            className='text-start  w-full'
                                            href='/register'>
                                            Register
                                        </Link>
                                    </span>
                                    <span>{/* <Footer /> */}</span>
                                </span>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
};

export default Navbar;

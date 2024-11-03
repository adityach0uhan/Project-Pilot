import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';

const Navbar = () => {
    return (
        <div className='w-screen h-16 flex items-center justify-between md:px-8 px-2 py-1 bg-white'>
            <div className='md:block hidden text-2xl hover:cursor-pointer'>
                Student Project Manager
            </div>
            <div className='md:hidden text-2xl hover:cursor-pointer'>S-P-M</div>
            <div className='md:flex hidden  items-center gap-3 text-lg hover:cursor-pointer'>
                <Link href='/'>Home</Link>
                <Link href='/login'>Login</Link>
                <Link href='/register'>Register</Link>
            </div>
            <div className='md:hidden text-right'>
                <Sheet>
                    <SheetTrigger>Open</SheetTrigger>
                    <SheetContent>
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
                                    <span>faslkjlkf</span>
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

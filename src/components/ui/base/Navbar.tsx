'use client';
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Footer from './Footer';
import { persistor, RootState } from '@/lib/store';
import { logout } from '@/lib/features/userDataSlice';
import ProfileButton from './ProfileButton';
const Navbar = () => {
    const user = useSelector((state: RootState) => state.user);

    return (
        <div className='w-screen h-16 flex items-center justify-between md:px-8 px-2 py-1  bg-white overflow-hidden border-b-[1px] border-zinc-200'>
            <div className='md:flex items-center hover:cursor-pointer'>
                <Image
                    className='mt-6'
                    height={90}
                    width={300}
                    quality={100}
                    priority={true}
                    alt='SPM'
                    src={'/logo.png'}
                />
            </div>
            <div className='md:flex hidden  items-center gap-3 text-lg hover:cursor-pointer'>
                <Link href='/'>Home</Link>
                {!user._id && !user.email && (
                    <Link href='/auth/login'>Login</Link>
                )}
                {!user._id && !user.email && (
                    <Link href='/auth/register'>Register</Link>
                )}
                {user._id && user.email && <ProfileButton />}
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
                                        <Link href='/'>Home</Link>
                                        {!user._id && !user.email && (
                                            <Link href='/auth/login'>
                                                Login
                                            </Link>
                                        )}
                                        {!user._id && !user.email && (
                                            <Link href='/auth/register'>
                                                Register
                                            </Link>
                                        )}
                                        {user._id && user.email && (
                                            <ProfileButton />
                                        )}
                                    </span>
                                    <Footer />
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

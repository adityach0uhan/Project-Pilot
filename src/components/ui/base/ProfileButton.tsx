import { logout } from '@/lib/features/userDataSlice';
import { persistor, RootState } from '@/lib/store';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const ProfileButton = () => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const router = useRouter();

    const logoutHandler = async () => {
        try {
            const resp = await axios.get(
                'http://localhost:4000/api/v1/auth/logout',
                { withCredentials: true }
            );
            console.log('Logout response:', resp.data);

            dispatch(logout());

            const responseofPuerge = await persistor.purge();
            console.log('Purge response:', responseofPuerge);
            router.push('/');
        } catch (error) {
            console.log('Logout failed:', error);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className='w-14 h-14 rounded-full overflow-hidden'>
                    <AvatarImage src='https://github.com/shadcn.png' />
                    <AvatarFallback>{user.name}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-64 mx-4'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {user.name && (
                        <DropdownMenuItem>
                            Name
                            <DropdownMenuShortcut>
                                {user.name}
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                    {user.email && (
                        <DropdownMenuItem>
                            Email
                            <DropdownMenuShortcut>
                                {user.email}
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                    {user.role && (
                        <DropdownMenuItem>
                            Role
                            <DropdownMenuShortcut>
                                {user.role}
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                    {user.collegeId && (
                        <DropdownMenuItem>
                            College ID
                            <DropdownMenuShortcut>
                                {user.collegeId}
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                    {user.collegeName && (
                        <DropdownMenuItem>
                            College Name
                            <DropdownMenuShortcut>
                                {user.collegeName}
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                    {user.gender && (
                        <DropdownMenuItem>
                            Gender
                            <DropdownMenuShortcut>
                                {user.gender}
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                    {user.classRollNumber && (
                        <DropdownMenuItem>
                            Roll Number
                            <DropdownMenuShortcut>
                                {user.classRollNumber}
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                    {user.teacherId && (
                        <DropdownMenuItem>
                            Teacher ID
                            <DropdownMenuShortcut>
                                {user.teacherId}
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                    {user.semester && (
                        <DropdownMenuItem>
                            Semester
                            <DropdownMenuShortcut>
                                {user.semester}
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                    {user.section && (
                        <DropdownMenuItem>
                            Section
                            <DropdownMenuShortcut>
                                {user.section}
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                    {user.department && (
                        <DropdownMenuItem>
                            Department
                            <DropdownMenuShortcut>
                                {user.department}
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logoutHandler}>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileButton;

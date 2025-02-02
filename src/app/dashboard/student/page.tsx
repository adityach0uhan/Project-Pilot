'use client';
import { RootState } from '@/lib/store';
import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import TeamInfo from '@/components/student-dashboard/TeamInfo';
import ProjectContainer from '@/components/student-dashboard/ProjectContainer';
import Notification from '@/components/student-dashboard/Notification';
const page = () => {
    const user = useSelector((state: RootState) => state.user);

    return (
        <div className='w-dvw h-full flex flex-col gap-4 p-4 '>
            <div className='h-16 px-6 flex items-center justify-between rounded-md bg-white shadow-lg w-full'>
                <div className='text-sm uppercase px-3'>{user.name}</div>
                <div className='text-sm uppercase px-3'>{user.branch}</div>
                <div className='text-sm uppercase px-3'>{user.section}</div>
                <div className='text-sm  px-3'>{user.semester} ' Sem</div>
                <div className='text-sm  px-3'>{user.email}</div>
                <div className='flex items-center gap-4'>
                    <Button className='border-green-600' variant={'outline'}>
                        Change Password
                    </Button>
                    <Button className='border-yellow-600' variant={'outline'}>
                        Update Information
                    </Button>
                    <Button className='border-red-600' variant={'outline'}>
                        Delete Account
                    </Button>
                </div>
            </div>
            <div className='w-full flex gap-4'>
                <TeamInfo />
                <ProjectContainer />
                <Notification />
            </div>
        </div>
    );
};

export default page;

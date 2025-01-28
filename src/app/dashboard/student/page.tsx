'use client';
import { RootState } from '@/lib/store';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import TeamInfo from '@/components/student-dashboard/TeamInfo';
const page = () => {
    const user = useSelector((state: RootState) => state.user);

    return (
        <div className='w-dvw  flex gap-2 p-4 bg-white'>
            <TeamInfo />
        </div>
    );
};

export default page;

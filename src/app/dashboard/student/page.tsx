'use client';
import { RootState } from '@/lib/store';
import React from 'react';
import { useSelector } from 'react-redux';
const page = () => {
    const user = useSelector((state: RootState) => state.user);

    return <div>{user.name}</div>;
};

export default page;

'use client';
import { useState } from 'react';
import AllCollegeList from '@/components/super-admin/AllCollegeList';
import React from 'react';

const page = () => {
    return (
        <div className='flex flex-col w-dvw'>
            <AllCollegeList />
        </div>
    );
};

export default page;

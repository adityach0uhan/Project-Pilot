'use client';
import NoticeTab from '@/components/teacher-dashboard/NoticeTab';
import ProjectAndGroup from '@/components/teacher-dashboard/ProjectAndGroup';
import StudentManagement from '@/components/teacher-dashboard/StudentManagementTab';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
const Page = () => {
    const [activeTab, setActiveTab]: any = useState('Student');

    return (
        <div className='w-dvw flex flex-col p-4 items-center justify-evenly'>
            <div className='w-full flex gap-3 p-1'>
                {['Student', 'Project & Group', 'Notice'].map((tab) => (
                    <Button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        variant={'ghost'}
                        className={`w-60 h-14 p-2 rounded-md shadow-md flex items-center hover:bg-blue-500 justify-center transition-all duration-200 ${
                            activeTab === tab ? 'bg-blue-400 text-black' : ''
                        }`}>
                        {tab.charAt(0).toUpperCase() + tab.slice(1)} Management
                    </Button>
                ))}
            </div>
            <div>
                <span className='bg-blue-500'>
                    {activeTab === 'Student' && <StudentManagement />}
                    {activeTab === 'Project & Group' && <ProjectAndGroup />}
                    {activeTab === 'Notice' && <NoticeTab />}
                </span>
            </div>
        </div>
    );
};

export default Page;

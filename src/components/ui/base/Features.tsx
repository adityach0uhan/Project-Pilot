import React from 'react';
import Image from 'next/image';
// import { RiArchiveLine } from 'react-icons/ri';

const Features = () => {
    const Features = [
        {
            icon: '/Features/col.svg',
            title: 'MultiCollege ',
            description: 'Multiple Colleges Can be Registered.'
        },
        {
            icon: '/Features/manage.svg',
            title: 'Project Creation & Management',
            description:
                'Students can create projects, assign tasks, and track progress.'
        },
        {
            icon: '/Features/team.svg',
            title: 'Team Creation and Invitations',
            description:
                'Students can create teams and invite other students to join.'
        },
        {
            icon: '/Features/fil.svg',
            title: 'File Upload & Management',
            description:
                'Students can upload files and share them with team members and teachers for evaluation.'
        },

        {
            icon: '/Features/com.svg',
            title: 'Teacher Dashboard',
            description:
                'Teachers can view all student projects, tasks, and progress and create notice.'
        },
        {
            icon: '/Features/com.svg',
            title: 'Student Dashboard',
            description:
                'Students can view their projects, tasks, and notices from teachers.'
        }
    ];
    return (
        <div>
            <div className=' w-full flex-wrap p-3 items-center justify-center flex gap-6 flex-col md:flex-row min-h-56 bg-white'>
                {Features.map((feature, index) => (
                    <div
                        key={index}
                        className='md:w-80 w-full rounded-md h-36 flex flex-col   p-3 bg-slate-100 '>
                        <h1 className='my-2 flex items-center gap-4 '>
                            <Image
                                src={feature.icon}
                                alt='feature icon'
                                width={20}
                                height={20}
                            />
                            {feature.title}
                        </h1>
                        <hr className='border-black mb-5' />
                        <p className='text-sm'>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;

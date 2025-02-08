import React from 'react';
import { Button } from '../ui/button';
import { EyeOpenIcon, Pencil2Icon, TrashIcon } from '@radix-ui/react-icons';
import { Separator } from '../ui/separator';
const TeamManagementTab = () => {
    const dummyData = [
        {
            name: '3 Team',
            GroupNum: '3',
            members: ['Chaman Chutiya', 'Lodu Lalit ', 'Gandwa no1'],
            ProjectName: 'Chodu Detector'
        },
        {
            name: '2Team',
            GroupNum: '3',
            members: ['Chaman Chutiya', 'Lodu Lalit ', 'Gandwa no1'],
            ProjectName: 'Chodu Detector'
        },
        {
            name: ' Team1 ',
            GroupNum: '3',
            members: ['Chaman Chutiya', 'Lodu Lalit ', 'Gandwa no1'],
            ProjectName: 'Chodu Detector'
        },
        {
            name: '4 Team Team',
            GroupNum: '3',
            members: ['Chaman Chutiya', 'Lodu Lalit ', 'Gandwa no1'],
            ProjectName: 'Chodu Detector'
        }
    ];

    return (
        <div className='w-dvw h-full p-4 flex flex-wrap items-start justify-center gap-6'>
            {dummyData.map((item, indx) => {
                return (
                    <div
                        key={indx}
                        className='w-96 h-72 bg-white shadow-md flex flex-col p-2 rounded-md items-start gap-2 justify-evenly'>
                        <div className='flex w-full items-center justify-between px-3'>
                            <span>Team Name</span> {item.name}
                        </div>
                        <Separator />
                        <div className='flex w-full flex-wrap items-center justify-between px-3'>
                            <span>Project Name</span>
                            {item.ProjectName}
                        </div>
                        <Separator />
                        <div className='flex w-full items-center justify-between px-3'>
                            <span>Group no</span> {item.GroupNum}
                        </div>{' '}
                        <Separator />
                        <div className='w-full flex flex-wrap gap-2 p-2 shadow-md rounded-md'>
                            Members :
                            <div className='w-max p-1 rounded-md bg-slate-200'>
                                {item.members[0]} (32)
                            </div>
                            <div className='w-max p-1 rounded-md bg-slate-200'>
                                {item.members[1]}(31)
                            </div>
                            <div className='w-max p-1 rounded-md bg-slate-200'>
                                {item.members[2]}(33)
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-between gap-3'>
                            <Button className='bg-red-500 w-full'>
                                <TrashIcon />
                            </Button>
                            <Button className='bg-yellow-400 w-full'>
                                <Pencil2Icon />
                            </Button>
                            <Button className='bg-blue-400 w-full'>
                                <EyeOpenIcon />
                            </Button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TeamManagementTab;

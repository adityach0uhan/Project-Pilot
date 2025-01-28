'use client';
import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import JoinAndCreateTeam from './JoinAndCreateTeam';

interface Member {
    _id: string;
    name: string;
    email: string;
}

interface GroupData {
    _id: string;
    name: string;
    groupNumber: number;
    members: Member[];
    project?: string | null;
    createdBy: { _id: string; name: string };
    inviteCode: string;
    semester: number;
    groupleader: { _id: string; name: string };
    createdAt: string;
    updatedAt: string;
}

const TeamInfo: React.FC = () => {
    const user = useSelector((state: RootState) => state.user);
    const [teamExists, setTeamExists] = useState<boolean>(false);
    const [groupData, setGroupData] = useState<GroupData | null>(null);

    useEffect(() => {
        console.log('TOOl KIT Data', user._id);
        async function getTeamInfo() {
            try {
                const resp = await axios.post(
                    'http://localhost:4000/group/groupInfo',
                    {
                        userId: user._id
                    }
                );
                if (resp.data.success) {
                    setGroupData(resp.data.groupData);
                    // setTeamExists(true);
                } else {
                    setTeamExists(false);
                }
            } catch (error: any) {
                setTeamExists(false);
            }
        }

        getTeamInfo();
    }, []);

    return (
        <>
            {teamExists && groupData ? (
                <div className='min-w-96 max-h-72 flex flex-col justify-evenly shadow-lg border-zinc-200 border-[1px] rounded-xl m-2 p-3'>
                    <h1 className='text-xl p-2 font-bold'>Team Information</h1>
                    <div className='text-base flex items-center justify-between p-2'>
                        <p>{groupData.name}</p>
                        <p>
                            Team Code: <span>{groupData.inviteCode}</span>
                        </p>
                    </div>
                    <div className='text-sm flex flex-col gap-2 mb-2 p-2'>
                        {groupData.members.map((member) => (
                            <div
                                key={member._id}
                                className='flex items-center justify-between gap-2 p-1'>
                                <Avatar>
                                    <AvatarImage
                                        src={`https://api.dicebear.com/6.x/initials/svg?seed=${member.name}`}
                                        alt={`@${member.name}`}
                                    />
                                    <AvatarFallback>
                                        {member.name[0]}
                                    </AvatarFallback>
                                </Avatar>
                                <div className='flex flex-col gap-1'>
                                    <p>{member.name}</p>
                                    <p className='text-xs'>{member.email}</p>
                                </div>
                                <Button className='w-20 h-8'>Action</Button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <JoinAndCreateTeam />
            )}
        </>
    );
};

export default TeamInfo;

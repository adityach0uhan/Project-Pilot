import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { Input } from '../ui/input';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import { useState } from 'react';
import CreateTeamDialog from './CreateTeamDialog';
type Props = {};

const JoinAndCreateTeam = (props: Props) => {
    const user = useSelector((state: RootState) => state.user);

    return (
        <div>
            <div className='w-96 h-72 flex flex-col justify-evenly shadow-lg border-zinc-200 border-[1px] rounded-xl m-2 p-3'>
                <div className='flex flex-col gap-2'>
                    Create a Group
                    <CreateTeamDialog />
                </div>
                <div className='flex flex-col gap-2'>
                    Join a Group
                    <Input placeholder='Enter Group Code' />
                    <Button className='w-36' variant={'default'}>
                        Join
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default JoinAndCreateTeam;

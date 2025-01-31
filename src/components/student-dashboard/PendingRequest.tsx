'use client';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { CheckIcon, Cross1Icon, ReloadIcon } from '@radix-ui/react-icons';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { get } from 'http';
import { set } from 'zod';
interface PendingRequestProps {
    groupData: any;
    getTeamInfo: any;
}

const PendingRequest: React.FC<PendingRequestProps> = ({
    groupData,
    getTeamInfo
}) => {
    const user = useSelector((state: RootState) => state.user);
    const [loading, setLoading] = useState(false);
    const [responseFromServer, setResponseFromServer] = useState<any>(null);
    const RequestFunction = async (action: string, userId: string) => {
        try {
            setLoading(true);
            const resp = await axios.post(
                'http://localhost:4000/group/managejoinrequests',
                {
                    userId: userId,
                    action: action,
                    currentUserId: user._id,
                    groupID: groupData._id
                }
            );
            setResponseFromServer(resp.data);
        } catch (error) {
            console.log('Error', error);
        } finally {
            getTeamInfo();
            setLoading(false);
            console.log('Finally');
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline'>
                    <span> Pending Requests</span>{' '}
                    <span className=' text-red-500'>
                        ( {groupData.pendingRequests.length} )
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Pending Requests</DialogTitle>
                </DialogHeader>
                {groupData.pendingRequests.map((item: any, index: any) => (
                    <div
                        key={index}
                        className='flex items-center justify-between gap-2 p-1'>
                        <Avatar>
                            <AvatarImage
                                src={`https://api.dicebear.com/6.x/initials/svg?seed=${item.name}`}
                                alt={`@${item.name}`}
                            />
                            <AvatarFallback>{item.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col gap-1'>
                            <p>{item.name}</p>
                            <p className='text-xs'>{item.email}</p>
                        </div>
                        <div className='flex gap-2'>
                            {loading ? (
                                <Button>
                                    <ReloadIcon className='animate-spin' />
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        onClick={() =>
                                            RequestFunction('accept', item._id)
                                        }
                                        className='max-w-20 h-8'>
                                        <CheckIcon />
                                    </Button>
                                    <Button
                                        className='max-w-20 h-8'
                                        onClick={() =>
                                            RequestFunction('reject', item._id)
                                        }>
                                        <Cross1Icon />
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
                {responseFromServer && <div>{responseFromServer.message}</div>}
            </DialogContent>
        </Dialog>
    );
};

export default PendingRequest;

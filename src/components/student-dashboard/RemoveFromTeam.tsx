'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import axios from 'axios';
import { toast } from 'sonner';
import { useState } from 'react';

const RemoveFromTeam = ({ id, name, groupId, collegeId, getTeamInfo }: any) => {
    const [loading, setLoading] = useState(false);
    const kickMember = async () => {
        setLoading(true);
        try {
            const resp = await axios.put(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${collegeId}/group/${groupId}/kick/${id}`,
                {}
            );
            console.log(resp.data);
            if (resp.data.success) {
                toast.message('Member removed from the team');
            } else {
                toast.error(resp.data.message);
            }
        } catch (error) {
            console.log(error);
        } finally {
            getTeamInfo();
            setLoading(false);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline'>Kick</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Delete </DialogTitle>
                    <DialogDescription>
                        Are you sure you want to remove{' '}
                        <span className='text-red-500'>{name} </span>from the
                        team?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        type='submit'
                        onClick={kickMember}
                        disabled={loading}>
                        {loading ? 'Loading...' : 'Remove'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default RemoveFromTeam;

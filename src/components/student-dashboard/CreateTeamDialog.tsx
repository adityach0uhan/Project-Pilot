'use client';

import { useState } from 'react';
import axios from 'axios';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

export default function CreateTeamDialog() {
    const user = useSelector((state: RootState) => state.user);

    const [formData, setFormData] = useState({
        groupName: '',
        groupNumber: '',
        semester: ''
    });

    const [loading, setLoading] = useState(false);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        const { groupName, groupNumber, semester } = formData;
        if (!groupName || !groupNumber || !semester) {
            // toast.error('All fields are required!');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(
                'http://localhost:4000/group/create',
                {
                    name: groupName,
                    groupNumber: Number(groupNumber),
                    members: [user._id],
                    groupleader: user._id,
                    semester: Number(semester),
                    createdBy: user._id
                }
            );

            console.log('Group created:', response.data);

            // toast('Event has been created', {
            //     type: 'success'
            // });
        } catch (error) {
            console.error('Error creating group:', error);
            toast.error('Failed to create group');
        } finally {
            setLoading(false); // End loading state
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline'>Add Group</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Add Group</DialogTitle>
                    <DialogDescription>
                        Please fill all the fields to create a group.
                    </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='groupName' className='text-right'>
                            Group Name
                        </Label>
                        <Input
                            id='groupName'
                            name='groupName'
                            value={formData.groupName}
                            onChange={handleInputChange}
                            placeholder='Enter group name'
                            className='col-span-3'
                        />
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='groupNumber' className='text-right'>
                            Group Number
                        </Label>
                        <Input
                            id='groupNumber'
                            name='groupNumber'
                            value={formData.groupNumber}
                            onChange={handleInputChange}
                            placeholder='Enter group number'
                            type='number'
                            className='col-span-3'
                        />
                    </div>

                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='semester' className='text-right'>
                            Semester
                        </Label>
                        <Input
                            id='semester'
                            name='semester'
                            value={formData.semester}
                            onChange={handleInputChange}
                            placeholder='Enter semester'
                            type='number'
                            className='col-span-3'
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        onClick={handleSubmit}
                        variant='default'
                        disabled={loading}>
                        {loading ? 'Saving...' : 'Create Group'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

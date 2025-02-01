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

export default function CreateTeamDialog({
    getTeamInfo
}: {
    getTeamInfo: any;
}) {
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
            alert('All fields are required!');
            return;
        }
        //  name, groupNumber, members, createdBy, groupleader, semester, collegeId;
        setLoading(true);
        try {
            const response = await axios.post(
                `http://localhost:4000/api/v1/${user.collegeId}/group/create`,
                {
                    name: groupName,
                    groupNumber: groupNumber,
                    members: [user._id],
                    groupleader: user._id,
                    createdBy: user._id,
                    semester: semester,
                    collegeId: user.collegeId
                }
            );
            toast.success(response.data.message);
        } catch (error) {
            console.log('Error creating group:', error);
        } finally {
            setLoading(false);
            getTeamInfo();
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
                            type='text'
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
                            type='text'
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

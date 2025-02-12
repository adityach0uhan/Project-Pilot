'use client';
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
import { PlusCircledIcon } from '@radix-ui/react-icons';
import axios from 'axios';
import { useState } from 'react';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';
export default function CreateProjectDialog({ setRefresh, refresh }: any) {
    const user = useSelector((state: RootState) => state.user);
    const [loading, setLoading] = useState(false);
    const [projectData, setProjectData] = useState({
        collegeId: user.collegeId,
        projectName: '',
        description: '',
        createdBy: user._id,
        groupNumber: user.groupNumber,
        status: 'Started',
        branch: user.branch,
        semester: user.semester
    });
    const handleCreateProject = async () => {
        try {
            if (!projectData.projectName || !projectData.description) {
                alert('Please fill all the fields');
                return;
            }
            setLoading(true);
            console.log('Sending this data to the server', projectData);
            const resp = await axios.post(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/projects/create`,
                projectData
            );
            if (resp.data.success) {
                alert('Project Created Successfully');
                setRefresh(!refresh);
            } else {
                alert('Some Error Occured');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setProjectData({
                collegeId: user.collegeId,
                projectName: '',
                description: '',
                createdBy: user._id,
                groupNumber: user.groupNumber,
                status: 'Started',
                branch: user.branch,
                semester: user.semester
            });
            setLoading(false);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline'>
                    Create New Project <PlusCircledIcon />
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Project Details</DialogTitle>
                    <DialogDescription>
                        Make Sure to Put Correct GroupID else it will not be
                        reflected in your group , {user.groupNumber}
                    </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='projectName' className='text-right'>
                            Name
                        </Label>
                        <Input
                            id='projectName'
                            value={projectData.projectName}
                            className='col-span-3'
                            onChange={(e) =>
                                setProjectData({
                                    ...projectData,
                                    projectName: e.target.value
                                })
                            }
                        />
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='description' className='text-right'>
                            Description
                        </Label>
                        <Input
                            id='description'
                            value={projectData.description}
                            className='col-span-3'
                            onChange={(e) =>
                                setProjectData({
                                    ...projectData,
                                    description: e.target.value
                                })
                            }
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        type='submit'
                        onClick={handleCreateProject}
                        disabled={loading}>
                        Create Now
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

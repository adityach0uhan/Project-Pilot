import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const UpdateProject = ({ projectDetails, setRefresh }: any) => {
    const [formData, setFormData] = useState({
        projectName: projectDetails.projectName || '',
        description: projectDetails.description || '',
        status: projectDetails.status || '',
        branch: projectDetails.branch || '',
        semester: projectDetails.semester || ''
    });

    const handleSubmit = async () => {
        try {
            await axios.put(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/projects/${projectDetails._id}`,
                formData
            );
            setRefresh((prev: boolean) => !prev);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Dialog>
            <DialogTrigger>
                <span className='text-center w-full'> Edit</span>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update Project</DialogTitle>
                    <DialogDescription className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <Label>Project Name</Label>
                            <Input
                                type='text'
                                value={formData.projectName}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        projectName: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label>Description</Label>
                            <Input
                                type='text'
                                value={formData.description}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        description: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label>Status</Label>
                            <select
                                className='p-2 border rounded-md'
                                value={formData.status}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        status: e.target.value
                                    })
                                }>
                                <option value=''>Select Status</option>
                                <option value='10%'>10%</option>
                                <option value='25%'>25%</option>
                                <option value='50%'>50%</option>
                                <option value='80%'>80%</option>
                                <option value='100%'>100%</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label>Branch</Label>
                            <Input
                                type='text'
                                value={formData.branch}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        branch: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label>Semester</Label>
                            <Input
                                type='text'
                                value={formData.semester}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        semester: e.target.value
                                    })
                                }
                            />
                        </div>
                        <Button
                            className='bg-blue-500 w-32 text-white p-2 rounded-md'
                            onClick={handleSubmit}>
                            Update
                        </Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateProject;

'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '../ui/input';
import axios from 'axios';
import { Button } from '../ui/button';
import { useState } from 'react';
import { Label } from '../ui/label';

const UpdateTeacher = ({ teacherData, setRefresh }: any) => {
    const [data, setData] = useState({
        name: teacherData.name,
        email: teacherData.email,
        gender: teacherData.gender,
        branch: teacherData.branch,
        semester: teacherData.semester,
        teacherId: teacherData.teacherId
    });

    const updateTeacher = async () => {
        try {
            const resp = await axios.put(
                `http://localhost:4000/api/v1/teacher/${teacherData._id}`,
                data
            );
            console.log(resp.data);
        } catch (error) {
            console.error('Error updating teacher:', error);
        } finally {
            setRefresh((prev: any) => !prev);
        }
    };

    return (
        <Dialog>
            <DialogTrigger>
                <span>Edit</span>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Teacher Information</DialogTitle>
                    <DialogDescription>
                        <span className='flex flex-col gap-4 p-3'>
                            <Label>Name</Label>
                            <Input
                                value={data.name}
                                placeholder='Name'
                                onChange={(e) =>
                                    setData({ ...data, name: e.target.value })
                                }
                            />
                            <Label>Email</Label>
                            <Input
                                value={data.email}
                                placeholder='Email'
                                onChange={(e) =>
                                    setData({ ...data, email: e.target.value })
                                }
                            />
                            <Label>Gender</Label>
                            <Input
                                value={data.gender}
                                placeholder='Gender'
                                onChange={(e) =>
                                    setData({ ...data, gender: e.target.value })
                                }
                            />
                            <Label>Branch</Label>
                            <Input
                                value={data.branch}
                                placeholder='Branch'
                                onChange={(e) =>
                                    setData({ ...data, branch: e.target.value })
                                }
                            />
                            <Label>Semester</Label>
                            <Input
                                value={data.semester}
                                placeholder='Semester'
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        semester: e.target.value
                                    })
                                }
                            />
                            <Label>Teacher ID</Label>
                            <Input
                                value={data.teacherId}
                                placeholder='Teacher ID'
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        teacherId: e.target.value
                                    })
                                }
                            />
                        </span>
                    </DialogDescription>
                </DialogHeader>
                <Button onClick={updateTeacher}>Update</Button>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateTeacher;

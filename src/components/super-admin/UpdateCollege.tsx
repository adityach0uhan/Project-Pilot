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

const UpdateCollege = ({ collegeData, setRefresh }: any) => {
    const [data, setData] = useState({
        collegeName: collegeData.collegeName,
        collegeLocation: collegeData.collegeLocation,
        email: collegeData.email,
        passkey: collegeData.passkey
    });
    const updateCollege = async () => {
        try {
            const resp = await axios.put(
                `http://localhost:4000/api/v1/superadmin/updateCollege/${collegeData._id}`,
                {
                    collegeName: data.collegeName,
                    collegeLocation: data.collegeLocation,
                    email: data.email,
                    passkey: data.passkey
                }
            );
            console.log(resp.data);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('Updated');
            setRefresh((prev: any) => !prev);
        }
    };
    return (
        <Dialog>
            <DialogTrigger>Edit</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Information</DialogTitle>
                    <DialogDescription>
                        <span className='flex flex-col gap-2 p-3'>
                            <Label className='mt-2 '>College Name</Label>
                            <Input
                                value={data.collegeName}
                                placeholder='College Name'
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        collegeName: e.target.value
                                    });
                                }}
                            />
                        </span>
                        <span className='flex flex-col gap-2 p-3'>
                            <Label>College Address</Label>
                            <Input
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        collegeLocation: e.target.value
                                    });
                                }}
                                value={data.collegeLocation}
                                placeholder='College Location'
                            />
                        </span>
                        <span className='flex flex-col gap-2 p-3'>
                            <Label>Email</Label>
                            <Input
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        email: e.target.value
                                    });
                                }}
                                value={data.email}
                                placeholder='Email'
                            />
                        </span>
                        <span className='flex flex-col gap-2 p-3'>
                            <Label>Passkey</Label>
                            <Input
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        passkey: e.target.value
                                    });
                                }}
                                value={data.passkey}
                                placeholder='Passkey'
                            />
                        </span>
                    </DialogDescription>
                </DialogHeader>
                <Button onClick={updateCollege}>Update</Button>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateCollege;

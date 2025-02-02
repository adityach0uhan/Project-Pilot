'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover';
import { PlusIcon } from '@radix-ui/react-icons';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'sonner';

export function AddNewCollege({ refresh, setRefresh }: any) {
    const [data, setData] = useState({
        collegeName: '',
        collegeLocation: '',
        email: '',
        password: '',
        passkey: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handelSubmit = async () => {
        if (
            !data.collegeName ||
            !data.collegeLocation ||
            !data.email ||
            !data.password ||
            !data.passkey
        ) {
            setError('Please fill all the fields');
            setTimeout(() => {
                setError('');
            }, 2000);
            return;
        }
        try {
            setLoading(true);
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/college/register`,
                data
            );
            if (response.data.success) {
                setRefresh(!refresh);
                toast.success('College added successfully');
            } else {
                setError('Something went wrong');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setData({
                collegeName: '',
                collegeLocation: '',
                email: '',
                password: '',
                passkey: ''
            });
            setLoading(false);
        }
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className='border-green-500 ' variant='outline'>
                    Add New College
                    <PlusIcon className='w-4 h-4 ml-2 text-green-700' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-96'>
                <div className='grid gap-4'>
                    <div className='space-y-2'>
                        <h4 className='font-medium leading-none'>
                            Add New College
                        </h4>
                        <p className='text-sm text-muted-foreground'>
                            Make sure to fill all the fields
                        </p>
                    </div>
                    <div className='grid gap-6'>
                        <div className='grid grid-cols-3 items-center gap-4'>
                            <Label htmlFor='width'>College Name</Label>
                            <Input
                                value={data.collegeName}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        collegeName: e.target.value
                                    });
                                }}
                                className='col-span-2 h-8'
                            />
                        </div>
                        <div className='grid grid-cols-3 items-center gap-4'>
                            <Label htmlFor='maxWidth'> Address</Label>
                            <Input
                                value={data.collegeLocation}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        collegeLocation: e.target.value
                                    });
                                }}
                                className='col-span-2 h-8'
                            />
                        </div>
                        <div className='grid grid-cols-3 items-center gap-4'>
                            <Label htmlFor='height'>Email</Label>
                            <Input
                                value={data.email}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        email: e.target.value
                                    });
                                }}
                                className='col-span-2 h-8'
                            />
                        </div>
                        <div className='grid grid-cols-3 items-center gap-4'>
                            <Label htmlFor='maxHeight'>Password</Label>
                            <Input
                                value={data.password}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        password: e.target.value
                                    });
                                }}
                                className='col-span-2 h-8'
                            />
                        </div>
                        <div className='grid grid-cols-3 items-center gap-4'>
                            <Label htmlFor='maxHeight'>Passkey</Label>
                            <Input
                                value={data.passkey}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        passkey: e.target.value
                                    });
                                }}
                                className='col-span-2 h-8'
                            />
                        </div>
                        {error && (
                            <div className='w-full text-center text-xs text-red-500'>
                                *** {error} ***
                            </div>
                        )}
                        <Button disabled={loading} onClick={handelSubmit}>
                            {loading ? 'Loading...' : 'Add College'}
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}

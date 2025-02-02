'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

type Props = {};

const page = (props: Props) => {
    const { _id } = useParams();
    const [student, setStudent]: any = useState({});
    const [loading, setLoading] = useState(true);

    const fetchStudentById = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/college/student/${_id}`
            );
            setStudent(response.data.student);
            console.log(response.data.student);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            fetchStudentById();
        }, 1000);
    }, []);

    if (loading) {
        return (
            <Card className='w-full min-w-[600px] shadow-lg rounded-2xl p-4 bg-white'>
                <CardHeader className='flex items-center space-x-4'>
                    <Skeleton className='w-16 h-16 rounded-full' />
                    <div>
                        <Skeleton className='h-6 w-32 mb-2' />
                        <Skeleton className='h-4 w-48' />
                    </div>
                </CardHeader>
                <CardContent className='mt-2 space-y-2 text-sm'>
                    {Array(6)
                        .fill(0)
                        .map((_, index) => (
                            <div
                                key={index}
                                className='flex px-4 py-1 items-center gap-2 justify-between text uppercase'>
                                <Skeleton className='h-4 w-24' />
                                <Skeleton className='h-4 w-32' />
                            </div>
                        ))}
                    <Separator />
                </CardContent>
                <div className='flex gap-2 items-center justify-center'>
                    <Skeleton className='h-10 w-1/2 rounded-md' />
                    <Skeleton className='h-10 w-1/2 rounded-md' />
                </div>
            </Card>
        );
    }

    return (
        <Card className='w-full min-w-[600px] shadow-lg rounded-2xl p-4 bg-white'>
            <CardHeader className='flex items-center space-x-4'>
                <Avatar className='w-16 h-16'>
                    <AvatarImage
                        src={
                            student.profilePic
                                ? `/path-to-avatar/${student.profilePic}.png`
                                : '/default-avatar.png'
                        }
                        alt={student.name}
                    />
                    <AvatarFallback>
                        {student.name.toUpperCase().charAt(0)}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle className='text-lg font-semibold'>
                        {student.name}
                        <p className='text-sm text-gray-500'>{student.email}</p>
                    </CardTitle>
                </div>
            </CardHeader>

            <CardContent className='mt-2 space-y-2 text-sm'>
                <div className='flex px-4 py-1 items-center gap-2 justify-between text uppercase'>
                    <Label>Branch</Label>
                    <p>{student.branch}</p>
                </div>
                <Separator />
                <div className='flex px-4 py-1 items-center gap-2 justify-between text uppercase'>
                    <Label>Class Roll Number</Label>
                    <p>{student.classRollNumber}</p>
                </div>
                <Separator />
                <div className='flex px-4 py-1 items-center gap-2 justify-between text uppercase'>
                    <Label>University Roll Number</Label>
                    <p>{student.universityRollNumber}</p>
                </div>
                <Separator />
                <div className='flex px-4 py-1 items-center gap-2 justify-between text uppercase'>
                    <Label>Semester</Label>
                    <p>{student.semester}</p>
                </div>
                <Separator />
                <div className='flex px-4 py-1 items-center gap-2 justify-between text uppercase'>
                    <Label>Gender</Label>
                    <p>{student.gender}</p>
                </div>
                <Separator />
                <div className='flex px-4 py-1 items-center gap-2 justify-between text uppercase'>
                    <Label>Section</Label>
                    <p>{student.section}</p>
                </div>
            </CardContent>
            <div className='flex gap-2 items-center justify-center'>
                <Button className='w-1/2 bg-green-600'>Edit</Button>
                <Button className='w-1/2 bg-red-500'>Delete</Button>
            </div>
        </Card>
    );
};

export default page;

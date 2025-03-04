'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import DeleteTeacher from '@/components/college-dashboard/DeleteTeacher';
import UpdateTeacher from '@/components/college-dashboard/UpdateTeacher';

const page = () => {
    const { _id } = useParams();
    const [teacher, setTeacher]: any = useState({});
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);

    const fetchTeacherById = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `http://localhost:4000/api/v1/college/teacher/${_id}`
            );
            setTeacher(response.data.teacher);
            console.log(response.data.teacher);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            fetchTeacherById();
        }, 1000);
    }, [refresh]);
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
                            teacher.profilePic
                                ? `/path-to-avatar/${teacher.profilePic}.png`
                                : '/default-avatar.png'
                        }
                        alt={teacher.name}
                    />
                    <AvatarFallback>
                        {teacher.name.toUpperCase().charAt(0)}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle className='text-lg font-semibold'>
                        {teacher.name}
                        <p className='text-sm text-gray-500'>{teacher.email}</p>
                    </CardTitle>
                </div>
            </CardHeader>

            <CardContent className='mt-2 space-y-2 text-sm'>
                <div className='flex px-4 py-1 items-center gap-2 justify-between text uppercase'>
                    <Label>Branch</Label>
                    <p>{teacher.branch}</p>
                </div>
                <Separator />
                <div className='flex px-4 py-1 items-center gap-2 justify-between text uppercase'>
                    <Label>Designation</Label>
                    <p>{teacher.designation}</p>
                </div>
                <Separator />
                <div className='flex px-4 py-1 items-center gap-2 justify-between text uppercase'>
                    <Label>Gender</Label>
                    <p>{teacher.gender}</p>
                </div>
                <Separator />
                <div className='flex px-4 py-1 items-center gap-2 justify-between text uppercase'>
                    <Label>ID</Label>
                    <p>{teacher.teacherId}</p>
                </div>
                <Separator />
                <div className='flex px-4 py-1 items-center gap-2 justify-between text uppercase'>
                    <Label>CollegeName</Label>
                    <p>{teacher.collegeName}</p>
                </div>
                <Separator />
                <div className='flex px-4 py-1 items-center gap-2 justify-between text uppercase'>
                    <Label>Is Hod</Label>
                    <p>{teacher.isHOD}</p>
                </div>
            </CardContent>
            <div className='flex gap-2 items-center justify-center'>
                <span className='w-1/2 bg-green-600'>
                    <UpdateTeacher
                        teacherData={teacher}
                        setRefresh={setRefresh}
                    />
                </span>
                <span className='w-1/2 bg-red-500'>
                    <DeleteTeacher teacherId={teacher._id} />
                </span>
            </div>
        </Card>
    );
};

export default page;

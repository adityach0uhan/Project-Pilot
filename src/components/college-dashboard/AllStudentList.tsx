'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

type Props = {};

const AllStudentList = (props: Props) => {
    const user = useSelector((state: RootState) => state.user);
    const [students, setStudents] = useState([]);
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const getAllStudents = async () => {
        try {
            console.log(user.collegeId);
            setLoading(true);
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/college/allstudents/${user.collegeId}`
            );
            setStudents(response.data.students);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handelClick = (_id: any) => {
        router.push(`/dashboard/college/${_id}/stu`);
    };
    useEffect(() => {
        getAllStudents();
    }, []);
    return (
        <>
            {loading ? (
                'Loading'
            ) : (
                <div className='flex flex-col gap-4 min-w-96 '>
                    <h1>All Students</h1>
                    <div className='text-sm flex flex-col gap-2 mb-2 p-2 border border-black h-full rounded-lg '>
                        {students.map((student: any) => (
                            <div
                                key={student._id}
                                className='flex items-center justify-between bg-gray-100  gap-2 p-2 rounded-lg'>
                                <div className='flex items-center gap-2'>
                                    <Avatar>
                                        <AvatarImage
                                            className='w-10 h-10 rounded-full'
                                            src={`https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1738416442~exp=1738420042~hmac=12502f8aba3722fedfc319163c14089bb006fddabc3f9d306a6155b7faed1325&w=740`}
                                            alt={`AM`}
                                        />
                                        <AvatarFallback>PIC</AvatarFallback>
                                    </Avatar>
                                    <div className='flex flex-col gap-1'>
                                        <p>{student.name}</p>
                                        <p className='text-xs'>
                                            {student.email}
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    onClick={() => handelClick(student._id)}>
                                    Details
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default AllStudentList;

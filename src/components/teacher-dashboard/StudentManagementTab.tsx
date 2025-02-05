'use client';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { userSlice } from '@/lib/features/userDataSlice';
import { RootState } from '@/lib/store';
import { toast } from 'sonner';
import DetailsDialog from './DetailsDialog';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';

const StudentManagement = () => {
    const user = useSelector((state: RootState) => state.user);
    const [studentList, setStudentList] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/teacher/student/${user.collegeId}/${user.semester}/${user.branch}`
            );

            if (response.data.success) {
                toast.success(response.data.message);
                setStudentList(response.data.students);
            }

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='w-dvw flex items-center justify-between '>
            <div
                className='max-w-80 flex min-w-72 flex-col items-center justify-between gap-4 h-full bg-white rounded-md
            shadow-md p-2 m-4'>
                <div className='flex p-2 w-1/2 items-center justify-center flex-col bg-green-400 rounded-lg '>
                    <h1>STUDENT </h1>
                    <h1>20</h1>
                </div>
                <div className='p-2 '>Personal TODO</div>
            </div>
            <div className='min-w-96 w-full m-2 p-4 text-black'>
                <Table>
                    <TableCaption>STUDENT LIST</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-[100px]'>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Roll Num</TableHead>
                            <TableHead className='text-right'>
                                Section
                            </TableHead>
                            <TableHead className='text-right'>
                                More Details
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {studentList.map((student: any) => (
                            <TableRow key={student._id}>
                                <TableCell className='font-medium'>
                                    {student.name}
                                </TableCell>
                                <TableCell>{student.email}</TableCell>
                                <TableCell>{student.classRollNumber}</TableCell>
                                <TableCell className='text-right'>
                                    {student.section}
                                </TableCell>
                                <TableCell className='text-right'>
                                    <DetailsDialog data={student} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default StudentManagement;

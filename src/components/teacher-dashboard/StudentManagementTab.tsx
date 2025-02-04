'use client';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { userSlice } from '@/lib/features/userDataSlice';
import { RootState } from '@/lib/store';
import { toast } from 'sonner';
import DetailsDialog from './DetailsDialog';

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
            <div className='min-w-96 w-full m-2 p-4'>
                STUDENT LIST
                {studentList.map((student: any) => (
                    <div
                        key={student._id}
                        className='flex items-center justify-between p-2'>
                        <div>{student.name}</div>
                        <div>{student.email}</div>
                        <div>{student.classRollNumber}</div>
                        <div>{student.section}</div>
                        <div>
                            <DetailsDialog data={student} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentManagement;

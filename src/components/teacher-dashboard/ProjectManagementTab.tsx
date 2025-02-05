'use client';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
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

const ProjectManagementTab = () => {
    const user = useSelector((state: RootState) => state.user);
    const [project, setProject] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/teacher/project/${user.collegeId}/${user.semester}/${user.branch}`
            );
            if (response.data.success) {
                toast.success(response.data.message);
                setProject(response.data.project);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='w-dvw flex items-center justify-between '>
            <Table className='w-3/4 mx-auto mt-6'>
                <TableCaption>List of All Project </TableCaption>
                <TableHeader>
                    <TableRow className='text-black font-extrabold'>
                        <TableHead className='w-[200px]'>
                            Project Name
                        </TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Branch</TableHead>
                        <TableHead className='text-right'>Semester</TableHead>
                        <TableHead className='text-right'>Details</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {project.map((item: any) => (
                        <TableRow key={item._id}>
                            <TableCell className='font-medium'>
                                {item.projectName}
                            </TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell>{item.branch}</TableCell>
                            <TableCell className='text-right'>
                                {item.semester}
                            </TableCell>
                            <TableCell className='text-right'>
                                <DetailsDialog data={item} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ProjectManagementTab;

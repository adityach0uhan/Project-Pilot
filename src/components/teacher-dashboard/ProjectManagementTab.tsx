'use client';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '@/lib/store';
import { toast } from 'sonner';
import DetailsDialog from './DetailsDialog';

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
            <div className='min-w-96 w-full m-2 p-4'>
                {project.map((item: any) => (
                    <div
                        key={item._id}
                        className='flex items-center justify-between p-2'>
                        <div>{item.projectName}</div>
                        <div>{item.description}</div>
                        <div>{item.branch}</div>
                        <div>{item.semester}</div>
                        <div>
                            <DetailsDialog data={item} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectManagementTab;

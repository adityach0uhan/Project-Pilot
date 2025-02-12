'use clients';
import CreateProjectDialog from './CreateProjectDialog';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import { Button } from '../ui/button';
// import { MdDelete } from 'react-icons/md';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import UpdateProject from './UpdateProject';
import DeleteProject from './DeleteProject';

const ProjectContainer = () => {
    const user = useSelector((state: RootState) => state.user);
    const [projectDetails, setProjectDetails] = useState({
        projectName: '',
        description: '',
        status: '',
        branch: '',
        semester: '',
        groupNumber: '',
        _id: ''
    });
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false);
    const fetchProjectDetails = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/projects/getProjectByGroupId/${user.teamId}`
            );
            console.log(
                `the url is : ${process.env.NEXT_PUBLIC_API_ENDPOINT}/projects/getProjectByGroupId/${user.teamId}`
            );
            console.log(
                'response from get project by user id',
                response.data.projects
            );
            if (response.data.success) {
                setProjectDetails({
                    projectName: response.data.projects[0].projectName,
                    description: response.data.projects[0].description,
                    status: response.data.projects[0].status,
                    branch: response.data.projects[0].branch,
                    semester: response.data.projects[0].semester,
                    groupNumber: response.data.projects[0].groupNumber,
                    _id: response.data.projects[0]._id
                });
                toast.success('Project details fetched successfully');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log('Error fetching project details:', error);
            toast.error('Error fetching project details');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjectDetails();
    }, [refresh, user.teamId]);
    return (
        <div className='w-[550px] p-4 rounded-lg bg-white shadow-md'>
            {projectDetails._id && projectDetails.groupNumber ? (
                <>
                    <div className='w-full  h-full flex flex-col items- justify-between gap-4'>
                        <div>
                            <h1 className='text-xl p-2 font-bold'>
                                Project Details
                            </h1>
                            <div className='p-3 flex flex-col gap-3'>
                                <h2 className='w-full font-semibold'>
                                    {projectDetails.projectName}
                                </h2>
                                <p className='w-full text-sm text-gray-700 font-light'>
                                    {projectDetails.description}
                                </p>

                                <div className='flex items-center justify-between px-3'></div>
                            </div>{' '}
                        </div>

                        <div className='flex w-full items-center justify-evenly'>
                            <div className='w-1/3 rounded-md bg-green-400 p-2 flex flex-col gap-2'>
                                <h3>Status</h3>
                                <Button
                                    variant={'outline'}
                                    disabled={true}
                                    className='w-full'>
                                    {projectDetails.status}
                                </Button>
                            </div>

                            <div className='w-1/3 rounded-md bg-blue-400 p-2 flex flex-col gap-2'>
                                <h3>Group Number</h3>
                                <Button
                                    variant={'outline'}
                                    disabled={true}
                                    className='w-full'>
                                    {projectDetails.groupNumber}
                                </Button>
                            </div>
                            <div className='w-1/4 rounded-md  p-2 flex flex-col gap-2'>
                                <span className='w-full p-2 rounded-md text-bold bg-yellow-300 text-black '>
                                    <UpdateProject
                                        projectDetails={projectDetails}
                                        setRefresh={setRefresh}
                                    />
                                </span>
                                <Button
                                    variant={'destructive'}
                                    className='w-full'>
                                    <DeleteProject
                                        _id={projectDetails._id}
                                        setRefresh={setRefresh}
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <CreateProjectDialog
                    setRefresh={setRefresh}
                    refresh={refresh}
                />
            )}
        </div>
    );
};

export default ProjectContainer;

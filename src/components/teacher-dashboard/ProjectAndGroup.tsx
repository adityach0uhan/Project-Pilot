import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    CalendarIcon,
    Users2,
    BookOpen,
    School,
    Mail,
    ChevronDown,
    ChevronUp,
    Crown,
    User,
    Hash,
    Key,
    Clock
} from 'lucide-react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from '@/components/ui/collapsible';

const ProjectAndGroup = () => {
    const user = useSelector((state: RootState) => state.user);
    const API_BASE_URL =
        process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:4000/api/v1';
    const [data, setData] = useState<any>([]);
    const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>(
        {}
    );

    const toggleOpen = (id: string) => {
        setOpenStates((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const fetchData = async () => {
        if (!user?.collegeId || !user?.semester || !user?.branch) return;
        try {
            const response = await axios.get(
                `${API_BASE_URL}/teacher/project/${user.collegeId}/${user.semester}/${user.branch}`
            );
            if (response.data.success) {
                toast.success(response.data.message);
                setData(response.data.project);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user?.collegeId && user?.semester && user?.branch) {
            fetchData();
        }
    }, [user.collegeId, user.semester, user.branch]);

    const formatDate = (dateString: any) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const TeamMemberCard = ({ member, isLeader }: any) => (
        <div className='bg-gray-50 rounded-lg p-4 space-y-2'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    {isLeader ? (
                        <Crown className='h-5 w-5 text-yellow-500' />
                    ) : (
                        <User className='h-5 w-5 text-gray-500' />
                    )}
                    <span className='font-medium'>{member.name}</span>
                </div>
                <Badge variant={isLeader ? 'default' : 'secondary'}>
                    {isLeader ? 'Team Leader' : 'Member'}
                </Badge>
            </div>

            <div className='grid grid-cols-2 gap-2 text-sm text-gray-600'>
                <div className='flex items-center gap-2'>
                    <Mail className='h-4 w-4' />
                    <span>{member.email}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Hash className='h-4 w-4' />
                    <span>Roll: {member.universityRollNumber}</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className='p-6  min-h-screen w-dvw'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center mb-6'>
                    <div className='space-y-1'>
                        <h1 className='text-3xl font-bold text-gray-800'>
                            Project & Group Details
                        </h1>
                        <p className='text-gray-600'>
                            College: {user?.collegeId} |{' '}
                            {user?.branch?.toUpperCase()} - Semester{' '}
                            {user?.semester}
                        </p>
                    </div>
                    <Badge variant='outline' className='px-4 py-2'>
                        Total Projects: {data.length}
                    </Badge>
                </div>

                <div className='grid grid-cols-1 gap-6'>
                    {data.map((project: any) => (
                        <Card
                            key={project._id}
                            className='hover:shadow-lg transition-shadow duration-300'>
                            <CardHeader className='space-y-1'>
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <CardTitle className='text-xl font-bold'>
                                            {project.projectName}
                                        </CardTitle>
                                        <p className='text-sm text-gray-500'>
                                            Project ID: {project._id}
                                        </p>
                                    </div>
                                    <Badge
                                        variant={
                                            project.status === 'Started'
                                                ? 'secondary'
                                                : 'default'
                                        }
                                        className='ml-2'>
                                        {project.status}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className='space-y-6'>
                                {/* Project Info */}
                                <div className='bg-gray-50 p-4 rounded-lg'>
                                    <h3 className='font-semibold mb-2'>
                                        Project Description
                                    </h3>
                                    <p className='text-gray-600'>
                                        {project.description}
                                    </p>
                                </div>

                                {/* Project Details */}
                                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                                        <Users2 className='h-4 w-4' />
                                        <span>Group {project.groupNumber}</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                                        <BookOpen className='h-4 w-4' />
                                        <span>Sem {project.semester}</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                                        <School className='h-4 w-4' />
                                        <span>
                                            {project.branch.toUpperCase()}
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                                        <Key className='h-4 w-4' />
                                        <span>
                                            Invite: {project.groupId.inviteCode}
                                        </span>
                                    </div>
                                </div>

                                {/* Group Info */}
                                <div className='bg-blue-50 p-4 rounded-lg'>
                                    <div className='flex justify-between items-center mb-4'>
                                        <h3 className='font-semibold'>
                                            Group: {project.groupId.name}
                                        </h3>
                                        <div className='flex gap-2'>
                                            <Badge variant='outline'>
                                                <Clock className='h-3 w-3 mr-1' />
                                                Created:{' '}
                                                {formatDate(
                                                    project.groupId.createdAt
                                                )}
                                            </Badge>
                                            <Badge variant='outline'>
                                                <Clock className='h-3 w-3 mr-1' />
                                                Updated:{' '}
                                                {formatDate(
                                                    project.groupId.updatedAt
                                                )}
                                            </Badge>
                                        </div>
                                    </div>

                                    <Collapsible
                                        open={openStates[project._id]}
                                        onOpenChange={() =>
                                            toggleOpen(project._id)
                                        }
                                        className='space-y-2'>
                                        <div className='flex items-center justify-between'>
                                            <h3 className='text-sm font-semibold text-gray-700'>
                                                Team Members (
                                                {project.groupId.members.length}
                                                )
                                            </h3>
                                            <CollapsibleTrigger className='hover:bg-gray-100 p-2 rounded-full'>
                                                {openStates[project._id] ? (
                                                    <ChevronUp className='h-4 w-4' />
                                                ) : (
                                                    <ChevronDown className='h-4 w-4' />
                                                )}
                                            </CollapsibleTrigger>
                                        </div>

                                        <CollapsibleContent className='space-y-3'>
                                            {project.groupId.members.map(
                                                (member: any) => (
                                                    <TeamMemberCard
                                                        key={member._id}
                                                        member={member}
                                                        isLeader={
                                                            member._id ===
                                                            project.groupId
                                                                .groupleader
                                                        }
                                                    />
                                                )
                                            )}
                                        </CollapsibleContent>
                                    </Collapsible>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {data.length === 0 && (
                    <div className='text-center py-12'>
                        <p className='text-gray-500'>No projects found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectAndGroup;

import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
    EyeIcon,
    CalendarIcon,
    UserCircle,
    Building2,
    Mail,
    School,
    BookOpen,
    Hash,
    Users2,
    User2
} from 'lucide-react';
import { format } from 'date-fns';

const DetailsDialog = ({ data }: any) => {
    const [open, setOpen] = useState(false);

    const InfoItem = ({ icon: Icon, label, value }: any) => {
        if (!value) return null;
        return (
            <div className='flex items-start space-x-3 p-3 bg-gray-50/50 rounded-lg'>
                <Icon className='h-5 w-5 text-gray-500 mt-0.5' />
                <div className='min-w-0'>
                    <p className='text-sm font-medium text-gray-500'>{label}</p>
                    <p className='text-sm text-gray-900 truncate'>{value}</p>
                </div>
            </div>
        );
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant='ghost' size='icon'>
                    <EyeIcon className='h-4 w-4' />
                </Button>
            </DialogTrigger>
            <DialogContent className='max-w-2xl'>
                <DialogHeader>
                    <DialogTitle className='flex items-center space-x-2'>
                        <UserCircle className='h-6 w-6 text-primary' />
                        <span>User Details</span>
                    </DialogTitle>
                </DialogHeader>

                <div className='mt-4 space-y-4'>
                    {/* User Header */}
                    <div className='flex items-center space-x-4 p-4 bg-primary/5 rounded-lg'>
                        <div className='h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center'>
                            <span className='text-2xl font-semibold text-primary'>
                                {data.name?.charAt(0).toUpperCase()}
                            </span>
                        </div>
                        <div className='flex-1 min-w-0'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h3 className='text-lg font-semibold truncate'>
                                        {data.name}
                                    </h3>
                                    <p className='text-sm text-gray-500'>
                                        {data.role}
                                    </p>
                                </div>
                                <div className='text-right'>
                                    <p className='text-sm text-gray-500'>
                                        Joined
                                    </p>
                                    <time className='text-sm text-gray-700'>
                                        {format(
                                            new Date(data.createdAt),
                                            'MMM d, yyyy'
                                        )}
                                    </time>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Info Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        <InfoItem
                            icon={Mail}
                            label='Email'
                            value={data.email}
                        />
                        <InfoItem
                            icon={School}
                            label='Branch'
                            value={data.branch?.toUpperCase()}
                        />
                        <InfoItem
                            icon={BookOpen}
                            label='Semester'
                            value={data.semester}
                        />
                        <InfoItem
                            icon={User2}
                            label='Section'
                            value={data.section?.toUpperCase()}
                        />
                        <InfoItem
                            icon={Hash}
                            label='Class Roll Number'
                            value={data.classRollNumber}
                        />
                        <InfoItem
                            icon={Hash}
                            label='University Roll'
                            value={data.universityRollNumber}
                        />
                        <InfoItem
                            icon={Building2}
                            label='College ID'
                            value={data.collegeId}
                        />
                    </div>

                    <div className='text-sm text-gray-500 flex items-center justify-end space-x-2 pt-2'>
                        <p>Last updated:</p>
                        <time>
                            {format(new Date(data.updatedAt), 'MMM d, yyyy')}
                        </time>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DetailsDialog;

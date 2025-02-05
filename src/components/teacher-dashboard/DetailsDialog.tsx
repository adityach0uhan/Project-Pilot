'use state';
import axios from 'axios';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import { EyeOpenIcon } from '@radix-ui/react-icons';

const DetailsDialog = ({ data }: any) => {
    return (
        <Dialog>
            <DialogTrigger>
                <EyeOpenIcon />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Details</DialogTitle>
                    <DialogDescription className='flex flex-col gap-2'>
                        {data.name && (
                            <span>
                                <strong>Name:</strong> {data.name}
                            </span>
                        )}
                        {data.email && (
                            <span>
                                <strong>Email:</strong> {data.email}
                            </span>
                        )}
                        {data.classRollNumber && (
                            <span>
                                <strong>Class Roll Number:</strong>{' '}
                                {data.classRollNumber}
                            </span>
                        )}
                        {data.section && (
                            <span>
                                <strong>Section:</strong> {data.section}
                            </span>
                        )}
                        {data.branch && (
                            <span>
                                <strong>Branch:</strong> {data.branch}
                            </span>
                        )}
                        {data.semester && (
                            <span>
                                <strong>Semester:</strong> {data.semester}
                            </span>
                        )}
                        {data.collegeId && (
                            <span>
                                <strong>College ID:</strong> {data.collegeId}
                            </span>
                        )}
                        {data.groupNumber && (
                            <span>
                                <strong>Group NO:</strong> {data.groupNumber}
                            </span>
                        )}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default DetailsDialog;

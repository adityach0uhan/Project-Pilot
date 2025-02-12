import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import axios from 'axios';
import { TrashIcon } from '@radix-ui/react-icons';
import { toast } from 'sonner';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from '@/components/ui/alert-dialog';

const DeleteProject = ({
    _id,
    setRefresh
}: {
    _id: string;
    setRefresh: any;
}) => {
    const handleDelete = async () => {
        try {
            await axios.delete(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/projects/${_id}`
            );
            toast.success('Project deleted successfully');
            setRefresh((prev: any) => !prev);
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <span>Delete</span>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteProject;

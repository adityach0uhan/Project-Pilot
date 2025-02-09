'use client';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { useState, useEffect } from 'react';
import { TrashIcon } from '@radix-ui/react-icons';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const NoticeTab = () => {
    const user = useSelector((state: RootState) => state.user);
    const [notices, setNotices]: any = useState([]);
    const [noticeData, setNoticeData] = useState({
        heading: '',
        description: '',
        priority: '',
        branch: user.branch,
        postedBy: user.name,
        collegeId: user.collegeId
    });

    const fetchNotices = async () => {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/notification/getAllNotification/${user.collegeId}/${user.branch}`
            );
            setNotices(res.data.notifications);
        } catch (error) {
            console.log('Error fetching notices:', error);
        }
    };

    useEffect(() => {
        fetchNotices();
    }, []);

    const createNotice = async () => {
        try {
            const resp = await axios.post(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/notification/createNotification`,
                noticeData
            );
            console.log(resp.data);
            setNoticeData({
                heading: '',
                description: '',
                priority: '',
                branch: user.branch,
                postedBy: user.name,
                collegeId: user.collegeId
            });
            fetchNotices();
        } catch (error) {
            console.log('Error creating notice:', error);
        }
    };

    const deleteNotice = async (id: string) => {
        try {
            await axios.delete(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/notification/deleteNotification/${id}`
            );
            fetchNotices();
        } catch (error) {
            console.log('Error deleting notice:', error);
        }
    };

    return (
        <div className='w-dvw p-4 flex gap-3 '>
            <div className='w-96 gap-4 bg-white shadow-md p-3 flex flex-col'>
                <h1>New Notice</h1>
                <div className='flex flex-col gap-3'>
                    <Input
                        type='text'
                        placeholder='Heading'
                        value={noticeData.heading}
                        onChange={(e) =>
                            setNoticeData({
                                ...noticeData,
                                heading: e.target.value
                            })
                        }
                    />
                    <Input
                        type='text'
                        placeholder='Description'
                        value={noticeData.description}
                        onChange={(e) =>
                            setNoticeData({
                                ...noticeData,
                                description: e.target.value
                            })
                        }
                    />
                    <Select
                        onValueChange={(value) =>
                            setNoticeData({ ...noticeData, priority: value })
                        }>
                        <SelectTrigger className='w-[100px]'>
                            <SelectValue placeholder='Priority' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem
                                className='text-red-600 hover:text-red-800'
                                value='high'>
                                High
                            </SelectItem>
                            <SelectItem
                                className='text-green-500 hover:text-green-700'
                                value='low'>
                                Low
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    <Button
                        className='bg-green-500'
                        variant={'outline'}
                        onClick={createNotice}>
                        Add
                    </Button>
                </div>
            </div>
            <div className='flex flex-col gap-2 p-2 '>
                <div>All Notices</div>
                {notices.map((notice: any) => (
                    <div
                        key={notice._id}
                        className='w-[360px] shadow-xl flex flex-col justify-between h-32 p-3 bg-white rounded-md'>
                        <h1 className='flex justify-between items-center'>
                            <span className='text-lg font-semibold'>
                                {notice.heading}
                            </span>
                            <span>
                                <p className='text-xs'>
                                    {new Date(
                                        notice.createdAt
                                    ).toLocaleTimeString()}
                                </p>
                            </span>
                        </h1>
                        <div className='flex gap-2'>
                            <p className='text-sm'>{notice.description}</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <p
                                className={`px-2 p-1 rounded-md text-xs ${
                                    notice.priority === 'high'
                                        ? 'bg-red-500'
                                        : 'bg-green-500'
                                }`}>
                                {notice.priority.charAt(0).toUpperCase() +
                                    notice.priority.slice(1)}
                            </p>
                            <Button
                                className='bg-red-500'
                                variant={'outline'}
                                onClick={() => deleteNotice(notice._id)}>
                                <TrashIcon />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoticeTab;

'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '../ui/button';
import { BellIcon } from '@radix-ui/react-icons';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const Notifications = () => {
    const user = useSelector((state: RootState) => state.user);
    const [notices, setNotices] = useState<any>([]);
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

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

    return (
        <div className='bg-white w-72 p-2 rounded-md flex flex-col items-center justify-between shadow-md'>
            <h1 className='text-bold w-full text-xl font-bold m-2 flex items-center justify-start gap-4 px-2 h-8'>
                <span>Notifications</span>
                <BellIcon className='animate-pulse h-5 w-5 text-yellow-400 text-xl' />
            </h1>
            <Carousel
                plugins={[plugin.current]}
                orientation='vertical'
                className='w-full max-w-xs'>
                <CarouselContent className='-mt-1 h-[200px]'>
                    {notices.length > 0 ? (
                        notices.map((notice: any, index: any): any => (
                            <CarouselItem
                                key={index}
                                className='pt-1 md:basis-1/2'>
                                <div className='p-1'>
                                    <Card>
                                        <CardContent className='flex flex-col items-start h-24 p-2'>
                                            <h1 className='text-base w-full flex items-center justify-between font-bold'>
                                                {notice.heading}{' '}
                                                <span className='text-xs text-green-600'>
                                                    {new Date(
                                                        notice.createdAt
                                                    ).toLocaleString()}
                                                </span>
                                            </h1>
                                            <span className='text-sm text-gray-500'>
                                                {notice.description}
                                            </span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))
                    ) : (
                        <p className='text-gray-500 text-sm text-center'>
                            No notifications available
                        </p>
                    )}
                </CarouselContent>
            </Carousel>
            <Button className='w-full bg-green-500' onClick={fetchNotices}>
                Refresh
            </Button>
        </div>
    );
};

export default Notifications;

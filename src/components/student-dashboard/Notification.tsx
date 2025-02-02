'use client';
import React from 'react';
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

const Notifications = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );
    return (
        <div className='bg-white w-72 p-2 rounded-md flex flex-col items-center justify-between shadow-md '>
            <h1 className='text-bold w-full text-xl font-bold m-2 flex items-center justify-start gap-4 px-2 h-8 '>
                <span> Notifications</span>
                <BellIcon className='animate-pulse h-5 w-5 text-yellow-400 text-xl' />
            </h1>
            <Carousel
                plugins={[plugin.current]}
                orientation='vertical'
                className='w-full  max-w-xs'>
                <CarouselContent className='-mt-1 h-[200px]'>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className='pt-1 md:basis-1/2'>
                            <div className='p-1'>
                                <Card>
                                    <CardContent className='flex  flex-col items-start  h-24 p-2'>
                                        <h1 className='text-base w-full flex items-center justify-between font-bold'>
                                            Heading{' '}
                                            <span className='text-xs text-green-600'>
                                                12-dec 11:21pm
                                            </span>
                                        </h1>
                                        <span className='text-sm text-gray-500'>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <Button className='w-full bg-green-500'>Refresh</Button>
        </div>
    );
};

export default Notifications;

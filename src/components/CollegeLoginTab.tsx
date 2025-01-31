'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { InputOTP, InputOTPSlot } from '@/components/ui/input-otp';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'sonner';
import { useSelector, useDispatch } from 'react-redux';
import { addCurrentUserData } from '@/lib/features/userDataSlice';
import StudentLoginTab from '@/components/StudentLoginTab';
type Props = {};

const CollegeLoginTab = (props: Props) => {
    return (
        <Card className='min-h-80'>
            <CardTitle className='px-6 pt-6 pb-3'>College</CardTitle>
            <CardContent className=''>
                <div className=''>
                    <Label htmlFor='admin-email'>Email</Label>
                    <Input id='admin-email' type='email' />
                </div>
                <div className=''>
                    <Label htmlFor='admin-password'>Password</Label>
                    <Input id='admin-password' type='password' />
                </div>
            </CardContent>
            <CardFooter>
                <Button type='button' aria-label='Login'>
                    Login
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CollegeLoginTab;

'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import StudentLoginTab from '@/components/StudentLoginTab';
import TeacherLoginTab from '@/components/TeacherLoginTab';
import SupAdminLoginTab from '@/components/SupAdminLoginTab';
import CollegeLoginTab from '@/components/CollegeLoginTab';

export default function page() {
    return (
        <>
            <div className='flex md:mt-1 w-full my-auto md:gap-20 md:flex-row flex-col items-center justify-evenly gap-0 '>
                <Image
                    className='block md:hidden'
                    height={250}
                    width={250}
                    src={'/login1.svg'}
                    alt='Image'
                />
                <Image
                    className='hidden md:block'
                    height={400}
                    width={450}
                    src={'/login1.svg'}
                    alt='Image'
                />
                <Tabs
                    defaultValue='student'
                    className='w-[380px] my-auto mx-2 '>
                    <TabsList className='grid w-full grid-cols-4 '>
                        <TabsTrigger value='student'>Student </TabsTrigger>
                        <TabsTrigger value='teacher'>Teacher </TabsTrigger>
                        <TabsTrigger value='college'>College </TabsTrigger>
                        <TabsTrigger value='admin'>Admin</TabsTrigger>
                    </TabsList>
                    <TabsContent value='student'>
                        <StudentLoginTab />
                    </TabsContent>{' '}
                    <TabsContent value='teacher'>
                        <TeacherLoginTab />
                    </TabsContent>
                    <TabsContent value='college'>
                        <CollegeLoginTab />
                    </TabsContent>
                    <TabsContent value='admin'>
                        <SupAdminLoginTab />
                    </TabsContent>
                </Tabs>
            </div>
        </>
    );
}

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import DeleteCollege from './DeleteCollege';
import UpdateCollege from './UpdateCollege';
export function CollegeCard({ collegeData, setRefresh }: any) {
    return (
        <Card className='w-[350px]'>
            <CardHeader>
                <CardTitle className='flex justify-between'>
                    <span>{collegeData.collegeName}</span>
                    <span>{collegeData.collegeId}</span>
                </CardTitle>
                <CardDescription>{collegeData.collegeLocation}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='w-full flex justify-between'>
                    Email <span>{collegeData.email}</span>
                </div>
                <Separator className='my-2' />
                <div className='w-full flex justify-between'>
                    Passkey<span>{collegeData.passkey}</span>
                </div>
            </CardContent>
            <CardFooter className='flex justify-between'>
                <div className='flex gap-2 border border-red-500 p-2 rounded-md'>
                    <DeleteCollege
                        setRefresh={setRefresh}
                        collegeData={collegeData}
                    />
                    <TrashIcon className='w-6 h-6 text-red-500 ' />
                </div>
                <div className='flex gap-2 border border-red-500 p-2 rounded-md'>
                    <UpdateCollege
                        collegeData={collegeData}
                        setRefresh={setRefresh}
                    />
                    <Pencil1Icon className='w-6 h-6 text-yellow-500' />
                </div>
            </CardFooter>
        </Card>
    );
}

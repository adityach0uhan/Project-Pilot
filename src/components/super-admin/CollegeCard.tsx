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
export function CollegeCard({ collegeData }: any) {
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
                <Button variant='outline'>
                    Delete
                    <TrashIcon className='w-6 h-6 text-red-500 ' />
                </Button>
                <Button variant='outline'>
                    Update
                    <Pencil1Icon className='w-6 h-6 text-yellow-500' />
                </Button>
            </CardFooter>
        </Card>
    );
}

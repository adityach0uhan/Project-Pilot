import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { TrashIcon } from '@radix-ui/react-icons';

const NoticeTab = () => {
    return (
        <div className='w-dvw p-4 flex gap-3 '>
            <div className='w-96 gap-4 bg-white shadow-md p-3 flex flex-col'>
                <h1>New Notice</h1>
                <div className='flex flex-col gap-3'>
                    <Input type='text' placeholder='Heading' />
                    <Input type='text' placeholder='Description' />
                    <Select>
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

                    <Button className='bg-green-500' variant={'outline'}>
                        Add
                    </Button>
                </div>
            </div>
            <div className='flex flex-col gap-2 p-2 '>
                <div>All Notices</div>
                <div className='w-[360px] shadow-xl flex flex-col justify-between  h-32 p-3 bg-white rounded-md'>
                    <h1 className='flex justify-between items-center'>
                        <span className='text-lg font-semibold'> Heading</span>
                        <span>
                            <p className='text-xs'> 10:10:10</p>
                        </span>
                    </h1>
                    <div className='flex gap-2'>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <p className='bg-green-500 w-max px-2 p-1 rounded-md text-xs'>
                            Low
                        </p>
                        <Button className='bg-red-500' variant={'outline'}>
                            <TrashIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoticeTab;

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface PendingRequestProps {
    groupData: any;
}
const PendingRequest: React.FC<PendingRequestProps> = ({ groupData }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline'>
                    <span> Pending Requests</span>{' '}
                    <span className=' text-red-500'>
                        ( {groupData.pendingRequests.length} )
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Pending Requests</DialogTitle>
                </DialogHeader>
                {groupData.pendingRequests.map((item: any, index: any) => (
                    <div
                        key={index}
                        className='flex items-center justify-between gap-2 p-1'>
                        <Avatar>
                            <AvatarImage
                                src={`https://api.dicebear.com/6.x/initials/svg?seed=${item.name}`}
                                alt={`@${item.name}`}
                            />
                            <AvatarFallback>{item.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col gap-1'>
                            <p>{item.name}</p>
                            <p className='text-xs'>{item.email}</p>
                        </div>
                        <Button className='max-w-20 h-8'>Accept</Button>
                        <Button className='max-w-20 h-8'>Reject</Button>
                    </div>
                ))}
            </DialogContent>
        </Dialog>
    );
};

export default PendingRequest;

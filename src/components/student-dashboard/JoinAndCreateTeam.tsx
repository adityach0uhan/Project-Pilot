import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';
import CreateTeamDialog from './CreateTeamDialog';
import axios from 'axios';
import { toast } from 'sonner';
type Props = {
    getTeamInfo: any;
};

const JoinAndCreateTeam = ({ getTeamInfo }: any) => {
    const user = useSelector((state: RootState) => state.user);
    const [inviteCode, setInviteCode] = useState('');
    const [loading, setLoading] = useState(false);

    const handelInviteSubmit = async () => {
        try {
            if (inviteCode.length === 0 && inviteCode.length < 4) {
                return;
            }
            setLoading(true);
            const resp = await axios.post(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${user.collegeId}/group/requesttojoin/${inviteCode}`,
                { userId: user._id }
            );
            console.log(resp.data);
            toast.message(resp.data.message);
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setInviteCode('');
            setLoading(false);
            getTeamInfo();
        }
    };

    return (
        <div>
            <div className='w-96 h-72 flex flex-col justify-evenly shadow-lg border-zinc-200 border-[1px] rounded-xl m-2 p-3'>
                <div className='flex flex-col gap-2'>
                    Create a Group
                    <CreateTeamDialog getTeamInfo={getTeamInfo} />
                </div>
                <div className='flex flex-col gap-2'>
                    Join a Group
                    <Input
                        onChange={(e) => setInviteCode(e.target.value)}
                        placeholder='Enter Group Code'
                    />
                    <Button
                        onClick={handelInviteSubmit}
                        className='w-36'
                        variant={'default'}>
                        {loading ? 'Loading...' : 'Join Group'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default JoinAndCreateTeam;

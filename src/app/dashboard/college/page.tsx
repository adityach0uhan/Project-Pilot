import AllStudentList from '@/components/college-dashboard/AllStudentList';
import AllTeacherList from '@/components/college-dashboard/AllTeacherList';

const page = () => {
    return (
        <div className='p-4 w-dvw min-h-[400px] flex gap-4 '>
            <AllStudentList />
            <AllTeacherList />
        </div>
    );
};

export default page;

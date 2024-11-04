import Image from 'next/image';
import { Button } from '../button';
import Link from 'next/link';
const HeroSection = () => {
    const Features = [
        {
            icon: '/Features/team.svg',
            title: 'Team Creation & Management',
            description:
                'Students can create teams, invite members, or join via an invite code.'
        },
        {
            icon: '/Features/manage.svg',
            title: 'Project Creation & Management',
            description:
                'Students can create projects, assign tasks, and track progress.'
        },
        {
            icon: '/Features/task.svg',
            title: 'Task Creation & Management',
            description:
                'Students can create tasks, assign them to team members, and track progress.'
        },
        {
            icon: '/Features/file.svg',
            title: 'File Upload & Management',
            description:
                'Students can upload files and share them with team members.'
        },

        {
            icon: '/Features/dashboard.svg',
            title: 'Teacher Dashboard',
            description:
                'Teachers can view all student projects, tasks, and progress.'
        },
        {
            icon: '/Features/dashboard.svg',
            title: 'Student Dashboard',
            description:
                'Students can view their projects, tasks, and progress.'
        }
    ];

    return (
        <div className='w-screen p-2 '>
            <div className='w-full flex items-center justify-center flex-col gap-2'>
                <Image
                    src='HeroSection.svg'
                    alt='Student Project Manager '
                    width={370}
                    height={370}
                />
                <h1 className='md:text-4xl text-2xl'>
                    Student Project Manager
                </h1>
                <p> A student project manager tool for teacher </p>
                <span className='flex gap-3'>
                    <Link href='/signup'>
                        <Button variant={'outline'}>Signup</Button>
                    </Link>
                    <Link href='/login'>
                        <Button variant={'outline'}>Login</Button>
                    </Link>
                </span>
            </div>
            <h1 className='mt-6 py-2 w-full bg-white text-center md:text-start  text-3xl md:pl-20 '>
                Features
            </h1>

            <div className=' w-full flex-wrap p-3 items-center justify-center flex gap-6 flex-col md:flex-row min-h-56 bg-white'>
                {Features.map((feature, index) => (
                    <div
                        key={index}
                        className='md:w-80 w-full rounded-md h-36 flex flex-col   p-3 bg-slate-100 '>
                        <h1 className='my-2 flex items-center gap-4 '>
                            <Image
                                src={feature.icon}
                                alt='feature icon'
                                width={20}
                                height={20}
                            />
                            {feature.title}
                        </h1>
                        <hr className='border-black mb-5' />
                        <p className='text-sm'>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;

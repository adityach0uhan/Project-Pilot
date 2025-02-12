'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        profilePic: '',
        department: '',
        classRollNumber: '',
        universityRollNumber: '',
        collegeId: '',
        semester: '',
        branch: '',
        section: '',
        gender: ''
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const registerUser = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(
                `${apiEndpoint}/auth/student/register`,
                formData
            );
            if (response.data.success) {
                toast.success('Student registered successfully', {
                    description: 'Login with your credentials'
                });
                router.push('/auth/login');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Internal server error');
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='min-h-screen w-dvw bg-gradient-to-br from-blue-50 to-indigo-50 py-8'>
            <div className='mx-auto max-w-full px-4'>
                <div className='mb-8 text-center'>
                    <h1 className='text-4xl font-bold text-gray-900'>
                        Student Registration
                    </h1>
                    <p className='mt-2 text-gray-600'>
                        Create your student account to get started
                    </p>
                </div>

                <form
                    onSubmit={registerUser}
                    className='mx-auto rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl'>
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {Object.keys(formData).map((field) => (
                            <div key={field} className='w-72 space-y-2'>
                                <Label
                                    htmlFor={field}
                                    className='text-sm font-medium text-gray-700'>
                                    {field
                                        .replace(/([A-Z])/g, ' $1')
                                        .replace(/^./, (str) =>
                                            str.toUpperCase()
                                        )}
                                </Label>
                                {field === 'semester' ? (
                                    <select
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className='w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200'>
                                        <option value=''>
                                            Select Semester
                                        </option>
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                                            <option key={sem} value={sem}>
                                                {sem}
                                            </option>
                                        ))}
                                    </select>
                                ) : field === 'branch' ? (
                                    <select
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className='w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200'>
                                        <option value=''>Select Branch</option>
                                        {[
                                            'CSE',
                                            'IT',
                                            'ECE',
                                            'EEE',
                                            'Mechanical',
                                            'Civil'
                                        ].map((branch) => (
                                            <option key={branch} value={branch}>
                                                {branch}
                                            </option>
                                        ))}
                                    </select>
                                ) : field === 'gender' ? (
                                    <select
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className='w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200'>
                                        <option value=''>Select Gender</option>
                                        {['Male', 'Female', 'Other'].map(
                                            (gender) => (
                                                <option
                                                    key={gender}
                                                    value={gender}>
                                                    {gender}
                                                </option>
                                            )
                                        )}
                                    </select>
                                ) : (
                                    <Input
                                        type={
                                            field === 'password'
                                                ? 'password'
                                                : 'text'
                                        }
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className='w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className='mt-8 flex flex-col items-center gap-4'>
                        <Button
                            type='submit'
                            className='w-full max-w-md transform rounded-lg bg-blue-600 px-6 py-3 text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg focus:ring-2 focus:ring-blue-300 disabled:opacity-50'
                            disabled={loading}>
                            {loading ? 'Processing...' : 'Register'}
                        </Button>

                        <div className='text-center'>
                            <span className='text-sm text-gray-600'>
                                Already have an account?{' '}
                            </span>
                            <Link href='/auth/login'>
                                <Button
                                    variant='link'
                                    className='text-sm font-medium text-blue-600 hover:text-blue-800'>
                                    Sign in
                                </Button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;

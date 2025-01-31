'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CollegeCard } from './CollegeCard';
import { AddNewCollege } from '@/components/super-admin/AddNewCollege';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const AllCollegeList = () => {
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchColleges = async () => {
        setLoading(true);
        try {
            const resp = await axios.get(
                'http://localhost:4000/api/v1/superadmin/getallcollegelist'
            );
            setColleges(resp.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchColleges();
    }, [refresh]);

    const filteredColleges = colleges.filter((college: any) =>
        college.collegeName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <div className='flex justify-center gap-3 m-2'>
                        <AddNewCollege
                            refresh={refresh}
                            setRefresh={setRefresh}
                        />
                        <Input
                            placeholder={'Search by college name'}
                            className='w-1/4'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className='px-8 flex flex-wrap items-center justify-center gap-4'>
                        {filteredColleges.length > 0 ? (
                            filteredColleges.map((college: any, index) => (
                                <div
                                    className='my-2 place-self-center'
                                    key={index}>
                                    <CollegeCard collegeData={college} />
                                </div>
                            ))
                        ) : (
                            <p className='text-red-500'>
                                No College Found with : {searchQuery}
                            </p>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default AllCollegeList;

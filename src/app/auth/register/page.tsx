import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <Link href='/auth/register/student'>
                <p>Student Registration</p>
            </Link>
            <Link href='/auth/register/teacher'>
                <p>Teacher Registration</p>
            </Link>
        </div>
    );
};

export default page;

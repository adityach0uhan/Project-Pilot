import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='w-screen mt-9 p-2 py-4 bg-red-200 flex items-center justify-center h-16 gap-6'>
            <a href='https://github.com/adityach0uhan'>
                <Image src='/github.svg' alt='github' width={20} height={20} />
            </a>
            <a href=''>
                <Image
                    src='/linkedin.svg'
                    alt='linkedin'
                    width={20}
                    height={20}
                />
            </a>
        </div>
    );
};

export default Footer;

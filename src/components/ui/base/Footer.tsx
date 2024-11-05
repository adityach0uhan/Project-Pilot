import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <span className='w-full  fixed bottom-0 mt-9 p-2 py-4  flex items-center justify-center h-16 gap-6 bg-white border-t-2'>
            <a href='https://github.com/adityach0uhan'>
                <Image src='/github.svg' alt='github' width={25} height={25} />
            </a>
            <a href=''>
                <Image
                    src='/linkedin.svg'
                    alt='linkedin'
                    width={25}
                    height={25}
                />
            </a>
        </span>
    );
};

export default Footer;

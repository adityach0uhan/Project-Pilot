import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/base/Navbar';
import Footer from '@/components/ui/base/Footer';
import { Toaster } from '@/components/ui/sonner';
import StoreProvider from './SoreProvider';

const font = Montserrat({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
});

export const metadata: Metadata = {
    title: 'Project Pilot',
    description: 'Project Pilot is a platform for students and teachers '
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                suppressHydrationWarning
                className={`bg-[#fbfbfb] ${font.className}  antialiased flex flex-col items-center justify-between min-h-screen`}>
                <StoreProvider>
                    <Navbar />
                    <main className='flex-grow'>{children}</main>
                    <Toaster />
                </StoreProvider>
            </body>
        </html>
    );
}

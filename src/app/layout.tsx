import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/ui/base/Navbar';
import Footer from '@/components/ui/base/Footer';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'Student Project Manager',
    description: 'A project management tool for students'
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
                className={` bg-slate-50 ${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative`}>
                <div className='absolute top-0'>
                    <Navbar />
                </div>
                <main className='mt-16'>{children}</main>
                <div className='absolute bottom-0'>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

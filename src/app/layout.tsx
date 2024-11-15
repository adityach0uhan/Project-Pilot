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
                className={`bg-slate-50 ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center justify-between min-h-screen`}>
                <Navbar />
                <main className='flex-grow'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}

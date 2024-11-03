import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/ui/base/Navbar';

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
                className={` bg-slate-50 ${geistSans.variable} ${geistMono.variable} antialiased `}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}

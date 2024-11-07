import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
// import { verifyToken } from './helpers/verifyToken';

export async function middleware(request: NextRequest) {
    //     const token = await request.cookies.get('student_project_manager_token')
    //         ?.value;
    //     const decodedToken = await verifyToken();
    //     const currentPath = request.nextUrl.pathname;
    //     const protectedPaths = currentPath.includes('/dashboard');
    //     const hidePathForAlreadyLoggedInUser = currentPath.includes('/auth');
    //     // Redirect to login page if token is not present
    //     if (!token && protectedPaths) {
    //         return NextResponse.redirect(new URL('/auth/login', request.url));
    //     }
    //     // Redirect to dashboard according to role
    //     if (token && protectedPaths) {
    //         if (decodedToken.role === 'teacher') {
    //             return NextResponse.redirect(
    //                 new URL('/dashboard/teacher', request.url)
    //             );
    //         } else if (decodedToken.role === 'student') {
    //             return NextResponse.redirect(
    //                 new URL('/dashboard/student', request.url)
    //             );
    //         }
    //     }
    //     // Hide path for already logged in user
    //     if (hidePathForAlreadyLoggedInUser) {
    //         if (token) {
    //             if (decodedToken.role === 'teacher') {
    //                 return NextResponse.redirect(
    //                     new URL('/dashboard/teacher', request.url)
    //                 );
    //             } else if (decodedToken.role === 'student') {
    //                 return NextResponse.redirect(
    //                     new URL('/dashboard/student', request.url)
    //                 );
    //             }
    //         }
    //     }
}

export const config = {
    matcher: ['/', '/auth/:path*', '/dashboard/:path*']
};

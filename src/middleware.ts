import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export async function middleware(request: NextRequest) {
    const token = await request.cookies.get('student_project_manager_token')
        ?.value;
    const decodeToken = (await jwt.decode(token!)) as { role?: string };
    const currentPath = request.nextUrl.pathname;
    const protectedPaths = currentPath.includes('/dashboard');

    if (protectedPaths) {
        if (!token) {
            return NextResponse.redirect(new URL('/auth/login', request.url));
        } else {
            if (decodeToken.role === 'teacher') {
                if (currentPath.includes('/student')) {
                    return NextResponse.redirect(
                        new URL('/dashboard/teacher', request.url)
                    );
                }
            } else if (decodeToken.role === 'student') {
                if (currentPath.includes('/teacher')) {
                    return NextResponse.redirect(
                        new URL('/dashboard/student', request.url)
                    );
                }
            }
        }
    }

    const hidePathForAlreadyLoggedInUser = currentPath.includes('/auth');
    if (hidePathForAlreadyLoggedInUser) {
        if (token) {
            if (decodeToken.role === 'teacher') {
                return NextResponse.redirect(
                    new URL('/dashboard/teacher', request.url)
                );
            } else if (decodeToken.role === 'student') {
                return NextResponse.redirect(
                    new URL('/dashboard/student', request.url)
                );
            }
        }
    }
}

export const config = {
    matcher: ['/', '/auth/:path*', '/dashboard/:path*']
};

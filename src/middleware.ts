import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export async function middleware(request: NextRequest) {
    const token = await request.cookies.get('project_pilot_token')?.value;
    const decodeToken: any = (await jwt.decode(token!)) as { role?: string };
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
                if (currentPath.includes('/superadmin')) {
                    return NextResponse.redirect(
                        new URL('/dashboard/teacher', request.url)
                    );
                }
                if (currentPath.includes('/college')) {
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
                if (currentPath.includes('/college')) {
                    return NextResponse.redirect(
                        new URL('/dashboard/student', request.url)
                    );
                }
                if (currentPath.includes('/superadmin')) {
                    return NextResponse.redirect(
                        new URL('/dashboard/student', request.url)
                    );
                }
            } else if (decodeToken.role === 'superadmin') {
                if (currentPath.includes('/teacher')) {
                    return NextResponse.redirect(
                        new URL('/dashboard/superadmin', request.url)
                    );
                }
                if (currentPath.includes('/college')) {
                    return NextResponse.redirect(
                        new URL('/dashboard/superadmin', request.url)
                    );
                }
                if (currentPath.includes('/student')) {
                    return NextResponse.redirect(
                        new URL('/dashboard/superadmin', request.url)
                    );
                }
            } else if (decodeToken.role === 'college') {
                if (currentPath.includes('/teacher')) {
                    return NextResponse.redirect(
                        new URL('/dashboard/college', request.url)
                    );
                }
                if (currentPath.includes('/student')) {
                    return NextResponse.redirect(
                        new URL('/dashboard/college', request.url)
                    );
                }
                if (currentPath.includes('/superadmin')) {
                    return NextResponse.redirect(
                        new URL('/dashboard/college', request.url)
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
            } else if (decodeToken.role === 'college') {
                return NextResponse.redirect(
                    new URL('/dashboard/college', request.url)
                );
            } else if (decodeToken.role === 'superadmin') {
                return NextResponse.redirect(
                    new URL('/dashboard/superadmin', request.url)
                );
            }
        }
    }
}

export const config = {
    matcher: ['/', '/auth/:path*', '/dashboard/:path*']
};

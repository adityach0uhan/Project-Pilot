import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
export async function middleware(request: NextRequest) {
    const token = await request.cookies.get('token')?.value;
    const decodeToken = (await jwt.decode(token!)) as { role?: string };
    const currentPath = request.nextUrl.pathname;
    const hidePathForAlreadyLoggedInUser =
        currentPath === '/auth/login' || currentPath === '/auth/resgister';
    if (hidePathForAlreadyLoggedInUser) {
        if (token && decodeToken) {
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
    } else {
        if (!token) {
            return NextResponse.redirect(new URL('/auth/login', request.url));
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/auth/:path*', '/dashboard/:path*']
};

import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret_ = new TextEncoder().encode('super_long_secret_key_ultrasecret_must_be_at_least_64_bytes_long_super_long_secret_key_ultrasecret');

export async function middleware(request) {
    const token = request.cookies.get('jwt');
    if (!token) {
        if (request.nextUrl.pathname.includes('/login')) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    } else {
        try {
            const value = token.value
            //await jwtVerify(token, secret_);
            if (token && request.nextUrl.pathname.includes('/login')) {
                return NextResponse.redirect(new URL('/home', request.url));
            }
            return NextResponse.next();
        } catch (error) {
            console.error("Error de verificación de token:", error);
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
}

export const config = {
    matcher: [
        '/home', '/login' // Ajusta esto según tus rutas protegidas
    ]
};

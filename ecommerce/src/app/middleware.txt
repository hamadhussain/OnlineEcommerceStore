// // // // // // // // // 'use client'
// // // // // // // // // import { NextResponse } from 'next/server'
// // // // // // // // // import { useSession, signIn, signOut } from "next-auth/react";

// // // // // // // // // // This function can be marked `async` if using `await` inside
// // // // // // // // // export async function middleware(request) {
// // // // // // // // //   const { data: session } = useSession();

// // // // // // // // //     if (session) {
// // // // // // // // //         return await NextResponse.redirect(new URL('/Login', request.url))

// // // // // // // // //     } 
// // // // // // // // // }
 
// // // // // // // // // // See "Matching Paths" below to learn more
// // // // // // // // // export const config = {
// // // // // // // // //   matcher: '/Client/:path*',
// // // // // // // // // }

// // // // // // // // 'use client';
// // // // // // // // import { NextResponse } from 'next/server';
// // // // // // // // import { getToken } from 'next-auth/jwt';

// // // // // // // // // This function can be marked `async` if using `await` inside
// // // // // // // // export default async function middleware(request) {
// // // // // // // //   // Get the token from the request
// // // // // // // //   const token = await getToken({ req: request });

// // // // // // // //   // If there is no session, redirect to the Login page
// // // // // // // //   if (!token) {
// // // // // // // //     return NextResponse.redirect(new URL('/Login', request.url));
// // // // // // // //   }

// // // // // // // //   // If there is a session, continue with the request
// // // // // // // //   return NextResponse.next();
// // // // // // // // }

// // // // // // // // // See "Matching Paths" below to learn more
// // // // // // // // export const config = {
// // // // // // // //   matcher: '/Client/:path*',
// // // // // // // // };












// // // // // // // // middleware.js (for Next.js 13+)

// // // // // // // import { withAuth } from "next-auth/middleware";
// // // // // // // import { NextResponse } from 'next/server';

// // // // // // // export function middleware(req) {
// // // // // // //   // Get session data
// // // // // // //   const session = req.cookies.get('next-auth.session-token');

// // // // // // //   // If there's no session and the user is not already on the login page, redirect to login
// // // // // // //   if (!session && !req.nextUrl.pathname.startsWith('/Login')) {
// // // // // // //     const url = req.nextUrl.clone();
// // // // // // //     url.pathname = '/Login';
// // // // // // //     return NextResponse.redirect(url);
// // // // // // //   }

// // // // // // //   // Allow the request to continue if there's a valid session or already on the login page
// // // // // // //   return NextResponse.next();
// // // // // // // }

// // // // // // // export const config = {
// // // // // // //   matcher: '/Client/:path*',
// // // // // // // };







// // // // // // 'use client'


// // // // // // import { handler } from "./app/api/auth/[...nextauth]/route"
// // // // // // import { NextResponse } from 'next/server'
// // // // // // import { getSession } from "next-auth/react"


// // // // // // export async function middleware(request) {

// // // // // //     const session = await getSession(handler)

// // // // // //     if(session !== undefined || session !== null){
// // // // // //         return NextResponse.redirect(new URL('/Login', request.url))
// // // // // //     }
// // // // // // }
 
// // // // // // export const config = {
// // // // // //   matcher: '/Client/:path*',
// // // // // // };














// // // // 'use client'

// // // // import { NextResponse } from 'next/server';
// // // // import { getSession } from "next-auth/react";
// // // // export async function middleware(request) {
// // // //     // Get the session directly from the request
// // // //     const session = await getSession({  request });


// // // //     // Redirect to /Login if the session is not present
// // // //     if (!session) {
// // // //         return NextResponse.redirect(new URL('/Login', request.url));
// // // //     }
// // // // }

// // // // // Define the matcher for paths you want to protect
// // // // export const config = {
// // // //     matcher: '/Client/:path*',
// // // // };









// // // // // 'use client'

// // // // // import { NextResponse } from 'next/server';
// // // // // import { getServerSession } from "next-auth/next"; // Use getServerSession for middleware

// // // // // export async function middleware(request) {
// // // // //     // Get the session directly from the request
// // // // //     const session = await getServerSession(request);

// // // // //     // Redirect to /Login if the session is not present
// // // // //     if (!session) {
// // // // //         return NextResponse.redirect(new URL('/Login', request.url));
// // // // //     }

// // // // //     // Continue to the requested page if the session exists
// // // // //     return NextResponse.next();
// // // // // }

// // // // // // Define the matcher for paths you want to protect
// // // // // export const config = {
// // // // //     matcher: '/Client/:path*',
// // // // // };














// // // 'use client'

// // // import { NextResponse } from 'next/server';
// // // import { getServerSession } from "next-auth/next";

// // // export async function middleware(request) {
// // //     try {
// // //         const session = await getServerSession(request);

// // //         if (!session) {
// // //             return NextResponse.redirect(new URL('/Login', request.url));
// // //         }

// // //         return NextResponse.next();
// // //     } catch (error) {
// // //         console.error("Error fetching session:", error);
// // //         return NextResponse.redirect(new URL('/Login', request.url));
// // //     }
// // // }

// // // // Define the matcher for paths you want to protect
// // // export const config = {
// // //     matcher: '/Client/:path*',
// // // };

// import { NextResponse } from 'next/server';
// import { getServerSession } from "next-auth/next";

// export async function middleware(request) {
//     try {
//         const session = await getServerSession(request);

//         if (!session) {
//             return NextResponse.redirect(new URL('/Login', request.url));
//         }

//         return NextResponse.next();
//     } catch (error) {
//         console.error("Error fetching session:", error);
//         return NextResponse.redirect(new URL('/Login', request.url));
//     }
// }

// export const config = {
//     matcher: '/Ls/:path*',
// };







import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function middleware(request) {
    try {
        const token = request.cookies.get('next-auth.token'); // Adjust according to your cookie setup

        if (!token) {
            return NextResponse.redirect(new URL('/Login', request.url));
        }

        // Verify the JWT token
        const session = jwt.verify(token, process.env.JWT_SECRET);

        if (!session) {
            return NextResponse.redirect(new URL('/Login', request.url));
        }

        return NextResponse.next();
    } catch (error) {
        console.error("Error fetching session:", error);
        return NextResponse.redirect(new URL('/Login', request.url));
    }
}

export const config = {
    matcher: '/Ls/:path*',
};

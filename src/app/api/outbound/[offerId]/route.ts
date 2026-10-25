import {NextResponse} from 'next/server';
// Fail closed: real offer IDs and approved destination links must be resolved on the server.
// Do not accept arbitrary URLs from request query params (open redirect risk).
export async function GET(){return NextResponse.json({error:'Affiliate redirects disabled pending approved link integration'},{status:503});}

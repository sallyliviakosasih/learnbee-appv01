import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import * as bcrypt from 'bcrypt';

export async function POST(request) {
    const res = await request.json();
    const {inputLoginEmail, inputLoginPassword} = res;
     const result = await prisma.user.findUnique({
         where: {email: inputLoginEmail}
     })
     console.log(result.password);
    if(result) {
        const isPasswordVerified = await bcrypt.compare(inputLoginPassword, result.password);
        if(isPasswordVerified) {
            return new NextResponse({result});
        }
    }
    return NextResponse.error();
    
}
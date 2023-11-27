import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(request) {
    const res = await request.json();
    const {inputLoginEmail, inputLoginPassword} = res;
    const result = await prisma.user.findMany({
        where: {email: inputLoginEmail}
    })
    return NextResponse.json(request);
}
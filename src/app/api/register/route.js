import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { genSalt, hash } from "bcrypt";

export async function POST(request) {
    const res = await request.json();
    const {inputNama, inputNim, inputEmail, inputPassword, inputConfirmPassword} = res;
    const hashedPassword = await hash(inputPassword, 10);
    const results = await prisma.user.create({
        data: {
            nama: inputNama, 
            nim: inputNim, 
            email: inputEmail,
            password: hashedPassword,
        }
    })
    return NextResponse.json({user: results, message: "Akun berhasil dibuat"});
}
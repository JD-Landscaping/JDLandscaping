import { contactInfo } from "@/lib/data";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.SERVER_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstname, lastname, email, phone, message } = await req.json();

    const fullName = `${firstname} ${lastname}`;

    const result = await resend.emails.send({
      from: `Your Site ${process.env.SERVER_RESEND_FROM_EMAIL}`,
      to: process.env.SERVER_TO_EMAIL,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
       
      `,
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

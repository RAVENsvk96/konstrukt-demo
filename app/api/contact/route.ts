import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Vyplňte všetky polia." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Autoservis Demo <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `Nová správa z webu od ${name}`,
      replyTo: email,
      text: `
Meno: ${name}
Email: ${email}

Správa:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Správu sa nepodarilo odoslať." },
      { status: 500 }
    );
  }
}
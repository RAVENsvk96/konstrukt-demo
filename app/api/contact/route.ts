import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Vyplňte všetky polia." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: process.env.CONTACT_FROM!,
      to: process.env.CONTACT_EMAIL!,
      subject: `Nový dopyt z webu • ${subject}`,
      replyTo: email,
      text: `
Meno:
${name}

Email:
${email}

Predmet:
${subject}

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
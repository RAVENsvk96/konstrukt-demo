import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactFrom = process.env.CONTACT_FROM;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactFrom || !contactEmail) {
      console.error("Missing contact form environment variables", {
        hasResendApiKey: Boolean(apiKey),
        hasContactFrom: Boolean(contactFrom),
        hasContactEmail: Boolean(contactEmail),
      });

      return NextResponse.json(
        { error: "Kontaktný formulár nie je správne nakonfigurovaný." },
        { status: 500 },
      );
    }

    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim() : "";
    const subject =
      typeof body.subject === "string" ? body.subject.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Vyplňte všetky polia." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: contactFrom,
      to: [contactEmail],
      subject: `Nový dopyt z webu • ${subject}`,
      replyTo: email,
      text: [
        "Meno:",
        name,
        "",
        "Email:",
        email,
        "",
        "Predmet:",
        subject,
        "",
        "Správa:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        { error: "Správu sa nepodarilo odoslať." },
        { status: 502 },
      );
    }

    console.info("Contact email sent:", data?.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Správu sa nepodarilo odoslať." },
      { status: 500 },
    );
  }
}
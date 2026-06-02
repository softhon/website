import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, jobTitle, service, message, source } = body;

    if (!firstName || !lastName || !email || !company || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "hello@softhon.com";

    await resend.emails.send({
      from: "Softhon Contact <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New Inquiry from ${firstName} ${lastName} — ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0a1628;">
          <div style="background: #0a1628; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Project Inquiry</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 14px;">via softhon.com</p>
          </div>
          <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; width: 140px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; vertical-align: top;">Company</td>
                <td style="padding: 8px 0; font-size: 14px;">${company}</td>
              </tr>
              ${jobTitle ? `<tr><td style="padding: 8px 0; font-size: 13px; color: #64748b; vertical-align: top;">Job Title</td><td style="padding: 8px 0; font-size: 14px;">${jobTitle}</td></tr>` : ""}
              ${service ? `<tr><td style="padding: 8px 0; font-size: 13px; color: #64748b; vertical-align: top;">Service</td><td style="padding: 8px 0; font-size: 14px;">${service}</td></tr>` : ""}
              ${source ? `<tr><td style="padding: 8px 0; font-size: 13px; color: #64748b; vertical-align: top;">Found via</td><td style="padding: 8px 0; font-size: 14px;">${source}</td></tr>` : ""}
            </table>
            <div style="margin-top: 20px; padding: 20px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="margin: 0 0 8px; font-size: 13px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Project Details</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}

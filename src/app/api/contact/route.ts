import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? 'placeholder');
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 });
    }

    const recipientEmail = process.env.CONTACT_EMAIL ?? 'victor@impact-led-products.com';

    await resend.emails.send({
      from: 'Impact-led products <contact@impact-led-products.com>',
      to: recipientEmail,
      replyTo: email,
      subject: `[Contact] ${subject} — ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0D1743; color: #E8E4DC; padding: 2rem; border-radius: 12px;">
          <h2 style="color: #D9CBB5; font-size: 1.25rem; margin-bottom: 1.5rem;">Nouveau message — Impact-led products</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 0.5rem 0; color: #9BA3BF; width: 100px;">Nom</td><td style="padding: 0.5rem 0;">${name}</td></tr>
            <tr><td style="padding: 0.5rem 0; color: #9BA3BF;">Email</td><td style="padding: 0.5rem 0;"><a href="mailto:${email}" style="color: #D9CBB5;">${email}</a></td></tr>
            <tr><td style="padding: 0.5rem 0; color: #9BA3BF;">Sujet</td><td style="padding: 0.5rem 0;">${subject}</td></tr>
          </table>
          <hr style="border-color: rgba(255,255,255,0.08); margin: 1.5rem 0;" />
          <p style="line-height: 1.7; white-space: pre-wrap;">${message}</p>
          <hr style="border-color: rgba(255,255,255,0.08); margin: 1.5rem 0;" />
          <p style="color: #5A6380; font-size: 0.8125rem;">Via le formulaire de contact — impact-led-products.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

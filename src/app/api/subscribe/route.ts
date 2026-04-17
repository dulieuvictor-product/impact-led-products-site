import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? 'placeholder');

  try {
    const { email, firstName, template } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email manquant' }, { status: 400 });
    }

    const recipientEmail = process.env.CONTACT_EMAIL ?? 'dulieu.victor@gmail.com';
    const date = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

    await resend.emails.send({
      from: 'Impact-led products <contact@impact-led-products.com>',
      to: recipientEmail,
      replyTo: email,
      subject: `[Ressource demandée] ${firstName ? firstName + ' — ' : ''}${email}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0D1743; color: #E8E4DC; padding: 2rem; border-radius: 12px;">
          <h2 style="color: #D9CBB5; font-size: 1.25rem; margin-bottom: 0.5rem;">Nouvelle demande de ressource</h2>
          <p style="color: #5A6380; font-size: 0.875rem; margin-bottom: 1.5rem;">${date}</p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
            <tr>
              <td style="padding: 0.5rem 0; color: #9BA3BF; width: 100px; vertical-align: top;">Prénom</td>
              <td style="padding: 0.5rem 0;">${firstName || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 0.5rem 0; color: #9BA3BF; vertical-align: top;">Email</td>
              <td style="padding: 0.5rem 0;"><a href="mailto:${email}" style="color: #D9CBB5;">${email}</a></td>
            </tr>
          </table>

          <hr style="border-color: rgba(255,255,255,0.08); margin: 1.5rem 0;" />

          <h3 style="color: #D9CBB5; font-size: 1rem; margin-bottom: 1rem;">Ressource(s) demandée(s)</h3>
          <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 1rem; line-height: 1.8;">
            ${(template ?? '').split(', ').map((t: string) => `• ${t}`).join('<br/>')}
          </div>

          <hr style="border-color: rgba(255,255,255,0.08); margin: 1.5rem 0;" />
          <p style="color: #5A6380; font-size: 0.8125rem;">Via le formulaire ressources — impact-led-products.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[subscribe]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

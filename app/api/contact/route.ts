import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, subject, message } = await req.json();

  // Log the incoming request
  console.log('Contact form submission:', { firstName, lastName, email, subject, message });

  // Send emails in the background
  (async () => {
    try {
      const apiKey = process.env.RESEND_API;
      if (!apiKey) {
        console.error('Resend API key not set');
        return;
      }
      const send = async (to: string, html: string, type: string) => {
        const payload = {
          from: 'onboarding@resend.dev',
          to,
          subject,
          html,
        };
        console.log(`[Resend] Sending ${type} email to:`, to, 'Payload:', payload);
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        const resText = await res.text();
        console.log(`[Resend] Response for ${type} email to ${to}:`, res.status, resText);
        if (!res.ok) {
          throw new Error(`[Resend] Failed to send ${type} email: ${res.status} ${resText}`);
        }
      };
      // Email to admin (send to user if in test mode)
      await send('info@nourendowment.org', `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>
      `, 'admin');
      // Email to user
      await send(email, `
        <h2>Thank you for contacting Nour Endowment!</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <hr/>
        <p><b>Your message:</b></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `, 'user');
    } catch (err) {
      // Log error
      console.error('Resend email error:', err);
    }
  })();

  // Respond immediately
  return NextResponse.json({ ok: true });
} 
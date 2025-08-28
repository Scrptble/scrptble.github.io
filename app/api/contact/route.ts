import { NextRequest, NextResponse } from 'next/server';

// NOTE: Prisma was removed because @prisma/client was not installed and no schema exists.
// This placeholder simply validates input and (optionally) could be extended to call
// an external service (email API, form backend, etc.).

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: NextRequest) {
  try {
    const data: ContactPayload = await req.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'name, email and message are required' },
        { status: 400 }
      );
    }

    // Placeholder persistence: log to server console (visible in deployed logs if supported)
    console.log('Contact submission', {
      name,
      email,
      subject: subject || '',
      message,
      ts: new Date().toISOString(),
    });

    // In production, replace the above with one of:
    // - Call a serverless email API (e.g., SendGrid, Resend, Postmark)
    // - Forward to a form handling service (e.g., Formspree)
    // - Persist via an external DB API endpoint you control

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
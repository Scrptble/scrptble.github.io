import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  // TODO: Replace with real email sending or database logic
  // For now, just return success
  return NextResponse.json({ success: true });
} 
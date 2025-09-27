import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ticketId: string }> },
) {
  const { ticketId } = await params;
  // TODO: Fetch a single support ticket by its ID
  return NextResponse.json({
    message: `GET support ticket ${ticketId}`,
  });
}

import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { ticketId: string } },
) {
  // TODO: Fetch a single support ticket by its ID
  return NextResponse.json({
    message: `GET support ticket ${params.ticketId}`,
  });
}

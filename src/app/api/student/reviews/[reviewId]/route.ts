import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ reviewId: string }> },
) {
  const { reviewId } = await params;
  // TODO: Fetch a single review by its ID
  return NextResponse.json({ message: `GET review ${reviewId}` });
}

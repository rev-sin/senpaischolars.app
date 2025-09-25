import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { reviewId: string } },
) {
  // TODO: Fetch a single review by its ID
  return NextResponse.json({ message: `GET review ${params.reviewId}` });
}

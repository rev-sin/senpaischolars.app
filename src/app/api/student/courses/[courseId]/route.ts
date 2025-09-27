import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string }> },
) {
  const { courseId } = await params;
  // TODO: Fetch course details for the given courseId.
  // You might also want to include a flag indicating if the current student has purchased it.
  return NextResponse.json({
    message: `GET course ${courseId} for student`,
  });
}

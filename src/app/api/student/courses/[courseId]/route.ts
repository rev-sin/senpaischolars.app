import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { courseId: string } },
) {
  // TODO: Fetch course details for the given courseId.
  // You might also want to include a flag indicating if the current student has purchased it.
  return NextResponse.json({
    message: `GET course ${params.courseId} for student`,
  });
}

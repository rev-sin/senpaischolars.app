import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string; videoId: string }> },
) {
  const { courseId, videoId } = await params;
  // TODO: Fetch video data.
  // IMPORTANT: Ensure the student has purchased the course before returning the video data.
  return NextResponse.json({
    message: `GET video ${videoId} for course ${courseId} for student`,
  });
}

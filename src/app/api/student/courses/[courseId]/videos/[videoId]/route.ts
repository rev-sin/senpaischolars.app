import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { courseId: string; videoId: string } },
) {
  // TODO: Fetch video data.
  // IMPORTANT: Ensure the student has purchased the course before returning the video data.
  return NextResponse.json({
    message: `GET video ${params.videoId} for course ${params.courseId} for student`,
  });
}

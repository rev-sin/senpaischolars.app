import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { courseId: string } },
) {
  // TODO: Get the review content from the request body.
  // const { rating, text } = await request.json();

  // TODO: Get the student's ID from the session/authentication context.

  // TODO: Verify that the student has purchased the course before allowing a review.

  // TODO: Save the review to the database.

  return NextResponse.json({
    message: `Review submitted for course ${params.courseId}`,
  });
}

// TODO: Add a GET endpoint to fetch all reviews for a course.

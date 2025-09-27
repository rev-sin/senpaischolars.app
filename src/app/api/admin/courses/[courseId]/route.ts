import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string }> },
) {
  const { courseId } = await params;
  // Logic to get a course by ID
  return NextResponse.json({ message: `GET course ${courseId}` });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string }> },
) {
  const { courseId } = await params;
  // Logic to update a course by ID
  return NextResponse.json({ message: `PUT course ${courseId}` });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string }> },
) {
  const { courseId } = await params;
  // Logic to delete a course by ID
  return NextResponse.json({ message: `DELETE course ${courseId}` });
}

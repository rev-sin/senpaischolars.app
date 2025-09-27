import { NextResponse } from 'next/server';

export async function GET() {
  // TODO: Fetch all courses suitable for the student catalog from the database.
  return NextResponse.json({ message: 'GET all courses for students' });
}

import { NextResponse } from 'next/server';

export async function GET() {
  // Logic to get all courses
  return NextResponse.json({ message: 'GET all courses' });
}

export async function POST() {
  // Logic to create a new course
  return NextResponse.json({ message: 'POST new course' });
}

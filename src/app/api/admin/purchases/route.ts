import { NextResponse } from 'next/server';

export async function GET() {
  // Logic to get all purchases
  return NextResponse.json({ message: 'GET all purchases' });
}

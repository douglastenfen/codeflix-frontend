import { loginValidation } from '@/lib/validations/LoginValidation';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Recebido na API:', body);

    const { email, password } = loginValidation.parse(body);
    console.log('Login attempt:', { email, password });

    return new NextResponse('Login successful');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Login error:', error);
    return new NextResponse(error.message, {
      status: 400,
    });
  }
}

export async function GET() {
  return new NextResponse('this is a GET request for the login API');
}

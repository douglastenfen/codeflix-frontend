'use client';
import { AuthForm } from '@/app/components/AuthForm';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

type ServerError = {
  message: string;
};

export default function LoginForm() {
  const route = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password')?.toString() || '';

    try {
      const response = await fetch('/auth/login/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        route.push('/');
        return;
      }

      const errorData: ServerError[] = await response.json();
      setErrors(errorData.map((err) => err.message));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrors(['Login failed. Please try again later.']);
      console.error('Login error:', error);
      alert(`Login failed: ${error.message}`);
    }
  };

  return <AuthForm formType='login' onSubmit={handleSubmit} />;
}

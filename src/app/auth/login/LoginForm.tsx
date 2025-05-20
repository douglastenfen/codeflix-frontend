'use client';
import { AuthForm } from '@/app/components/AuthForm';

export default function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert('Login form submitted');
    event.preventDefault();
  };

  return <AuthForm formType='login' onSubmit={handleSubmit} />;
}

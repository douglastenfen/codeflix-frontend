'use client';
import { AuthForm } from '@/app/components/AuthForm';

export default function RegisterForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert('Register form submitted');
    event.preventDefault();
  };

  return <AuthForm formType='register' onSubmit={handleSubmit} />;
}

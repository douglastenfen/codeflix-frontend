'use client';

import { InputField } from './InputField';

type AuthFormProps = {
  formType: 'login' | 'register';
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const AuthForm: React.FC<AuthFormProps> = ({ formType, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414]/90 px-4 py-8 shadow-lg'
    >
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>
          {formType === 'login' ? 'Login' : 'Register'}
        </h1>
        <p className='text-sm text-gray-500'>
          {formType === 'login' ? (
            <>
              New to our platform?{' '}
              <a href='#' className='text-red-500 hover:underline'>
                Register
              </a>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <a href='#' className='text-red-500 hover:underline'>
                Login
              </a>
            </>
          )}
        </p>
      </div>
      <div className='mt-8 flex flex-col space-y-4'>
        <InputField
          id='email'
          label='Email'
          type='email'
          placeholder='Enter your email'
        />
        <InputField
          id='password'
          label='Password'
          type='password'
          placeholder='Enter your password'
        />
        {formType === 'register' && (
          <InputField
            id='confirm-password'
            label='Confirm Password'
            type='password'
            placeholder='Confirm your password'
          />
        )}
        <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-y-0 sm:space-x-2'>
          <button
            type='submit'
            className='flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:w-auto sm:px-8'
          >
            {formType === 'login' ? 'Login' : 'Register'}
          </button>
        </div>
      </div>
    </form>
  );
};

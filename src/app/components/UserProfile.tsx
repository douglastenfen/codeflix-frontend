import Image from 'next/image';

export const UserProfile = () => {
  return (
    <div className='flex items-center space-x-4'>
      <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
      <Image
        src='https://rb.gy/g1pwyx'
        alt=''
        className='cursor-pointer rounded'
        width={30}
        height={30}
      />
    </div>
  );
};

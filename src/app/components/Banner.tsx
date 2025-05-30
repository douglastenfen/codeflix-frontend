import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export function Banner() {
  return (
    <div className='mb-10'>
      <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
        <div className='absolute top-0 left-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
          <Image
            src='/banner.jpg'
            alt='The Shining'
            fill={true}
            className='h-[65vh] object-cover object-top lg:h-[95vh]'
          />
        </div>
        <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
          The Shining
        </h1>

        <p className='max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl'>
          Jack Torrance accepts a caretaker job at the Overlook Hotel, where he,
          along with his wife Wendy and their son Danny, must live isolated from
          the rest of the world for the winter. But they aren&apos;t prepared
          for the madness that lurks within.
        </p>

        <div className='flex space-x-3'>
          <button className='flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
            <PlayIcon className='h-6' />
            Play
          </button>

          <button className='flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
            <InformationCircleIcon className='h-6' />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

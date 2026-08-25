import React from 'react';
import Header from '../../components/Header';
import { getMovieById } from '../../service/MovieService';
import Player from '../../components/Player';

interface IWatchProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Watch({ params }: IWatchProps) {
  const { id } = await params;
  const movie = await getMovieById(id);

  if (!movie) {
    return (
      <div className='flex h-screen justify-center align-middle'>
        <Header />
        <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            Sorry, this movie is not availabe
          </h1>
        </main>
      </div>
    );
  }

  return <Player movie={movie} />;
}

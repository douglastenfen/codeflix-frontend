import Header from './components/Header';

import { Banner } from './components/Banner';
import { MovieRow } from './components/MovieRow';
import { getMovieById, getMoviesByGenre } from './service/MovieService';

export default async function Home() {
  const movie = await getMovieById('106');
  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'];

  const moviesByGenre = await Promise.all(
    genres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre, { _limit: 8 });
      return { sectionTitle: genre, movies };
    })
  );

  console.log('Movies by Genre:', moviesByGenre);

  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='no-scrollbar relative overflow-y-scroll p-8 pb-20 lg:pl-16'>
        <Banner movie={movie} />
        {moviesByGenre.map((movie) => (
          <MovieRow
            key={movie.sectionTitle}
            sectionTitle={movie.sectionTitle}
            movies={movie.movies}
          />
        ))}
      </main>
    </div>
  );
}

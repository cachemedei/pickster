import HeroBanner from './components/HeroBanner';
import SelectGenre from './components/SelectGenre';

async function fetchTrendingMovies() {
    const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week`,
        {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
            },
        }
    );
    if (!response.ok) throw new Error('Failed to fetch movies');

    const data = await response.json();
    return data.results || [];
}

export default async function HomePage() {
    const movies = await fetchTrendingMovies();

    return (
        <main className='min-h-screen mt-[60px] font-main font-extralight space-y-8'>
            <HeroBanner movies={movies} />
            <div className='space-y-10 md:absolute top-40 left-20'>
                <div className='w-72 mx-auto text-lg'>
                    <h1>
                        Let us take the hassle and wasted time out of deciding
                        what to watch.
                    </h1>
                    <p>
                        It's easy, just select a genre and we'll handle the
                        rest!
                    </p>
                </div>
                <SelectGenre />
            </div>
        </main>
    );
}

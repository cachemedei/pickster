import Movie from '@/app/components/Movie';

async function getMoviesByGenre(id) {
    const url = new URL('https://api.themoviedb.org/3/discover/movie');

    url.search = new URLSearchParams({
        include_adult: 'false',
        with_genres: id,
        include_video: 'false',
        language: 'en-US',
        page: '1',
        'primary_release_date.lte': '2023-01-01',
        region: 'AU',
        sort_by: 'popularity.desc',
        with_original_language: 'en',
    });

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
    });
    if (!response.ok) throw new Error('Failed to fetch movies');

    const data = await response.json();
    return data.results || [];
}

export default async function MovieResult({ params }) {
    const { id } = await params;
    const movies = await getMoviesByGenre(id);

    return <Movie genreId={id} movies={movies} />;
}

import WatchData from "@/app/components/WatchData";

async function fetchWatchData(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/watch/providers`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
    });
    if (!response.ok) throw new Error('Failed to fetch watch data');

    const data = await response.json();
    return data.results.AU || [];
}

export default async function WhereToWatch({ params }) {
    const { id } = await params
    const data = await fetchWatchData(id);


    return <WatchData data={data} />;
}

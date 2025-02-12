'use client';

import { useSearchParams } from 'next/navigation';
import Provider from './Provider';
import Link from 'next/link';

const getAvailableOptions = (data) =>
    data.rent && data.buy && data.subscribe
        ? 'rent, buy or watch with a subscription'
        : data.rent && data.buy
        ? 'rent or buy'
        : data.rent && data.subscribe
        ? 'rent or watch with a subscription'
        : data.buy && data.subscribe
        ? 'buy or watch with a subscription'
        : data.rent
        ? 'rent'
        : data.buy
        ? 'buy'
        : data.subscribe
        ? 'watch with a subscription'
        : 'not available';

export default function WatchData({ data }) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre') || 'Genre unknown';
    const movieTitle = searchParams.get('title') || 'Title unknown';

    return (
        <main className='min-h-screen bg-form'>
            <div className='bg-background min-h-screen w-[90%] flex flex-col px-4 space-y-14 mx-auto pt-10 md:w-4/5 xl:w-3/5 md:pt-20'>
                {!data.rent && !data.buy && !data.flatrate ? (
                    <section className='w-72 mx-auto flex flex-col space-y-8 mt-28'>
                        <h1 className='text-2xl text-center font-extralight'>
                            Sorry! It looks this movie isn't available anywhere
                        </h1>
                        <Link
                            href={`/result/${genre}`}
                            className='text-xl mx-auto border border-accent py-2 px-4 shadow-accent rounded'
                        >
                            Choose Again
                        </Link>
                        <Link
                            href={'/'}
                            className='text-xl mx-auto border border-accent py-2 px-4 shadow-accent rounded'
                        >
                            Start Over
                        </Link>
                    </section>
                ) : (
                    <h1 className='text-3xl border-b-2 border-accent w-64 mx-auto px-2 md:w-[480px] lg:w-[500px] text-center'>
                        {movieTitle}
                    </h1>
                )}
                {/* RENT */}
                {data.rent ? (
                    <Provider providerData={data.rent} type={'Rent'} />
                ) : null}

                {/* BUY */}
                {data.buy ? (
                    <Provider providerData={data.buy} type={'Buy'} />
                ) : null}

                {/* SUBSCRIBE */}
                {data.flatrate ? (
                    <Provider providerData={data.flatrate} type={'Subscribe'} />
                ) : null}
            </div>
        </main>
    );
}

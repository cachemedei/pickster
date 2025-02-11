'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

const imageLoader = ({ src, width }) => {
    return `https://image.tmdb.org/t/p/original/${src}?w=${width}`;
};

export default function Movie({ genreId, movies }) {
    const [result, setResult] = useState(0);

    const handleNext = () => {
        setResult((prev) => prev + 1);
    };

    const handleBack = () => {
        if (result === 0) return;
        setResult((prev) => prev - 1);
    };

    return (
        <main className='mt-[60px] flex flex-col font-main text-text lg:w-4/5 lg:mx-auto'>
            {/* Image */}
            <Image
                className='w-full object-cover md:w-4/5 md:mx-auto'
                loader={imageLoader}
                src={movies[result]?.backdrop_path}
                width={500}
                height={500}
                alt={movies[result]?.title}
            />

            <section className='mt-4 flex justify-between items-center w-11/12 md:w-3/5 mx-auto'>
                {/* Previous Film */}
                <button
                    className={`border border-accent rounded py-1 px-2 font-extralight `}
                    onClick={handleBack}
                >
                    Back
                </button>
                {/* Movie Title */}
                <h1 className='text-3xl text-center max-w-56 md:max-w-72 lg:max-w-80'>
                    {movies[result]?.title}
                </h1>
                {/* Next Film */}
                <button
                    className='border border-accent rounded py-1 px-2 font-extralight'
                    onClick={handleNext}
                >
                    Next
                </button>
            </section>

            {/* Movie Info */}
            <section className='space-y-4 font-light p-4 md:w-3/5 md:mx-auto'>
                {/* Year */}
                <p className='text-accent text-2xl text-center'>
                    {movies[result]?.release_date.slice(0, 4)}
                </p>
                {/* Description */}
                <p className='font-extralight text-sm lg:text-base'>
                    {movies[result]?.overview}
                </p>
            </section>

            {/* Where to watch */}
            <section className='font-extralight p-4 md:w-3/5 md:mx-auto lg:w-fit'>
                <h3>
                    Like the look of this one? We've done some extra work just
                    for you!
                </h3>
                <Link
                    href={`/watch/${
                        movies[result]?.id
                    }?genre=${encodeURIComponent(
                        genreId
                    )}&title=${encodeURIComponent(movies[result]?.title)}`}
                    passHref
                    className='flex items-center gap-2 w-fit mx-auto space-y-4'
                >
                    <p className='pt-4 mx-auto font-light w-fit'>
                        Where to watch {movies[result]?.title}
                    </p>
                    <FaArrowRight size={15} className='text-accent' />
                </Link>
            </section>
        </main>
    );
}


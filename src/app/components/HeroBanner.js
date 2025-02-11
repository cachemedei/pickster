'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const imageLoader = ({ src, width }) => {
    return `https://image.tmdb.org/t/p/original/${src}?w=${width}`;
};

export default function HeroBanner({ movies }) {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        const increaseIndex = () => {
            setIndex((prev) => (prev + 1) % movies.length);
        };

        intervalRef.current = setInterval(increaseIndex, 3500);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [movies]);

    return (
        <div className='w-full h-[300px] md:h-screen'>
            <div className='absolute w-full h-[300px] md:h-screen md:bg-black/70'></div>
            <Image
                className='w-full h-[300px] object-cover md:h-screen'
                loader={imageLoader}
                src={movies[index]?.backdrop_path}
                width={500}
                height={500}
                alt={movies[index]?.title}
            />
        </div>
    );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const genres = [
    { genre: 'Comedy', code: 35 },
    { genre: 'Action', code: 28 },
    { genre: 'Adventure', code: 12 },
    { genre: 'Horror', code: 27 },
    { genre: 'Romance', code: 10749 },
    { genre: 'SciFi', code: 878 },
];

export default function SelectGenre() {
    const [choice, setChoice] = useState({
        genre: '',
        code: null,
    });

    const handleChoice = (e) => {
        const title = e.target.getAttribute('data-title');
        const code = Number(e.target.id);
        setChoice({ genre: title, code: code });
        console.log(choice);
    };

    return (
        <main>
            <section className='flex justify-between w-72 mx-auto'>
                <h1 className='text-2xl ml-8 py-1 mb-4 border-b border-accent w-40 text-center'>
                    Genres
                </h1>
            </section>
            <ul role='list' className='w-40 mx-auto space-y-2'>
                {genres.map((genre) => (
                    <li
                        className='cursor-pointer flex justify-between w-44'
                        key={genre.code}
                    >
                        <span
                            data-title={genre.genre}
                            id={genre.code}
                            onClick={handleChoice}
                            className={`border border-accent w-28 py-2 px-4 shadow-accent rounded
                            ${
                                choice.code === genre.code
                                    ? 'bg-accent shadow-sm'
                                    : 'md:bg-black/30'
                            }`}
                        >
                            {genre.genre}
                        </span>
                        <Link href={`/result/${choice.code}`}>
                            <FaArrowRight
                                className={`cursor-pointer text-2xl mt-2 text-accent ${
                                    choice.code === genre.code
                                        ? 'block'
                                        : 'hidden'
                                }`}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

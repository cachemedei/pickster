'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const imageLoader = ({ src, width }) => {
    return `https://image.tmdb.org/t/p/original/${src}?w=${width}`;
};

export default function Provider({ providerData, type }) {
    const [showOptions, setShowOptions] = useState(false);
    const handleShowOptions = () => setShowOptions(!showOptions);

    return (
        <section className='w-80 mx-auto space-y-2'>
            <button
                onClick={handleShowOptions}
                className='flex gap-2 text-accent text-3xl'
            >
                {type}{' '}
                <FaArrowRight
                    className={`text-xl mt-2 transition duration-500 ${
                        showOptions ? 'rotate-90' : 'rotate-0'
                    }`}
                />
            </button>
            <ul
                role='list'
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    showOptions
                        ? 'max-h-[500px] opacity-100'
                        : 'max-h-0 opacity-0'
                }`}
            >
                {providerData.map((service, i) => (
                    <li
                        key={i}
                        className='flex items-center mb-3 gap-4 text-lg font-light'
                    >
                        <Image
                            className='rounded-xl'
                            loader={imageLoader}
                            src={service.logo_path}
                            width={50}
                            height={50}
                            alt={service.provider_name}
                        />
                        {service.provider_name}
                    </li>
                ))}
            </ul>
        </section>
    );
}

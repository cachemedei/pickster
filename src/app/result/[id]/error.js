'use client';
import ErrorMsg from '@/app/components/ErrorMsg';
import { useEffect } from 'react';

export default function Error({ error }) {
    useEffect(() => {}, [error]);

    return <ErrorMsg message={error.message} />;
}

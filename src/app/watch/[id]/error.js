'use client';
import { useEffect } from 'react';
import ErrorMsg from '@/app/components/ErrorMsg';

export default function error({ error }) {
    useEffect(() => {}, [error]);

    return <ErrorMsg message={error.message} />;
}

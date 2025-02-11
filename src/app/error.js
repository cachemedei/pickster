'use client';
import { useEffect } from 'react';
import ErrorMsg from './components/ErrorMsg';

export default function Error({ error }) {
    useEffect(() => {}, [error]);

    return <ErrorMsg message={error.message} />;
}

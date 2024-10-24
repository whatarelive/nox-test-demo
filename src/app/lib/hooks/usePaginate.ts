'use client';

import { useState } from "react";

export function usePaginate() {
    const pages = [1, 2, 3]; // Example
    const [page, setPage] = useState(1)

    const paginate = (value: number | string) => {
        if ( value === 'preview' && page > 1 ) return setPage(page - 1);
        if ( value === 'next' && page < pages.length ) return setPage(page + 1);
        if (typeof value === 'number') return setPage(value);
    }

    return {
        pages,
        page,
        paginate
    }
}
'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Crumb } from "@/app/lib/definitions";

function format(text: string) {
    return text[0].toUpperCase() + text.slice(1);
}

export function useCrumbs () {
    const pathname = usePathname();
    const [ crumbs, setCrumbs] = useState<Crumb[]>([]);

    useEffect(() => {
        // Divide el pathname en partes y crea los elementos del breadcrumb
        const paths = pathname.split("/");

        paths.shift();

        const newCrumbs = paths.map((value) => {
            return {
                name: format(value),
                href: value
            }
        })

        setCrumbs([ ...newCrumbs ]);
    }, [pathname]);

    return {
        crumbs,
        initial: format(pathname.split('/')[1]),
    };
}
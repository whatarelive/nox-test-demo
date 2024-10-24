'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Crumb } from "@/app/lib/definitions";

function format(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function useCrumbs () {
    const pathname = usePathname();
    const [ crumbs, setCrumbs] = useState<Crumb[]>([]);

    useEffect(() => {
        // Divide el pathname en partes y crea los elementos del breadcrumb
        const asPathWithoutQuery = pathname.split("?")[0]
        const paths = asPathWithoutQuery.split("/").filter(v => v.length > 0);

        const newCrumbs = paths.map((value, index) => {
            return {
                name: format(value),
                href: '/' + paths.slice(0, index + 1).join('/')
            }
        })

        setCrumbs([ ...newCrumbs ]);
    }, [pathname]);


    return {
        crumbs,
        initial: format(pathname.split('/')[1]),
    };
}
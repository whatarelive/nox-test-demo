'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Crumb } from "@/app/lib/definitions";

export function useCrumbs () {
    const pathname = usePathname();
    const [ crumbs, setCrumbs] = useState<Crumb[]>([]);

    useEffect(() => {
        // Divide el pathname en partes y crea los elementos del breadcrumb
        const asPathWithoutQuery = pathname.split("?")[0]
        const paths = asPathWithoutQuery.split("/").filter(v => v.length > 0);

        // creación del arreglo de crumbs.
        const newCrumbs = paths.map((value, index) => {
            return {
                name: value.charAt(0).toUpperCase() + value.slice(1),
                href: '/' + paths.slice(0, index + 1).join('/')
            }
        })

        let initial = newCrumbs[0];

        if( initial?.name === 'Orders' ) {
            initial.href = `${initial.href}/list`
        }

        if ( newCrumbs.length > 1 && newCrumbs[1].name === 'Details' ) {
            newCrumbs[1].href = `/orders/details/${newCrumbs[2].name}`
        }

        if ( initial ) {
            return setCrumbs([...newCrumbs ]);
        }

        if ( initial === undefined ) {
            initial = { name: 'Dashboard', href: '/' }
            return setCrumbs([ initial ]);
        }

    }, [pathname]);

    return {
        crumbs
    };
}
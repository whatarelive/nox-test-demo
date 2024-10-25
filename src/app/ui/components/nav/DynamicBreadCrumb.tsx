'use client';

import Link from "next/link";
import { BreadcrumbLink, ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { useCrumbs } from "@/app/lib/hooks/useCrumbs";

export function DynamicBreadCrumb() {
    const { crumbs } = useCrumbs();
    return (
        <Breadcrumb spacing='8px' separator={ <ChevronRightIcon color='#1A202C' /> } >
            {
                crumbs.map((crumb, index) => (
                    <BreadcrumbItem  w='54' h='24' key={index} isCurrentPage={ index === crumbs.length - 1 }>
                        <BreadcrumbLink
                            as={ index < crumbs.length - 1 ? Link : undefined }
                            href={ crumb.href }
                            sx={{
                                fontSize: '16px',
                                fontWeight: index === 0 ? '400' : '600',
                                lineHeight: '24px',
                                textAlign: 'center',
                                color: index === 0 ? '#718096' : '#2D3748',
                                textDecoration: 'transparent'
                            }}
                        >
                            { crumb.name }
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                ))
            }
        </Breadcrumb>
    )
}
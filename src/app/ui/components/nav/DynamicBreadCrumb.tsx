'use client';

import Link from "next/link";
import { BreadcrumbLink, ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, Text } from "@chakra-ui/react";
import { useCrumbs } from "@/app/lib/hooks/useCrumbs";

export function DynamicBreadCrumb() {
    const { crumbs, initial } = useCrumbs();

    return (
        <Breadcrumb spacing='8px' separator={ <ChevronRightIcon color='#1A202C' /> } >
            <BreadcrumbItem w='54' h='24'>
                <Text sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    textAlign: 'center',
                    color: '#718096'
                }}>
                    { initial }
                </Text>
            </BreadcrumbItem>
            {
                crumbs.map((crumb, index) => (
                    <BreadcrumbItem  w='54' h='24' key={index+1} isCurrentPage={ index === crumbs.length - 1 }>
                        <BreadcrumbLink
                            as={ index < crumbs.length - 1 ? Link : undefined }
                            href={ crumb.href }
                            sx={{
                                fontSize: '16px',
                                fontWeight: '600',
                                lineHeight: '24px',
                                textAlign: 'center',
                                color: '#2D3748',
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
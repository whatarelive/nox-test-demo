'use client';

import Image from "next/image";
import Link from "next/link";
import { Flex, useTheme } from "@chakra-ui/react";
import { Route } from "@/app/lib/definitions";
import { usePathname } from "next/navigation";

interface Props {
    route: Route
}

export function NavItem({ route }: Props) {
    const pathName = usePathname();
    const theme = useTheme();

    const isActive = pathName.includes(route.path);

    return (
        <Link
            href={ route.path }
            style={{
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '28px',
                color: `${ isActive ? theme.colors.primary.orange : theme.colors.primary.main }`,
            }}
        >
            <Flex sx={{
                height: '60px',
                justifyItems: 'center',
                alignItems: 'center',
                borderRadius: '16px',
                background: `${ isActive && theme.colors.primary.orangeLight  }`,
                paddingX: '24px',
                gap: '22px',
                transition: 'background 0.3s ease',
                ':hover': {
                    filter: !isActive
                        ? 'invert(43%) sepia(88%) saturate(4229%) hue-rotate(358deg) brightness(99%) contrast(102%)'
                        : ''
                },
            }}>
                <Image
                    src={route.navIcon}
                    alt={`Icon ${route.navIcon}`}
                    width={24}
                    height={24}
                    style={{
                        filter: isActive
                            ? 'invert(43%) sepia(88%) saturate(4229%) hue-rotate(358deg) brightness(99%) contrast(102%)'
                            : ''

                    }}
                />
                { route.label }
            </Flex>
        </Link>
    )
}
'use client'

import { usePathname, useRouter } from "next/navigation";
import { IconButton, SystemCSSProperties } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

interface Props {
    isDrawer: boolean;
    sx?: SystemCSSProperties;
}

export function ButtonOpenDrawer({ isDrawer, sx }: Props) {
    const pathname = usePathname();
    const router = useRouter();

    const handlerClick = () => {
        return isDrawer ? router.back() : router.push(`${pathname}?drawer=true`);
    }

    return (
        <IconButton
            icon={ isDrawer ? <CloseIcon /> : <HamburgerIcon /> }
            aria-label='Icon Hamburger'
            sx={{
                ...sx,
                display: isDrawer ? 'flex' : { md: 'none' }
            }}
            onClick={handlerClick}
        />
    );
}

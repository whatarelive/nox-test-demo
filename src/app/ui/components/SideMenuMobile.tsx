'use client';

import React, {Suspense} from "react";
import { useSearchParams } from "next/navigation";
import { Flex, GridItem } from "@chakra-ui/react";
import { SideMenu } from "@/app/ui/components/SideMenu";
import { ButtonOpenDrawer } from "@/app/ui/components/buttons";
import { SkeletonSideMenuMobile } from "@/app/ui/skeletons";

export function SideMenuMobile() {
    const search = useSearchParams().get('drawer');
    const isOpen = search === 'true';

    return (
        <Suspense fallback={ <SkeletonSideMenuMobile/> }>
            <GridItem
                area='nav'
                position='absolute'
                display={{
                    base: isOpen ? 'flex' : 'none',
                    md: 'none',
                    lg: 'none',
                    xl: 'none'
                }}
                sx={{
                    zIndex: 1000,
                    bg: '#FFFFFF',
                    direction: isOpen && 'row',
                }}
            >
                <Flex direction='column'>
                    <ButtonOpenDrawer
                        isDrawer={true}
                        sx={{
                            w: '24px',
                            mr:'30px',
                            mt:'10px',
                            alignSelf: 'flex-end',
                        }}
                    />
                    <SideMenu/>
                </Flex>
            </GridItem>
        </Suspense>
    )
}

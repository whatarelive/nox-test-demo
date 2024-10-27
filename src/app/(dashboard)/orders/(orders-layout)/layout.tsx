import React, { Suspense } from "react";
import { Flex, Stack } from "@chakra-ui/react";
import {
    OrdersLayoutAssignmentsView,
    OrdersLayoutBadgeView,
    OrdersLayoutPageView
} from "@/app/ui/views";
import { SkeletonAssignmentsCard } from "@/app/ui/skeletons";

interface Props {
    readonly children: React.ReactNode;
}

export default function OrderLayout({ children }: Props) {
    return (
        <Flex direction='column' sx={{
            bg: '#F9FAF8',
            gap: '20px',
            py: { base:'40px', md:'60px' },
            px: { base:'10px', md: '60px' },
            borderTopLeftRadius: { md:'50px' },
        }} >
           <OrdersLayoutBadgeView/>

            <Stack direction={{ base: 'column', lg: 'row' }} gap='40px'>
                <OrdersLayoutPageView>
                    { children }
                </OrdersLayoutPageView>

                <Suspense fallback={ <SkeletonAssignmentsCard /> }>
                    <OrdersLayoutAssignmentsView/>
                </Suspense>
            </Stack>
        </Flex>
    )
}
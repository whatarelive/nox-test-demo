import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import {
    OrdersLayoutAssignmentsView,
    OrdersLayoutBadgeView,
    OrdersLayoutPageView
} from "@/app/ui/views";

interface Props {
    readonly children: React.ReactNode;
}

export default function OrderLayout({ children }: Props) {
    return (
        <Flex direction='column' sx={{
            bg: '#F9FAF8',
            borderTopLeftRadius: '50px',
            padding: '60px',
            gap: '20px'
        }} >
           <OrdersLayoutBadgeView/>

            <Stack direction={{ base: 'column', lg: 'row' }} gap='40px'>
                <OrdersLayoutPageView>
                    { children }
                </OrdersLayoutPageView>

                <OrdersLayoutAssignmentsView/>
            </Stack>
        </Flex>
    )
}
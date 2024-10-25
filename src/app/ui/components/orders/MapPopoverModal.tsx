'use client';

import React from "react";
import { useRouter } from "next/navigation";
import {
    Button,
    HStack, Popover,
    PopoverBody,
    PopoverContent,
    PopoverFooter,
    PopoverHeader,
    Text
} from "@chakra-ui/react";
import { Order } from "@/app/lib/definitions";
import {ButtonAssign} from "@/app/ui/components/buttons/ButtonAssign";

interface Props {
    selectedOrder: Order;
}

export function MapPopoverModal({ selectedOrder }: Props) {
    const router = useRouter();

    return (
        <Popover isOpen={ !!selectedOrder }>
            <PopoverContent p='10px' borderRadius='5px'>
                <PopoverHeader border='none' sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '15px',
                    color: '#0000005C',
                }}>
                    { selectedOrder.address }
                </PopoverHeader>
                <PopoverBody border='none'>
                    <Text sx={{
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '15px',
                        color: '#4A5568',
                    }}>
                        {selectedOrder.description}
                    </Text>
                </PopoverBody>
                <PopoverFooter border='none'>
                    <HStack flex='1' justifyContent="space-between">
                        <Button
                            size="md"
                            flex='1'
                            colorScheme="orange"
                            variant="outline"
                            w='109px'
                            sx={{
                                paddingX: '12px',
                                borderRadius: '16px',
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px',
                                borderColor: '#FF7500',
                                color: '#FF7500'
                            }}
                            onClick={() => router.push(`/orders/details/${selectedOrder.orderId}`)}
                        >
                            View Details
                        </Button>
                        <ButtonAssign title='Assign'/>
                    </HStack>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    )
}
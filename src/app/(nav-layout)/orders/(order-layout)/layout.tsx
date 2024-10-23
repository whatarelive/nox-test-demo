import React from "react";
import { Flex, Stack, Badge } from "@chakra-ui/react";
import { ButtonOrderLayoutFilter } from "@/app/ui/components";

interface Props {
    children: React.ReactNode;
}

export default function OrderLayout({ children }: Props) {
    return (
        <Flex direction='column' sx={{
            height: 'full',
            bg: '#F9FAF8',
            borderTopLeftRadius: '50px',
            padding: '60px',
            gap: '20px'
        }} >

            <Stack direction='row' alignItems='center' placeContent='end'>
                <Stack direction='row' >
                    <Badge colorScheme='gray' variant='solid' pt='1' px='2' cursor='pointer' >
                        All Status
                    </Badge>
                    <Badge colorScheme='blue' variant='outline' pt='1' px='2' cursor='pointer' >
                        Transporting
                    </Badge>
                    <Badge colorScheme='orange' variant='outline' pt='1' px='2' cursor='pointer'>
                        Packaging
                    </Badge>
                    <Badge colorScheme='green' variant='outline' pt='1' px='2' cursor='pointer'>
                        Delivered
                    </Badge>
                    <Badge colorScheme='red' variant='outline' pt='1' px='2' cursor='pointer'>
                        Canceled
                    </Badge>
                </Stack>
                <ButtonOrderLayoutFilter/>
            </Stack>

            { children }
        </Flex>
    )
}
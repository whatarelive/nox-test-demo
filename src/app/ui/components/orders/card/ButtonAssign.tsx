'use client'

import { Button } from "@chakra-ui/react";

interface Props {
    title: string;
    onClick?: () => void;
}

export function ButtonAssign({ title }: Props) {
    return (
        <Button size='md' variant='solid' colorScheme='blue' sx={{
            flex: '1',
            paddingX: '16px',
            gap: '8px',
            borderRadius: '16px',
            bg: '#FF7500'
        }}>
            { title }
        </Button>
    )
}
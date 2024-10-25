'use client';

import { Button } from "@chakra-ui/react";

export function ButtonChangeStatus() {
    return (
        <Button
            variant='solid'
            colorScheme='blue'
            bg='#FF7500'
            borderRadius='20px'
            sx={{
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '20px',
            }}
            onClick={() => alert('Change Status')}
        >
            Change Status
        </Button>
    )
}
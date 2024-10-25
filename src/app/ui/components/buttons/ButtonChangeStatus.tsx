'use client';

import { Button } from "@chakra-ui/react";

export function ButtonChangeStatus() {
    return (
        <Button
            bg='#FF7500'
            colorScheme='blue'
            borderRadius='20px'
            sx={{
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '20px',
            }}
            _hover={{ transform: 'translateY(-1px)', boxShadow: 'md' }}
            transition="all 0.2s"
            onClick={() => alert('Change Status')}
        >
            Change Status
        </Button>
    )
}
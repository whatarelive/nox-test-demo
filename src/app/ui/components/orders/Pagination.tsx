'use client';

import { Button, ButtonGroup, HStack } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { usePaginate } from "@/app/lib/hooks/usePaginate";

export function Pagination() {
    const { pages, page, paginate } = usePaginate();

    return (
        <>
            <Button
                size='md'
                variant='outline'
                h='40px' w='99px'
                sx={{
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '24px',
                px:'16px',
                gap:'8px',
                color:'#FF7500',
                border: 'none'
            }}
                onClick={() => paginate('preview')}
            >
                <ArrowBackIcon/>
                Preview
            </Button>
            <HStack flex='1' gap='10px' alignItems='center' justifyContent='center'>
                <ButtonGroup>
                    {pages.map((item) => (
                        <Button
                            key={item}
                            sx={{
                            color: `${page === item ? '#FFFFFF' : '#FF7500'}`,
                            background: `${page === item ? '#FF7500' : ''}`
                        }}
                            onClick={() => paginate(item)}
                        >
                            { item }
                        </Button>
                    ))}
                </ButtonGroup>
            </HStack>
            <Button
                size='md'
                variant='outline'
                h='40px' w='99px'
                sx={{
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '24px',
                px:'16px',
                gap:'8px',
                color:'#FF7500',
                border: 'none'
            }}
                onClick={() => paginate('next')}
            >
                Next
                <ArrowForwardIcon/>
            </Button>
        </>
    )
}
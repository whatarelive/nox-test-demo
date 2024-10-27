'use client';

import React from "react";
import Image from "next/image";
import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export function ButtonOrderLayoutFilter() {
    return (
        <ButtonGroup size='sm' w={{ md:'116px' }} p={{ md:'5px' }} isAttached variant='outline' >
            <IconButton
                size='md'
                variant='outline'
                aria-label='Options Filter'
                icon={<HamburgerIcon/>}
            />
            <IconButton
                size='md'
                variant='outline'
                aria-label='Location'
                bg='#EDF2F7'
                icon={ <Image src='/svg/location.svg' alt='Icon location' width='14' height='14'/> }
            />
        </ButtonGroup>
    )
}
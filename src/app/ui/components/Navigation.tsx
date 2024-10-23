'use client';

import {Button, HStack } from "@chakra-ui/react";
import {ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons";

export function Navigation() {
    return (
        <HStack>
            <Button colorScheme='orange' variant='outline'  aria-label='' >
                <ArrowBackIcon/>
                Previus
            </Button>
            <HStack>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
            </HStack>
            <Button colorScheme='orange' variant='outline' aria-label='' >
                Next
                <ArrowForwardIcon/>
            </Button>
        </HStack>
    )
}
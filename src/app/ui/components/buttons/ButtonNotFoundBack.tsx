'use client';

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export function ButtonNotFoundBack() {
    const router = useRouter();

    return (
        <Button
            colorScheme="blue"
            bg='#FF7500'
            size="lg"
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
            transition="all 0.2s"
            onClick={() => router.back()}
        >
            Volver atrás
        </Button>
    )
}
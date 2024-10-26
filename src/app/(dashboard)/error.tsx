'use client'

import { useEffect } from 'react';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { ButtonNotFoundBack } from "@/app/ui/components/buttons";

interface Props {
    error: Error & { digest?: string }
    reset: () => void
}

export default function ErrorPage({ error }: Props) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <Box minHeight="100vh" bg='#F9FAF8' color='gray.800' borderTopLeftRadius='50px' display="flex" alignItems="center">
            <Container maxW="container.md">
                <VStack spacing={8} align="center" textAlign="center">
                    <Heading as="h1" size="4xl" fontWeight="extrabold">
                        Oops!
                    </Heading>
                    <Text fontSize="xl">Lo sentimos, ha ocurrido un error inesperado.</Text>
                    <Box
                        bg={'red.100'}
                        color={'red.800'}
                        p={4}
                        borderRadius="md"
                        maxW="full"
                        overflowX="auto"
                    >
                        <Text fontWeight='bold'>Actualmente en desarrollo</Text>
                        <Text fontFamily="monospace">{ error.message || 'Error desconocido'}</Text>
                    </Box>
                    <ButtonNotFoundBack/>
                </VStack>
            </Container>
        </Box>
    )
}
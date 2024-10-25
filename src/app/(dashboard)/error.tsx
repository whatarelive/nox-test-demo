'use client'

import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useRouter } from "next/navigation";

interface Props {
    error: Error & { digest?: string }
    reset: () => void
}

export default function ErrorId({ error }: Props) {
    const router = useRouter();

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
                    <Button
                        colorScheme="blue"
                        bg='#FF7500'
                        size="lg"
                        onClick={() => router.back()}
                        _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                        transition="all 0.2s"
                    >
                        Volver atras
                    </Button>
                </VStack>
            </Container>
        </Box>
    )
}
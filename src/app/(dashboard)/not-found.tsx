import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { ButtonNotFoundBack } from "@/app/ui/components/buttons";

export default function NotFound() {
    return (
        <Box minHeight="100vh" bg='#F9FAF8' color='gray.800' borderTopLeftRadius='50px' display="flex" alignItems="center">
            <Container maxW="container.md">
                <VStack spacing={8} align="center" textAlign="center">
                    <Heading as="h1" color='red.500' size="4xl" fontWeight="extrabold">
                        404
                    </Heading>
                    <Text size='lg' fontWeight='bold'>Módulo en desarrollo</Text>
                    <ButtonNotFoundBack/>
                </VStack>
            </Container>
        </Box>
    )
}
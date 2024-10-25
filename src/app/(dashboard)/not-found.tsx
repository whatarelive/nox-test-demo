import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";

export default function NotFound() {
    return (
        <Box minHeight="100vh" bg='#F9FAF8' color='gray.800' borderTopLeftRadius='50px' display="flex" alignItems="center">
            <Container maxW="container.md">
                <VStack spacing={8} align="center" textAlign="center">
                    <Heading as="h1" color='red.500' size="4xl" fontWeight="extrabold">
                        404
                    </Heading>
                    <Text size='lg' fontWeight='bold'>Módulo en desarrollo</Text>
                    <Button
                        colorScheme="blue"
                        bg='#FF7500'
                        size="lg"
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
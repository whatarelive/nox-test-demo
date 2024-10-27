import Link from "next/link";
import Image from "next/image";
import {Box, Container, Heading, Text, VStack, HStack, Link as ChakraLink, Grid, Flex} from '@chakra-ui/react'

export default function DashBoard() {
    return (
        <Box minHeight="100vh" bg='#F9FAF8' borderTopLeftRadius={{ md:'50px' }} py={12}>
            <Container maxW="container.sm" px='10px'>
                <VStack spacing={8} align="stretch">
                    <Box bg='gray.100' p={8} borderRadius="lg" boxShadow="md">
                        <HStack spacing={6} align="start">
                            <Flex direction={{ base:'column', md:'row' }} alignItems='center' gap='10px'>
                                <Image
                                    src="https://avatars.githubusercontent.com/u/128400552"
                                    alt="Foto del Autor"
                                    width={128}
                                    height={150}
                                    style={{
                                        borderRadius: 24,
                                    }}
                                />
                                <VStack alignItems='start'>
                                    <Heading as="h1" size="md">
                                        Adrian Daniel Gutierrez Martinez
                                    </Heading>
                                    <Text>
                                        A continuación pueden observar y comprobar la siguiente respuesta
                                        a la prueba técnica para el puesto de programador web.
                                    </Text>
                                </VStack>
                            </Flex>
                        </HStack>
                    </Box>

                    <Box bg='gray.100' p={8} borderRadius="lg" boxShadow="md">
                        <Heading textAlign='center' as="h2" size="lg" mb={4} >
                            Métodos de Contacto
                        </Heading>
                        <HStack spacing={8} justify="center">
                            <VStack spacing={8} justify="center">
                                <Flex direction={{ base:'column', md:'row' }} gap={{ md: '10px' }} alignItems='center'>
                                    <Text fontWeight='bold'>Correo: </Text>
                                    <ChakraLink as="a" href='https://mail.google.com/mail/u/0/mailto:adriangutierrezmartinez378@gmail.com#inbox?compose=new'>
                                        adriangutierrezmartinez378@gmail.com
                                    </ChakraLink>
                                </Flex>
                                <Flex direction={{ base:'column', md:'row' }} gap={{ md: '10px' }} alignItems='center'>
                                    <Text fontWeight='bold'>Teléfono: </Text>
                                    <Text>+53 56575225</Text>
                                </Flex>
                                <Flex direction={{ base:'column', md:'row' }} gap={{ md: '10px' }} alignItems='center'>
                                    <Text fontWeight='bold'>Más trabajos en: </Text>
                                    <ChakraLink as="a" href="https://github.com/whatarelive" target='_blank'>
                                        Perfil de Github
                                    </ChakraLink>
                                </Flex>
                            </VStack>
                        </HStack>
                    </Box>

                    <Box bg='gray.100' p={8}  borderRadius="lg" boxShadow="md">
                        <Heading textAlign='center' as="h2" size="lg" mb={4} >
                            Tecnologías
                        </Heading>
                        <Grid justifyContent="center" sx={{
                            gap:{ base:'10px', md: '30px' },
                            gridTemplateColumns: { base:'repeat(2, 64px)', md: 'repeat(4, 64px)' },
                        }} >
                            <Image src='/react-svgrepo-com.svg' alt='Icono de React' width={64} height={64}/>
                            <Image src='/nextjs-icon-svgrepo-com.svg' alt='Icono de Next js' width={64} height={64}/>
                            <Image src='/chakraUi.svg' alt='Icono de Chakra Ui' width={64} height={64}/>
                            <Image src='/typescript-svgrepo-com.svg' alt='Icono de TypeScript' width={64} height={64}/>
                        </Grid>
                    </Box>

                    <Box bg='gray.100' p={8} borderRadius="lg" boxShadow="md">
                        <HStack spacing={6} align="start">
                            <VStack direction='column' alignItems='start' spacing={3}>
                                <VStack alignItems='start'>
                                    <Heading as="h1" size="lg">Rutas</Heading>
                                </VStack>
                                <VStack alignItems='start'>
                                    <ChakraLink as={ Link } href='/orders/list'> Orders/list </ChakraLink>
                                    <ChakraLink as={ Link } href='/orders/positions'> Orders/positions </ChakraLink>
                                    <ChakraLink as={ Link } href='/orders/positions?modal=true'> Orders/positions/assign </ChakraLink>
                                    <ChakraLink as={ Link } href='/orders/details/O-4516'> Orders/details </ChakraLink>
                                </VStack>
                            </VStack>
                        </HStack>
                    </Box>
                </VStack>
            </Container>
        </Box>
  );
}

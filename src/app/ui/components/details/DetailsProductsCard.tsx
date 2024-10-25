import {Card, CardBody, CardHeader, Flex, Text, Thead, Tbody, Tr, Td, Th, Table, Image } from "@chakra-ui/react";
import {TableScrollContainer} from "@/app/ui/components";

interface Props {
    products: string[];
}

export function DetailsProductsCard({ products }: Props) {
    return (
        <Card px='35px' py='30px' gap='5px' borderRadius='20px'>
            <CardHeader p='0'>
                <Flex direction='column' justify="space-between" align="start">
                    <Text sx={{
                        fontSize: '20px',
                        fontWeight: '600',
                        lineHeight: '30px',
                        color: '#05004E'
                    }}>
                        Products
                    </Text>
                    <Text sx={{
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        color: '#737791'
                    }}>
                        Order Products
                    </Text>
                </Flex>
            </CardHeader>
            <CardBody p='0'>
                <TableScrollContainer sx={{
                    p: '12px',
                    maxH: '168px',
                }}>
                    <Table variant="striped" >
                        <Thead>
                            <Tr>
                                <Th>NAME</Th>
                                <Th>COUNT</Th>
                                <Th>PRICE</Th>
                            </Tr>
                        </Thead>
                        <Tbody overflowY='auto'>
                            {products.map((product, index) => (
                                <Tr key={index} >
                                    <Td display='flex' gap='8px' flexDirection='row' alignItems='center'>
                                        <Image alt='product' src='/product.jpg' />
                                        <Text sx={{
                                            fontSize: '16px',
                                            fontWeight: '400',
                                            lineHeight: '24px',
                                            color: '#4A5568'
                                        }}>{product}</Text>
                                    </Td>
                                    <Td>00</Td>
                                    <Td>00</Td>
                                </Tr>
                            ))}
                            <Tr >
                                <Td display='flex' gap='8px' flexDirection='row' alignItems='center'>
                                    <Image alt='product' src='/product.jpg' />
                                    <Text sx={{
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        lineHeight: '24px',
                                        color: '#4A5568'
                                    }}>Hola</Text>
                                </Td>
                                <Td>00</Td>
                                <Td>00</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableScrollContainer>
            </CardBody>
        </Card>
    )
}

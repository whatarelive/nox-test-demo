import { Avatar, Flex, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { TableOrderBagde, ButtonAssign } from "@/app/ui/components/orders/card";
import { orders } from "@/app/lib/data/data";

const styles = {
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '16px',
    letterSpacing: '0.05em',
    textAlign: 'left',
    color: '#4A5568'
}

export function TableOrder() {
    return (
        <Table variant='striped' colorScheme='gray'>
            <Thead>
                <Tr>
                    <Th sx={styles}>ORDER ID</Th>
                    <Th sx={styles}>NAME</Th>
                    <Th sx={styles}>PRODUCTS</Th>
                    <Th sx={styles}>EMAIL/PHONE</Th>
                    <Th sx={styles}>STATUS</Th>
                </Tr>
            </Thead>
            <Tbody>
                {orders.slice(0,8).map((order) => (
                    <Tr key={order.orderId}>
                        <Td sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            textAlign: 'left',
                            color: '#718096',
                        }}>
                            { order.orderId }
                        </Td>
                        <Td>
                            <Flex flexDirection='row' gap='8px'>
                                <Avatar size='xs' src={ order.imageUrl }/>
                                <Text sx={{
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    lineHeight: '20px',
                                    textAlign: 'left',
                                    color: '#718096',
                                }}>
                                    { order.nameUser }
                                </Text>
                            </Flex>
                        </Td>
                        <Td sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#718096',
                            maxWidth: '176px',
                            whiteSpace: 'normal',
                            overflowWrap: 'break-word'
                        }}>
                            { order.products.map(product => product.concat(' '))}
                        </Td>
                        <Td sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            textAlign: 'left',
                            color: '#718096',
                        }}>
                            {`${ order.contact.email !== undefined ? order.contact.email : ''} `}
                            <br/>
                            {`${ order.contact.phone !== undefined ? order.contact.phone : ''}`}
                        </Td>
                        <Td sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            textAlign: 'left',
                            color: '#718096',
                        }}>
                            <TableOrderBagde status={ order.status }/>
                        </Td>
                        <Td>
                            <ButtonAssign title='Assign'/>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

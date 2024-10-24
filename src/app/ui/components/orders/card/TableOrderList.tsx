import { Avatar, Flex, Text, Tbody, Td, Tr } from "@chakra-ui/react";
import { TableOrderBagde, ButtonAssign } from "./";

import { orders } from "@/app/lib/data/data";

export function TableOrderList() {
    return (
        <Tbody>
            {
                orders.slice(0,8).map((order) => (
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
                        <Td >
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
                ))
            }
        </Tbody>
    )
}
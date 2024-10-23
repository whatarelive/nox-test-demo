import {
    Card,
    CardBody,
    HStack,
    Input,
    Select,
    Table,
    TableContainer, Tbody, Td,
    Text, Th,
    Thead, Tr
} from "@chakra-ui/react";
import {ButtonAssign, OrdersViewCardHeader} from "../orders/card";
import {orders} from "@/app/lib/data/data";
import {Navigation} from "@/app/ui/components/Navigation";

export function OrdersView() {
    return (
        <Card flex='3' sx={{
            borderRadius: '20px',
            paddingX: '35px',
            paddingY: '30px',
            gap: '5px'
        }}>
            <OrdersViewCardHeader/>
            <CardBody>
                <HStack>
                    <HStack>
                        <Select>
                            {
                                [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(num => (
                                    <option key={num} value={num}>{num}</option>
                                ))
                            }
                        </Select>
                        <Text>Entries per page</Text>
                    </HStack>
                    <HStack>
                        <Text>Search</Text>
                        <Input type='text' name='search' />
                    </HStack>
                </HStack>

                <TableContainer sx={{
                    maxHeight: '400px',
                    overflowY: 'scroll'
                }}>
                    <Table variant='striped' colorScheme='gray'>
                        <Thead>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                orders.map((order) => (
                                    <Tr key={order.orderId}>
                                        <Td>{ order.orderId }</Td>
                                        <Td>{ order.nameUser }</Td>
                                        <Td>{ order.products.toString() }</Td>
                                        <Td>
                                            {`${ order.contact.email !== undefined ? order.contact.email : ''} `}
                                            <br/>
                                            {`${ order.contact.phone !== undefined ? order.contact.phone : ''}`}
                                        </Td>
                                        <Td>{ order.status }</Td>
                                        <Td>
                                            <ButtonAssign title='Assign'/>
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>

                <Navigation/>
            </CardBody>
        </Card>
    )
}
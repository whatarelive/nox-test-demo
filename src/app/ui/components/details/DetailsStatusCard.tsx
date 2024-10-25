import { Card, CardBody, CardHeader, Flex, Text, Thead, Tbody, Tr, Td, Th, Table } from "@chakra-ui/react";
import { TableOrderBagde } from "@/app/ui/components/orders";
import { ButtonChangeStatus } from "@/app/ui/components/buttons/ButtonChangeStatus";
import { TableScrollContainer } from "@/app/ui/components";
import { Status } from "@/app/lib/definitions";

interface Props {
    data: {
        status: Status;
        date: string;
    }[]
}

export function DetailsStatusCard({ data }: Props) {
    return (
        <Card px='35px' py='30px' gap='5px' borderRadius='20px'>
            <CardHeader sx={{
                p: '0px',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
            }} >
                <Flex direction='column' justify="space-between" align="start">
                    <Text sx={{
                        fontSize: '20px',
                        fontWeight: '600',
                        lineHeight: '30px',
                        color: '#05004E'
                    }}>
                        Status
                    </Text>
                    <Text sx={{
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        color: '#737791'
                    }}>
                        Status Orders
                    </Text>
                </Flex>
                <ButtonChangeStatus/>
            </CardHeader>
            <CardBody p='0'>
                <TableScrollContainer sx={{
                    maxH: '170px',
                    py: '10px'
                }}>
                    <Table variant="striped">
                        <Thead>
                            <Tr>
                                <Th>Fecha</Th>
                                <Th>Status</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((product, index) => (
                                <Tr key={index}>
                                    <Td>{product.date}</Td>
                                    <Td>
                                        <TableOrderBagde status={product.status}/>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableScrollContainer>
            </CardBody>
        </Card>
    )
}
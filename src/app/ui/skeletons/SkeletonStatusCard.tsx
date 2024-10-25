import {
    Card,
    CardBody,
    CardHeader,
    Skeleton,
    SkeletonText,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";

export function SkeletonStatusCard() {
    return (
        <Card px='35px' py='30px' gap='5px' borderRadius='20px'>
            <CardHeader sx={{
                p: '0px',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
            }} >
                <SkeletonText noOfLines={2} w="100px"/>
                <Skeleton width='150px' height='40px' borderRadius='20px' />
            </CardHeader>

            <CardBody p='0'>
                <Table variant="striped">
                    <Thead>
                        <Tr>
                            <Th>
                                <SkeletonText noOfLines={1} w='50px'/>
                            </Th>
                            <Th>
                                <SkeletonText noOfLines={1} w='50px'/>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {[...Array(2)].map((product, index) => (
                            <Tr key={index}>
                                <Td>
                                    <SkeletonText noOfLines={1} w='100px'/>
                                </Td>
                                <Td>
                                    <Skeleton w='100px' h='20px' />
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </CardBody>
        </Card>
    )
}
import {
    Card,
    CardBody,
    CardHeader,
    SkeletonCircle,
    SkeletonText,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";

export function SkeletonProductsCard() {
    return (
        <Card px='35px' py='30px' gap='5px' borderRadius='20px'>
            <CardHeader p='0'>
                <SkeletonText noOfLines={2} w='100px'/>
            </CardHeader>
            <CardBody p='0'>
                <Table variant="striped" >
                    <Thead>
                        <Tr>
                            <Th>
                                <SkeletonText noOfLines={1} w='50px'/>
                            </Th>
                            <Th>
                                <SkeletonText noOfLines={1} w='50px'/>
                            </Th>
                            <Th>
                                <SkeletonText noOfLines={1} w='50px'/>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody overflowY='auto'>
                        {[...Array(2)].map((product, index) => (
                            <Tr key={index} >
                                <Td display='flex' gap='8px' flexDirection='row' alignItems='center'>
                                    <SkeletonCircle/>
                                    <SkeletonText noOfLines={1} w='100px'/>
                                </Td>
                                <Td>
                                    <SkeletonText noOfLines={1} w='30px'/>
                                </Td>
                                <Td>
                                    <SkeletonText noOfLines={1} w='30px'/>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </CardBody>
        </Card>
    )
}
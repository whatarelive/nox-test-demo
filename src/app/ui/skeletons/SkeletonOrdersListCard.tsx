import React from 'react'
import {
    Box,
    Flex,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    HStack,
    VStack
} from '@chakra-ui/react'

export function SkeletonOrdersListCard() {
    return (
        <Box maxWidth="1200px" margin="auto" p={5}>
            <VStack align="stretch" spacing={5}>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>ORDER ID</Th>
                            <Th>NAME</Th>
                            <Th>PRODUCTS</Th>
                            <Th>EMAIL/PHONE</Th>
                            <Th>Status</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {[...Array(5)].map((_, index) => (
                            <Tr key={index}>
                                <Td><Skeleton height="20px" width="80px" /></Td>
                                <Td>
                                    <Flex alignItems="center">
                                        <SkeletonCircle size="8" mr={2} />
                                        <SkeletonText noOfLines={1} width="120px" />
                                    </Flex>
                                </Td>
                                <Td><SkeletonText noOfLines={2} width="150px" /></Td>
                                <Td><SkeletonText noOfLines={2} width="150px" /></Td>
                                <Td><Skeleton height="20px" width="100px" /></Td>
                                <Td><Button size="sm" isLoading>Assign</Button></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>

                <Flex justifyContent="space-between" alignItems="center">
                    <Button variant="ghost" isDisabled>
                        Preview
                    </Button>
                    <HStack>
                        <Skeleton> <Button variant="ghost"/> </Skeleton>
                        <Skeleton> <Button variant="ghost"/> </Skeleton>
                        <Skeleton> <Button/> </Skeleton>
                    </HStack>
                    <Button variant="ghost">
                        Next
                    </Button>
                </Flex>
            </VStack>
        </Box>
    )
}
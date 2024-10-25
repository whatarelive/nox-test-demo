import {Box, Button, Card, CardBody, CardHeader, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";

export function SkeletonShippingCard() {
    return (
        <Card px='35px' py='30px' w='438px' maxH='521px' gap='5px' borderRadius='20px'>
            <CardHeader p='0' justifyContent="space-between">
                <Flex p='0' justifyContent='space-between' direction="row">
                    <SkeletonText w='100px' noOfLines={2}/>
                    <Button loadingText='Assign' isLoading/>
                </Flex>
            </CardHeader>

            <CardBody px='0' py='7px' gap='40px'>
                <Skeleton height='282px' width='100%' mb='15px'>
                    <Box w='100px' h='100px'/>
                </Skeleton>
                <SkeletonText noOfLines={5}/>
            </CardBody>
        </Card>
    )
}
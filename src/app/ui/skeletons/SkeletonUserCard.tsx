import {
    Card,
    CardBody,
    CardHeader,
    Flex,
    FormControl, Input, Skeleton, SkeletonText,
    VStack
} from "@chakra-ui/react";

export function SkeletonUserCard() {
    return (
        <Card maxH='515px' px='35px' py='30px' gap='5px' borderRadius='20px'>
            <CardHeader p='0'>
                <SkeletonText noOfLines={2} w='100px' />
            </CardHeader>
            <CardBody py='10px' px='0'>
                <form>
                    <VStack align="stretch" >
                            <FormControl py='10px'>
                                <SkeletonText noOfLines={1} w='100px' pb='10px'/>
                                <Skeleton>
                                    <Input/>
                                </Skeleton>
                            </FormControl>

                        <Flex gap='20px'>
                            <FormControl py='10px'>
                                <SkeletonText noOfLines={1} w='100px' pb='10px'/>
                                <Skeleton>
                                    <Input/>
                                </Skeleton>
                            </FormControl>

                            <FormControl py='10px'>
                                <SkeletonText noOfLines={1} w='100px' pb='10px'/>
                                <Skeleton>
                                    <Input/>
                                </Skeleton>
                            </FormControl>
                        </Flex>

                        <FormControl py='10px'>
                            <SkeletonText noOfLines={1} w='100px' pb='10px'/>
                            <Skeleton>
                                <Input/>
                            </Skeleton>
                        </FormControl>

                        <Flex gap='20px'>
                            <FormControl py='10px'>
                                <SkeletonText noOfLines={1} w='100px' pb='10px'/>
                                <Skeleton>
                                    <Input/>
                                </Skeleton>
                            </FormControl>

                            <FormControl py='10px'>
                                <SkeletonText noOfLines={1} w='100px' pb='10px'/>
                                <Skeleton>
                                    <Input/>
                                </Skeleton>
                            </FormControl>
                        </Flex>
                    </VStack>
                </form>
            </CardBody>
        </Card>
    )
}
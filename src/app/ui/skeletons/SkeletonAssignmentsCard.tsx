import {
    Box,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Button,
    CardHeader,
    Text,
    CardBody,
    CardFooter, Card
} from "@chakra-ui/react"

export function SkeletonAssignmentsCard() {
    return (
        <Card
            flex='1'
            display='flex'
            sx={{
                borderRadius: '20px',
                paddingX: '35px',
                paddingY: '30px',
            }}
            gap={{ base: '30px', lg: '10px' }}
            maxW={{ base: 'full', lg: '317px' }}
        >
            <CardHeader p='0' >
                <SkeletonText noOfLines={2}>
                    <Text>Assignments</Text>
                </SkeletonText>
            </CardHeader>

            <CardBody p='0'>
                {[...Array(3)].map((_, i) => (
                    <Box key={i} mb='10px' display="flex" alignItems="center">
                       <SkeletonCircle size="10" mr={3} />
                       <Box flex={1}>
                           <Skeleton height="20px" width="60%" />
                       </Box>
                      <SkeletonCircle size="6" />
                   </Box>
                ))}
            </CardBody>

            <CardFooter w={{ base: '250px', lg: 'full' }} alignSelf='center' p='0'>
                <Button
                    flex='1'
                    isLoading
                    loadingText="Assign All"
                    variant="solid"
                    spinnerPlacement="start"
                >
                    Assign All
                </Button>
            </CardFooter>
        </Card>
    )
}
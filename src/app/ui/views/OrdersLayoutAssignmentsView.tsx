import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";
import { ButtonAssign, ListAssignments } from "../components/orders/card";

export function OrdersLayoutAssignmentsView() {
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
                <Text sx={{
                    fontWeight: '600',
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: '#05004E'
                }}>
                    Assignments
                </Text>
                <Text sx={{
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#737791'
                }}>
                    Assignments to messengers
                </Text>
            </CardHeader>

            <CardBody p='0'>
                <ListAssignments/>
            </CardBody>

            <CardFooter w={{ base: '250px', lg: 'full' }} alignSelf='center' p='0'>
                <ButtonAssign title='Assign All'/>
            </CardFooter>
        </Card>
    )
}
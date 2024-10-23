import { Card, CardHeader, CardBody, CardFooter, Text, Heading } from "@chakra-ui/react";
import { ButtonAssign, ListAssignments } from "./card";

export function AssignmentsView() {
    return (
        <Card flex='1' sx={{
                minWidth: '317px',
                maxWidth: 'fit-content',
                borderRadius: '20px',
                paddingX: '35px',
                paddingY: '30px',
                gap: '10px'
            }}>
            <CardHeader p='0' >
                <Heading as='h4' sx={{
                    fontWeight: '600',
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: '#05004E'
                }}>
                    Assignments
                </Heading>
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
            <CardFooter p='0'>
                <ButtonAssign title='Assign All'/>
            </CardFooter>
        </Card>
    )
}
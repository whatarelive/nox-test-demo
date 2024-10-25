import {
    Card,
    CardBody,
    CardHeader,
    Text, Flex,
    Input, VStack,
    FormControl,
    FormLabel
} from "@chakra-ui/react";
import { UserOrder } from "@/app/lib/definitions";

const textStyle = {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    textAlign: 'left',
    color: '#737791'
}

interface Props {
    user: UserOrder
}

export function DetailsUserCard({ user }: Props) {
    return (
        <Card maxH='515px' px='35px' py='30px' gap='5px' borderRadius='20px'>
            <CardHeader p='0'>
                <Text sx={{
                    fontSize: '20px',
                    fontWeight: '600',
                    lineHeight: '30px',
                    textAlign: 'left',
                    color: '#05004E'
                }}>
                    Order User
                </Text>
                <Text sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    textAlign: 'left',
                    color: '#737791'
                }}>
                    User creating the order
                </Text>
            </CardHeader>
            <CardBody py='10px' px='0'>
                <form>
                    <VStack align="stretch" >
                        <FormControl py='10px' gap='10px'>
                            <FormLabel sx={textStyle} >
                                Username
                            </FormLabel>
                            <Input name='username' value={ user.userName } isReadOnly />
                        </FormControl>

                        <Flex gap='20px'>
                            <FormControl py='10px' gap='10px'>
                                <FormLabel sx={textStyle}>
                                    Firstname
                                </FormLabel>
                                <Input name='firstname' value={ user.firstName } isReadOnly />
                            </FormControl>

                            <FormControl py='10px' gap='10px'>
                                <FormLabel sx={textStyle}>Lastname</FormLabel>
                                <Input name='lastname' value={ user.lastName } isReadOnly />
                            </FormControl>
                        </Flex>

                        <FormControl py='10px' gap='10px'>
                            <FormLabel sx={textStyle}>Identity Card</FormLabel>
                            <Input name='identityCard' value={ user.identityCard } isReadOnly />
                        </FormControl>

                        <Flex gap='20px'>
                            <FormControl py='10px' gap='10px'>
                                <FormLabel sx={textStyle} >Phone Number</FormLabel>
                                <Input name='phone' value={ user.phone } isReadOnly />
                            </FormControl>

                            <FormControl py='10px' gap='10px'>
                                <FormLabel sx={textStyle}>Email</FormLabel>
                                <Input type='email' name='email' value={ user.email } isReadOnly />
                            </FormControl>
                        </Flex>
                    </VStack>
                </form>
            </CardBody>
        </Card>
    )
}
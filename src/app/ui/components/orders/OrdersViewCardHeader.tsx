import {
    CardHeader,
    HStack,
    Input,
    InputGroup,
    Text,
    VStack
} from "@chakra-ui/react";

export function OrdersViewCardHeader() {
    return (
        <CardHeader sx={{
            display: 'flex',
            padding: '0',
            flexDirection: 'row'
        }}>
            <VStack flex='2' alignItems='start' >
                <Text sx={{
                    fontSize: '20px',
                    fontWeight: '600',
                    lineHeight: '30px',
                    textAlign: 'left',
                    color: '#05004E'
                }}>
                    Orders
                </Text>
                <Text sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    textAlign: 'left',
                    color: '#737791'
                }}>
                    Order Summary
                </Text>
            </VStack>

            <HStack flex='0' p='5px' gap='10px'>
                <form style={{
                    gap: '10px',
                    borderRadius: '4px',
                    border: '1px solid #E2E8F0',
                }}>
                    <InputGroup>
                        <Input
                            name='initial-date'
                            variant='outline'
                            defaultValue="2024-01-06"
                            size='sm'
                            type='date'
                        />

                        <Input
                            name='final-date'
                            variant='outline'
                            defaultValue="2024-07-06"
                            size='sm'
                            type='date'
                        />
                    </InputGroup>
                </form>
            </HStack>
        </CardHeader>
    )
}
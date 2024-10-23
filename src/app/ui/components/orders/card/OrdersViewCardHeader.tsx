import {
    CardHeader,
    Heading,
    HStack,
    Input,
    InputGroup,
    Text,
    VStack
} from "@chakra-ui/react";
import {fonts} from "@/app/ui/fonts/fonts";

export function OrdersViewCardHeader() {
    return (
        <CardHeader sx={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <VStack flex='2' alignItems='start' >
                <Heading as='h3'>Orders</Heading>
                <Text>Order Summary</Text>
            </VStack>
            <HStack flex='0' p='2.5' gap='10'>
                <form style={{
                    gap: '10px',
                    borderRadius: '4px',
                    border: '1px solid #E2E8F0',
                }}>
                    <InputGroup>
                        <Input
                            className={ fonts.inter.className }
                            variant='outline'
                            placeholder='1/6/2024'
                            size='sm'
                            type='date'
                            sx={{
                                width: '205px',
                                height: '32px',
                                paddingX: '12px',
                                borderTopLeftRadius: '4px',
                                borderBottomLeftRadius: '4px',
                            }}
                            _placeholder={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '16.94px',
                                textAlign: 'left',
                                color: '#A0AEC0',
                            }}
                        />

                        <Input
                            className={ fonts.inter.className }
                            variant='outline'
                            placeholder='7/6/2024'
                            size='sm'
                            type='date'
                            sx={{
                                width: '205px',
                                height: '32px',
                                paddingX: '12px',
                                borderTopRightRadius: '4px',
                                borderBottomRightRadius: '4px',
                            }}
                            _placeholder={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '16.94px',
                                textAlign: 'left',
                                color: '#A0AEC0',
                            }}
                        />
                    </InputGroup>
                </form>
            </HStack>
        </CardHeader>
    )
}
import { HStack, Input, Select, Text } from "@chakra-ui/react";

export function FilterTable() {
    return (
        <HStack px='6px' gap='10px' >
            <HStack w='239px' h='52px' gap='10px'>
                <Select size='sm' w='98px' h='32px'
                    sx={{
                        borderRadius: '6px',
                        border: '1px solid #E2E8F0',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '20px',
                        color: '#2D3748'
                    }}
                    _focus={{
                    border: '1px solid #FF7500',
                    shadow: 'none'
                }}
                >
                    {[5, 6, 8, 7, 9, 10].reverse().map((num) => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                </Select>

                <Text sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    textAlign: 'left',
                    color: '#737791'
                }}>
                    Entries per page
                </Text>

            </HStack>

            <HStack flex='1' p='10px' gap='10px' justifyContent='end'>
                <Text sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    textAlign: 'left',
                    color: '#737791'
                }}>
                    Search
                </Text>
                <Input
                    type='text'
                    name='search'
                    sx={{
                        w:'222px',
                        px:'12px',
                        gap:'10px',
                        h:'32px',
                        borderRadius: '4px',
                        opacity: '0px',
                        border: '1px solid #E2E8F0',
                        color: '#A0AEC0'
                    }}
                />
            </HStack>

        </HStack>
    )
}
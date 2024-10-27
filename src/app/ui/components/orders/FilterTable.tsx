import {FormControl, FormLabel, HStack, Input, Select, Stack, Text} from "@chakra-ui/react";


export function FilterTable() {
    return (
        <Stack sx={{
            px:'6px',
            gap:'10px',
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems:'center'
        }}>
            <HStack h='52px' gap='10px'>
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
                }}>
                    {[5, 6, 8, 7, 9, 10].reverse().map((num) => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </Select>

                <Text sx={{
                    w: '300px',
                    display: { base: 'none', md: 'block' },
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    textAlign: 'left',
                    color: '#737791'
                }}>
                    Entries per page
                </Text>
            </HStack>
            <FormControl sx={{
                    display: 'flex',
                    p: { md:'10px' },
                    gap:'10px',
                    flexDirection:'row',
                    align:'center',
                    justifyContent: 'end'
                }}>
                <Text sx={{
                    display: { base: 'none', md: 'block' },
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    alignSelf:'center',
                    color: '#737791'
                }}>
                    Search
                </Text>
                <Input
                    type='text'
                    name='search'
                    sx={{
                        maxW: { base: 'auto', md: '222px' },
                        px:'12px',
                        gap:'10px',
                        h:'32px',
                        borderRadius: '4px',
                        opacity: '0px',
                        border: '1px solid #E2E8F0',
                        color: '#A0AEC0'
                    }}
                />
            </FormControl>
        </Stack>
    )
}
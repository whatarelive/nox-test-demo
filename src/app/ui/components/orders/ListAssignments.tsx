import { Avatar, Flex, Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import { TableScrollContainer } from "@/app/ui/components";
import { messengers } from "@/app/lib/data/data";

export function ListAssignments() {
    return (
        <TableScrollContainer sx={{
            overflowX: 'hidden',
            w: { base: 'full', lg: '247px' }
        }}>
            <Table variant='striped' colorScheme='gray'>
                <Tbody>
                    {messengers.map((messenger) => (
                        <Tr key={messenger.id}>
                            <Td w={{ base: 'full', lg: '100px' }}>
                                <Flex alignItems='center' gap='10px'>
                                    <Avatar size='xs' name={messenger.name} src={messenger.imageUrl} />
                                    <Text sx={{
                                        fontWeight: '400',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#4A5568'
                                    }}>
                                        { messenger.name }
                                    </Text>
                                </Flex>
                            </Td>
                            <Td p={{ lg: '0px' }}>
                                <Text sx={{
                                    width: '24px',
                                    height: '24px',
                                    padding: '2px',
                                    textAlign: 'center',
                                    borderRadius: '50px',
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    color: '#F7FAFC',
                                    bg: '#FF7500'
                                }}>
                                    { messenger.numOrders }
                                </Text>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableScrollContainer>
    )
}

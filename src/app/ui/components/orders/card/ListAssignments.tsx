import { Avatar, List, ListItem, Text } from "@chakra-ui/react";
import { messengers } from "@/app/lib/data/data";

export function ListAssignments() {
    return (
        <List>
            {
                messengers.map((messenger, index) => (
                    <ListItem key={ messenger.id } sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '10px',
                        gap: '10px',
                        bg: `${ (index % 2) === 0 ? '#EDF2F7' : '' }`
                    }}>
                        <Avatar size='xs' name={messenger.name} src={messenger.imageUrl} />
                        <Text sx={{
                            width: '159px',
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#4A5568'
                        }}>
                            { messenger.name }
                        </Text>
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
                    </ListItem>
                ))
            }
        </List>
    )
}
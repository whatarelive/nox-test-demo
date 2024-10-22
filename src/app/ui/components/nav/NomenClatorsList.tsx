import { Accordion, Box, List, ListItem, Text } from "@chakra-ui/react";
import { NomenClatorsItem } from "../nav/NomenClatorsItem";

import mockNomenClators from "../../../lib/data/nomenclators.json";

export function NomenClatorsList() {
    return (
        <Box p='2.5' gap='5'>
            <Text variant='p' sx={{
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#737791'
                }}>
                Nomenclators
            </Text>
            <Accordion>
                <List>
                    {
                        mockNomenClators.map(({title}) => (
                            <ListItem key={ title }>
                                <NomenClatorsItem title={ title } />
                            </ListItem>
                        ))
                    }
                </List>
            </Accordion>
        </Box>
    )
}
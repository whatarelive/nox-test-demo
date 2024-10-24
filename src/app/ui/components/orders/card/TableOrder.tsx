import { Table, Th, Thead, Tr} from "@chakra-ui/react";
import { TableOrderList } from "./TableOrderList";

const columns = ['ORDER ID', 'NAME', 'PRODUCTS', 'EMAIL/PHONE', 'STATUS'];

export function TableOrder() {
    return (
        <Table variant='striped' colorScheme='gray'>
            <Thead>
                <Tr>
                    {
                        columns.map((column) => (
                            <Th key={ column } sx={{
                                fontSize: '12px',
                                fontWeight: '700',
                                lineHeight: '16px',
                                letterSpacing: '0.05em',
                                textAlign: 'left',
                                color: '#4A5568'
                            }}>
                                { column }
                            </Th>
                        ))
                    }
                </Tr>
            </Thead>

            <TableOrderList/>
        </Table>
    )
}

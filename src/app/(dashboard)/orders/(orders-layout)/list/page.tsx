import { CardBody, CardFooter } from "@chakra-ui/react";
import { FilterTable, Pagination, TableOrder } from "@/app/ui/components/orders/card";
import { TableScrollContainer } from "@/app/ui/components";

export default function OrdersListPage() {
    return (
         <>
            <CardBody px='0' py='10px' gap='30px'>
                <FilterTable/>

                <TableScrollContainer sx={{
                        p:'12px',
                        overflowX: 'auto',
                        borderRadius: '12px',
                        maxH: '375px',
                    }}>
                    <TableOrder/>
                </TableScrollContainer>
            </CardBody>

            <CardFooter flex='1' px='10px' py='12px' gap='10px'>
                <Pagination/>
            </CardFooter>
         </>
    )
}
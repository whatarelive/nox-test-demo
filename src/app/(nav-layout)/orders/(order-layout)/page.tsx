import {Card, CardBody, CardFooter, Flex, TableContainer} from "@chakra-ui/react";
import { AssignmentsView } from "@/app/ui/components/orders";
import { FilterTable, OrdersViewCardHeader, Pagination, TableOrder } from "@/app/ui/components/orders/card";

export default function OrdersListPage() {
    return (
        <Flex flex='1' gap='10' h='calc(100vh - 108px)' >
            <Card flex='1' sx={{
                borderRadius: '20px',
                paddingX: '35px',
                paddingY: '30px',
                gap: '5px'
            }}>
                <OrdersViewCardHeader/>

                <CardBody px='0' py='10px' gap='30px'>
                    <FilterTable/>

                    <TableContainer p='12px' sx={{
                            borderRadius: '12px',
                        maxH: '375px',
                            overflowY: 'scroll',
                            '&::-webkit-scrollbar': {
                                width: '5px',
                                backgroundColor: 'transparent', // Fondo del scrollbar
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: '#A0AEC0', // Color del thumb
                                borderRadius: '10px', // Bordes redondeados
                            },
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: 'transparent', // Fondo del track
                            },
                        }}>
                        <TableOrder/>
                    </TableContainer>
                </CardBody>
                <CardFooter flex='1' px='10px' py='12px' gap='10px'>
                    <Pagination/>
                </CardFooter>
            </Card>

            <AssignmentsView/>
        </Flex>
    )
}
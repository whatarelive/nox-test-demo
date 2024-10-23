import { Flex } from "@chakra-ui/react";
import { AssignmentsView, OrdersView } from "@/app/ui/components/orders";


export default function OrdersListPage() {
    return (
        <Flex flex='1' gap='10' >
            <OrdersView/>
            <AssignmentsView/>
        </Flex>
    )
}
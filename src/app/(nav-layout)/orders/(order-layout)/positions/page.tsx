import { Card, CardBody, Flex } from "@chakra-ui/react";
import { OrdersViewCardHeader} from "@/app/ui/components/orders/card";
import { AssignmentsView } from "@/app/ui/components/orders";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import('../../../../ui/components/orders/card/MapView'), {
    ssr: false,
})

export default function OrdersPositionsPage() {
    return (
        <Flex flex='1' gap='10' >
            <Card flex='3' sx={{
                borderRadius: '20px',
                paddingX: '35px',
                paddingY: '30px',
                gap: '5px'
            }}>
                <OrdersViewCardHeader/>
                <CardBody px='0' py='10px' gap='20'>
                    <MapView/>
                </CardBody>
            </Card>
            <AssignmentsView/>
        </Flex>
    )
}
import { Box, Flex } from "@chakra-ui/react";
import {
    DetailsProductsCard,
    DetailsShippingAddressCard,
    DetailsStatusCard,
    DetailsUserCard
} from "@/app/ui/components/details";
import {orders, userArray} from "@/app/lib/data/data";

interface Props {
    params: {
        id: string
    }
}

export default function OrdersDetailsPage({ params }: Props) {
    const order = orders.filter((order) => order.orderId === params.id).pop();
    const user = userArray.filter((user) => user.orderId === params.id).pop();

    if (!order || !user) throw new Error("Order or User not found");

    return (
        <Flex flex='1' direction={{ base: 'column' }} sx={{
            p: '60px',
            gap: '20px',
            bg: '#F9FAF8',
            borderTopLeftRadius: '50px'
        }} >
            <Flex direction={{ base: 'column', lg: 'row' }} gap='40px'>
                <Box flex='2'>
                    <DetailsUserCard user={user}/>
                </Box>
                <Box flex='1'>
                    <DetailsShippingAddressCard position={order.position} textAreaValue={order.address}/>
                </Box>
            </Flex>

            <Flex direction={{ base: 'column', lg: 'row' }} gap='40px'>
                <Box flex='1'>
                    <DetailsProductsCard products={order.products} />
                </Box>
                <Box flex='1'>
                    <DetailsStatusCard
                        data={
                            [
                                { date: '16/10/2024 10:45:20', status: order.status },
                                { date: '15/10/2024 08:30:13', status: 'DELIVERED' }
                            ]
                        }
                    />
                </Box>
            </Flex>
        </Flex>
    )
}

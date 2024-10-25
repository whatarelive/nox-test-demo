import { Suspense } from "react";
import { Box, Flex } from "@chakra-ui/react";
import {
    DetailsProductsCard,
    DetailsShippingAddressCard,
    DetailsStatusCard,
    DetailsUserCard
} from "@/app/ui/components/details";
import {
    SkeletonProductsCard,
    SkeletonShippingCard,
    SkeletonStatusCard,
    SkeletonUserCard
} from "@/app/ui/skeletons";

import {orders, userArray} from "@/app/lib/data/data";

interface Props {
    params: {
        id: string
    }
}

export default async function OrdersDetailsPage({ params }: Props) {
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
                    <Suspense fallback={ <SkeletonUserCard/> }>
                        <DetailsUserCard user={user}/>
                    </Suspense>
                </Box>
                <Box flex='1'>
                    <Suspense fallback={ <SkeletonShippingCard/> }>
                        <DetailsShippingAddressCard position={order.position} textAreaValue={order.address}/>
                    </Suspense>
                </Box>
            </Flex>

            <Flex direction={{ base: 'column', lg: 'row' }} gap='40px'>
                <Box flex='1'>
                    <Suspense fallback={ <SkeletonProductsCard/> }>
                        <DetailsProductsCard products={order.products} />
                    </Suspense>
                </Box>
                <Box flex='1'>
                    <Suspense fallback={ <SkeletonStatusCard/> }>
                        <DetailsStatusCard
                            data={
                                [
                                    { date: '16/10/2024 10:45:20', status: order.status },
                                    { date: '15/10/2024 08:30:13', status: 'DELIVERED' }
                                ]
                            }
                        />
                    </Suspense>
                </Box>
            </Flex>
        </Flex>
    )
}

import { Suspense } from "react";
import { CardBody, CardFooter } from "@chakra-ui/react";
import { FilterTable, Pagination, TableOrder } from "@/app/ui/components/orders";
import { TableScrollContainer } from "@/app/ui/components";
import { SkeletonOrdersListCard } from "@/app/ui/skeletons";

export default async function OrdersListPage() {
    return (
         <Suspense fallback={ <SkeletonOrdersListCard/> }>
            <CardBody px='0' py='10px' gap='30px'>
                <FilterTable/>

                <TableScrollContainer sx={{
                        p:'12px',
                        overflowX: 'auto',
                        borderRadius: '12px',
                        maxH: '375px',
                        maxW: { base: '320px', md: 'full' }
                    }}>
                    <TableOrder/>
                </TableScrollContainer>
            </CardBody>

            <CardFooter sx={{
                    flex:'1',
                    px:'10px',
                    py:'12px',
                    gap:'10px',
                    justifyContent: 'space-between'
                }}>
                <Pagination/>
            </CardFooter>
         </Suspense>
    )
}
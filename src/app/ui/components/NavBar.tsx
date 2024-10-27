import { Flex } from "@chakra-ui/react";
import { DynamicBreadCrumb, ToolBar } from "@/app/ui/components/nav";

export function NavBar() {
    return (
        <Flex as='header'
              sx={{
                h:{ md: '85px' },
                p:'5px',
                gap:'10px',
                justifyContent:{ base: 'center', md:'space-between' }
              }}
        >
            <Flex alignItems='center' >
                <DynamicBreadCrumb/>
            </Flex>
            <Flex>
                <ToolBar/>
            </Flex>
        </Flex>
    )
}
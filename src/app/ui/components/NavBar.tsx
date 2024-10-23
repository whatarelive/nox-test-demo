import { Flex } from "@chakra-ui/react";
import { DynamicBreadCrumb, ToolBar } from "@/app/ui/components/nav";

export function NavBar() {
    return (
        <Flex as='header' h='85' p='5' gap='10'>
            <Flex alignItems='center'>
                <DynamicBreadCrumb/>
            </Flex>
            <Flex flex='1' justifyContent='end'>
                <ToolBar/>
            </Flex>
        </Flex>
    )
}
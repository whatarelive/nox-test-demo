import { Flex } from "@chakra-ui/react";
import { DynamicBreadCrumb, ToolBar } from "@/app/ui/components/nav";

export function NavBar() {
    return (
        <Flex as='header' h='85px'  p='5px' gap='10px'>
            <Flex display={{ base: 'none', md: 'flex' }} alignItems='center'>
                <DynamicBreadCrumb/>
            </Flex>
            <Flex flex='1' justifyContent='end'>
                <ToolBar/>
            </Flex>
        </Flex>
    )
}
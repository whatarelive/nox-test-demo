import React from "react";
import { Flex } from "@chakra-ui/react";
import { Footer, NavBar, SideMenu} from "@/app/ui/components";

interface Props {
    readonly children: React.ReactNode;
}

export default function NavigationLayout({ children }: Props) {
    return (
        <Flex direction="row" sx={{ minHeight: '100vh' }}>
            <SideMenu/>

            <Flex flex={1} direction="column" sx={{ width: 'full' }}>
                <NavBar/>
                { children }
                <Footer/>
            </Flex>

        </Flex>
    )
}
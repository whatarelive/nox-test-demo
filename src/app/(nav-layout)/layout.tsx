import React from "react";
import { Flex } from "@chakra-ui/react";
import { Footer, NavBar, SideMenu} from "@/app/ui/components";

interface Props {
    readonly children: React.ReactNode;
}

export default function NavigationLayout({ children }: Props) {
    return (
        <Flex direction="row" sx={{ maxH: '100vh', w: '100vw' }}>
            <SideMenu/>

            <Flex flex='1' direction='column' sx={{ maxH: 'inherit' }}>
                <NavBar/>
                { children }
                <Footer/>
            </Flex>

        </Flex>
    )
}
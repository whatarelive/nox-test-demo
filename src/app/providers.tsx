'use client';

import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./ui/theme";

export function Providers({ children }: { children: ReactNode }) {
    return (
        <ChakraProvider theme={ theme }>
            { children }
        </ChakraProvider>
    )
}
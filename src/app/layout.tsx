import React from "react";
import type { Metadata } from "next";
import { fonts } from "./ui/fonts/fonts";
import { Flex } from "@chakra-ui/react";
import { Providers } from './providers'
import { SideMenu, NavBar, Footer } from "./ui/components";

import "./ui/styles/globals.css";

export const metadata: Metadata = {
  title: "Demo Page",
  description: "Generated for Nox Technical Text",
};

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props ) {
  return (
    <html lang="en" className={ fonts.poppins.variable }>
      <body>
          <Providers>
              <Flex flex={1} direction="row" sx={{ minHeight: "100vh" }}>
                  <SideMenu/>

                  <Flex flex={1} direction="column" sx={{ width: 'full' }}>
                    <NavBar/>
                    { children }
                    <Footer/>
                  </Flex>

              </Flex>
          </Providers>
      </body>
    </html>
  );
}

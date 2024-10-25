import React from "react";
import type { Metadata } from "next";
import { fonts } from "../ui/fonts/fonts";
import { Grid, GridItem } from "@chakra-ui/react";
import { Footer, NavBar, SideMenu } from "@/app/ui/components";
import { Providers } from './providers'

import "../ui/styles/globals.css";

export const metadata: Metadata = {
  title: "Demo Page",
  description: "Generated for Nox Technical Text",
};

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props ) {
  return (
    <html lang="en" >
      <body className={`${fonts.poppins.className}`}>
          <Providers>
              <Grid
                  maxWidth="100vw"
                  maxH='100vh'
                  gap='0'
                  templateAreas={`"nav page"`}
                  gridTemplateColumns={{ base: 'auto auto', md: '280px auto' }}
              >
                  <GridItem
                      maxW={{ base: '0px', md: '280px' }}
                      display={{ base: 'none', md: 'flex' }} area={'nav'}
                  >
                      <SideMenu/>
                  </GridItem>
                  <GridItem area={'page'} overflowY='auto' sx={{
                      '&::-webkit-scrollbar': {
                          width: '0px',
                          backgroundColor: 'transparent', // Fondo del scrollbar
                      },
                      '&::-webkit-scrollbar-thumb': {
                          backgroundColor: 'transparent', // Color del thumb
                      },
                      '&::-webkit-scrollbar-track': {
                          backgroundColor: 'transparent', // Fondo del track
                      },
                  }}>
                      <Grid
                          h='100vh'
                          templateAreas={`"header" "main" "footer"`}
                          templateRows='auto 1fr auto'
                      >
                          <GridItem area={'header'}>
                            <NavBar/>
                          </GridItem>

                          <GridItem as='main' area={'main'}>
                            { children }
                          </GridItem>

                          <GridItem area={'footer'}>
                            <Footer/>
                          </GridItem>
                      </Grid>
                  </GridItem>
              </Grid>
          </Providers>
      </body>
    </html>
  );
}

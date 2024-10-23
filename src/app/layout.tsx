import React from "react";
import type { Metadata } from "next";
import { fonts } from "./ui/fonts/fonts";
import { Providers } from './providers'

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
    <html lang="en" >
      <body className={`${fonts.poppins.className} `}>
          <Providers>
              { children }
          </Providers>
      </body>
    </html>
  );
}

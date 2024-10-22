import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["600"],
    variable: "--fonts-poppins",
    subsets: ["latin"]
})

export const fonts = {
    poppins,
}
import {Poppins, Inter} from "next/font/google";

const poppins = Poppins({
    weight: ["400" ,"600", "500", "700"],
    variable: "--fonts-poppins",
    subsets: ["latin"]
})

const inter = Inter({
    weight: ["400" ,"600", "700"],
    variable: "--fonts-inter",
    subsets: ["latin"]
})

export const fonts = {
    poppins,
    inter,
}
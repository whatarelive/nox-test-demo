import React from "react";
import { type SystemStyleObject, TableContainer } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
    sx?:  SystemStyleObject
}

export function TableScrollContainer({ children, sx}: Props) {
    return (
        <TableContainer sx={{
            ...sx,
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
                width: '5px',
                backgroundColor: 'transparent', // Fondo del scrollbar
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#A0AEC0', // Color del thumb
                borderRadius: '10px', // Bordes redondeados
            },
            '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent', // Fondo del track
            },
        }}>
            { children }
        </TableContainer>
    )
}
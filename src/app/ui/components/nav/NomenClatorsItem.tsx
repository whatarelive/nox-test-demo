'use client';

import Image from "next/image";
import { AccordionButton, AccordionItem, AccordionPanel, Text, useTheme } from "@chakra-ui/react";

interface Props {
    title: string;
}

export function NomenClatorsItem({ title }: Props) {
    const theme = useTheme();

    return (
        <AccordionItem border='none'>
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton sx={{
                            height: '60px',
                            borderRadius: '16px',
                            paddingX: '24px',
                            gap: '22px'
                        }}>
                            <Image
                                src='/svg/arrow.svg'
                                alt='Icon'
                                width={24}
                                height={24}
                                style={{ rotate: `${ isExpanded ? '90deg' : '' }`}}
                            />
                            <Text as='span' flex='1' textAlign='left' sx={{
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '28px',
                                color: theme.colors.primary.main
                            }}>
                                {title}
                            </Text>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Options
                    </AccordionPanel>
                </>
            )}
        </AccordionItem>
    )
}
import { ark } from "@ark-ui/react";

import { cva } from "~styled-system/css";
import { styled } from "~styled-system/jsx";

export const buttonRecipe = cva({
    base: {
        fontFamily: "inter",
        fontSize: "sm",
        paddingX: "7",
        paddingY: "2.5",
        borderRadius: "3xl",
        cursor: "pointer",
        fontWeight: "semibold",
        transition: "all 0.3s",
        borderWidth: "1",
        borderStyle: "solid",
        borderColor: "transparent",
        letterSpacing: "wider",
    },
    variants: {
        variant: {
            solid: {
                color: "white",
                border: "none",
                shadow: "md",
                bgColor: "electric-300",
                _hover: {
                    bgColor: "electric-200",
                },
            },
            outlineDark: {
                color: "white",
                borderWidth: "1",
                borderStyle: "solid",
                borderColor: "metal",
                _hover: {
                    borderColor: "midnight",
                },
            },
            outlineLight: {
                color: "white",
                borderWidth: "1",
                borderStyle: "solid",
                borderColor: "metal",
                _hover: {
                    borderColor: "fog",
                },
            },
        },
    },
    defaultVariants: {
        variant: "solid",
    },
});

export const Button = styled(ark.button, buttonRecipe, {
    defaultProps: {
        variant: "solid",
    },
});

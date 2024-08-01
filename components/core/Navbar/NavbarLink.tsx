import { type ComponentPropsWithoutRef, forwardRef } from "react";

import { cx, sva } from "~styled-system/css";

export const navbarLinkRecipe = sva({
    slots: ["root", "trigger"],
    base: {
        root: {
            display: "flex",
            flexDirection: "column",
            borderBottomWidth: "2",
            borderBottomStyle: "solid",
            borderBottomColor: "transparent",
            cursor: "pointer",
            color: "white",
            lg: {
                paddingY: "2.5",
                alignItems: "center",
                flexDirection: "row",
                _hover: {
                    borderBottomColor: "electric-300",
                },
            },
        },
        trigger: {
            fontWeight: "semibold",
            display: "flex",
            alignItems: "center",
            borderBottomWidth: "1",
            borderStyle: "solid",
            borderBottomColor: "deep-metal",
            paddingY: "4",
            _groupHover: {
                color: "electric-300",
            },
            lg: {
                paddingY: "0",
                borderYWidth: "0",
            },
        },
    },
});

type NavbarLinkProperties = ComponentPropsWithoutRef<"a">;

const NavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkProperties>(
    ({ children, ...properties }: NavbarLinkProperties, reference) => {
        const classes = navbarLinkRecipe();

        return (
            <a ref={reference} {...properties} className={cx(classes.root, "group")}>
                <div className={classes.trigger}>{children}</div>
            </a>
        );
    }
);

NavbarLink.displayName = "NavbarLink";

export { NavbarLink };

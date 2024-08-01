import { type ReactNode } from "react";

import { ExpandMoreIcon } from "~components/core/icons/ExpandMoreIcon";
import { navbarLinkRecipe } from "~components/core/Navbar/NavbarLink";
import { css, cx, sva } from "~styled-system/css";

const dropdownBase = sva({
    slots: ["root", "triggerIcon"],
    base: {
        root: {
            backgroundColor: "midnight",
            width: "100%",
            position: "static",
            zIndex: 100,
            left: 0,
            paddingX: "5",
            opacity: 0,
            maxHeight: 0,
            overflow: "hidden",
            transition: "opacity 0.2s ease, max-height 0.6s ease",
            borderBottomWidth: "1",
            borderStyle: "solid",
            borderYColor: "deep-metal",
            cursor: "default",
            lg: {
                top: "63px", // navbar height - 1px
                borderTopWidth: "1",
                position: "fixed",
                paddingX: "10",
            },
            xl: {
                paddingX: "32",
            },
            "2xl": {
                paddingX: "80",
            },
            _groupHover: {
                opacity: 1,
                maxHeight: "800px",
            },
        },
        triggerIcon: {
            marginTop: "1",
            transition: "rotate 0.6s",
            transformOrigin: "center",
            _groupHover: {
                marginTop: "0",
                rotate: "180deg",
            },
        },
    },
});

export const dropdownItemRecipe = css({
    display: "flex",
    gap: "2.5",
    alignItems: "center",
    paddingY: "2.5",
    paddingX: "5",
    rounded: "xl",
    _hover: {
        bgColor: "#ffffff1a",
    },
});

interface DropdownBaseProperties {
    children: ReactNode;
    label: string;
}

export default function DropdownBase({ children, label }: DropdownBaseProperties) {
    const navbarLink = navbarLinkRecipe();
    const classes = dropdownBase();

    return (
        <div className={cx(navbarLink.root, "group")}>
            <div className={navbarLink.trigger}>
                {label}{" "}
                <ExpandMoreIcon className={classes.triggerIcon} width="20px" height="20px" />
            </div>
            <div className={classes.root}>{children}</div>
        </div>
    );
}

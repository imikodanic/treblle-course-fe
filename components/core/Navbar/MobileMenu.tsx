"use client";

import { useState } from "react";

import { MenuCloseIcon } from "~components/core/icons/MenuCloseIcon";
import { MenuIcon } from "~components/core/icons/MenuIcon";
import { NavbarLink } from "~components/core/Navbar/NavbarLink";
import ProductDropdown from "~components/core/Navbar/sections/ProductDropdown";
import ResourcesDropdown from "~components/core/Navbar/sections/ResourcesDropdown";
import SolutionsDropdown from "~components/core/Navbar/sections/SolutionsDropdown";
import { cx, sva } from "~styled-system/css";

const mobileMenu = sva({
    slots: ["root", "wrapper", "trigger", "invisible", "visible"],
    base: {
        root: {
            display: "block",
            lg: {
                display: "none",
            },
        },
        wrapper: {
            flexDirection: "column",
            position: "absolute",
            top: "60px",
            right: "0",
            width: "100vw",
            height: "calc(100vh - 60px)",
            padding: "5",
            bgColor: "midnight",
            zIndex: 100,
            overflowY: "auto",
            opacity: 0,
            visibility: "hidden",
            transition: "opacity 0.2s ease, max-height 0.6s ease, visibility 0.3s ease",
            lg: {
                display: "none",
            },
        },
        trigger: {
            display: "flex",
            alignItems: "center",
            marginLeft: "4",
            cursor: "pointer",
        },
        invisible: {
            opacity: 0,
            maxHeight: 0,
            visibility: "hidden",
        },
        visible: {
            opacity: 1,
            maxHeight: "100vh",
            visibility: "visible",
        },
    },
});

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const classes = mobileMenu();

    const dropdownClasses = cx(classes.wrapper, isOpen ? classes.visible : classes.invisible);

    return (
        <div className={classes.root}>
            <button className={classes.trigger} onClick={toggleDropdown}>
                {isOpen ? (
                    <MenuCloseIcon color="white" width="20px" height="20px" />
                ) : (
                    <MenuIcon color="white" width="20px" height="20px" />
                )}
            </button>
            <div className={dropdownClasses}>
                <ProductDropdown />
                <SolutionsDropdown />
                <NavbarLink href="http://treblle.com/pricing">Pricing</NavbarLink>
                <NavbarLink href="https://docs.treblle.com/guides/">Developers</NavbarLink>
                <ResourcesDropdown />
                <NavbarLink href="http://treblle.com/enterprise">Enterprise</NavbarLink>
            </div>
        </div>
    );
}

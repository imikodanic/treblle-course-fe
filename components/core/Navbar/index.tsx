import Image from "next/image";

import MobileMenu from "~components/core/Navbar/MobileMenu";
import { NavbarLink } from "~components/core/Navbar/NavbarLink";
import ProductDropdown from "~components/core/Navbar/sections/ProductDropdown";
import ResourcesDropdown from "~components/core/Navbar/sections/ResourcesDropdown";
import SolutionsDropdown from "~components/core/Navbar/sections/SolutionsDropdown";
import { Button } from "~components/core/ui/Button";
import { sva } from "~styled-system/css";

const navbar = sva({
    slots: [
        "root",
        "imageLink",
        "imageShort",
        "imageLong",
        "links",
        "actionsWrapper",
        "salesButton",
        "getStartedButton",
    ],
    base: {
        root: {
            position: "fixed",
            zIndex: 100,
            width: "full",
            display: "flex",
            bgColor: "midnight",
            paddingX: "5",
            justifyContent: "space-between",
            marginBottom: "20",
            borderBottomWidth: "1",
            borderStyle: "solid",
            borderColor: "deep-metal",
            lg: {
                paddingX: "8",
            },
            xl: {
                paddingX: "32",
            },
            "2xl": {
                paddingX: "72",
            },
        },
        imageLink: {
            display: "flex",
            alignItems: "center",
        },
        imageShort: {
            display: "block",
            md: {
                display: "none",
            },
        },
        imageLong: {
            display: "none",
            md: {
                display: "block",
            },
        },
        links: {
            display: "none",
            fontSize: "sm",
            fontFamily: "inter",
            lg: {
                display: "flex",
                gap: "5",
            },
        },
        actionsWrapper: {
            paddingY: "2.5",
            display: "flex",
            alignItems: "center",
            gap: "3",
        },
        salesButton: {
            display: "none",
            fontSize: "xs",
            lg: {
                display: "block",
                fontSize: "sm",
            },
        },
        getStartedButton: {
            fontSize: "xs",
            lg: {
                fontSize: "sm",
            },
        },
    },
});

export default function Navbar() {
    const classes = navbar();

    return (
        <nav className={classes.root}>
            <a href="http://treblle.com" className={classes.imageLink}>
                <Image
                    src={"/brand/logo-negative.svg"}
                    alt={"Treblle logo"}
                    width={100}
                    height={50}
                    className={classes.imageLong}
                />
                <Image
                    src={"/brand/logo-negative-short.svg"}
                    alt={"Treblle logo"}
                    width={35}
                    height={37}
                    className={classes.imageShort}
                />
            </a>
            <div className={classes.links}>
                <ProductDropdown />
                <SolutionsDropdown />
                <NavbarLink href="http://treblle.com/pricing">Pricing</NavbarLink>
                <NavbarLink href="https://docs.treblle.com/guides/">Developers</NavbarLink>
                <ResourcesDropdown />
                <NavbarLink href="http://treblle.com/enterprise">Enterprise</NavbarLink>
            </div>
            <div className={classes.actionsWrapper}>
                <Button className={classes.salesButton} variant="outlineLight" asChild>
                    <a href="http://treblle.com">Contact sales</a>
                </Button>
                <Button className={classes.getStartedButton} variant="solid" asChild>
                    <a href="http://treblle.com">Get Started</a>
                </Button>
                <MobileMenu />
            </div>
        </nav>
    );
}
